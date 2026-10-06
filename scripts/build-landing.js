// Genera landing.html: un unico file HTML autonomo (CSS, catalogo e JS inclusi)
const fs = require('fs');
const r = (p) => fs.readFileSync(p, 'utf8');
const css = r('public/styles.css');
const catalog = JSON.stringify(JSON.parse(r('data/catalog.json')));
const appJs = r('private/app.js');
const appBody = r('private/app.html').match(/<body>([\s\S]*?)<script/)[1];

const extra = `
.hero{max-width:1000px;margin:0 auto;padding:56px 16px;display:grid;grid-template-columns:1.2fr 1fr;gap:32px;align-items:center}
@media(max-width:800px){.hero{grid-template-columns:1fr;padding:32px 16px}}
.hero h1{font-size:clamp(1.8rem,4vw,2.6rem)}
.hero ul{padding-left:1.1em;color:var(--muted)}
.hero .login-card{margin:0}
[hidden]{display:none!important}`;

const html = `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Preventivi FYM</title>
<style>${css}${extra}</style>
</head>
<body>
<section id="gate" class="hero">
  <div>
    <p class="eyebrow">FYM · Area riservata</p>
    <h1>Crea i tuoi preventivi in autonomia</h1>
    <ul>
      <li>Catalogo formazione e team building (agg. 8.0 del 01/10/2026)</li>
      <li>Tariffe Junior, Senior e Master calcolate in automatico</li>
      <li>Preventivo pronto da stampare o salvare in PDF</li>
    </ul>
  </div>
  <div class="login-card">
    <p class="muted">Accesso riservato agli account <strong>@24orebs.com</strong>.</p>
    <div id="gsi"></div>
    <p id="error" class="error" role="alert" hidden></p>
  </div>
</section>
<div id="app" hidden>${appBody}</div>
<script src="https://accounts.google.com/gsi/client" async defer></script>
<script>
// === CONFIGURAZIONE ===
const GOOGLE_CLIENT_ID = 'INSERISCI_QUI_IL_CLIENT_ID.apps.googleusercontent.com';
const DOMAIN = '24orebs.com';
const CATALOG = ${catalog};
</script>
<script>${appJs}</script>
<script>
// Accesso lato browser: filtra chi usa la pagina, ma NON protegge il catalogo (che è nel sorgente).
(function () {
  const KEY = 'fym_cred';
  const err = document.getElementById('error');
  const decode = (t) => JSON.parse(decodeURIComponent(escape(atob(t.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')))));
  const store = (v) => { try { v ? sessionStorage.setItem(KEY, v) : sessionStorage.removeItem(KEY); } catch (e) {} };

  function accept(cred) {
    let p;
    try { p = decode(cred); } catch (e) { return false; }
    const ok = p.aud === GOOGLE_CLIENT_ID && p.exp * 1000 > Date.now() && p.email_verified && p.hd === DOMAIN && String(p.email).toLowerCase().endsWith('@' + DOMAIN);
    if (!ok) { err.textContent = 'Accesso riservato agli account @' + DOMAIN; err.hidden = false; store(null); return false; }
    store(cred);
    document.getElementById('gate').hidden = true;
    document.getElementById('app').hidden = false;
    startApp({ email: p.email.toLowerCase(), name: p.name || p.email }, CATALOG, () => {
      store(null);
      if (window.google) google.accounts.id.disableAutoSelect();
      location.reload();
    });
    return true;
  }

  window.addEventListener('load', () => {
    let saved = null;
    try { saved = sessionStorage.getItem(KEY); } catch (e) {}
    if (saved && accept(saved)) return;
    if (GOOGLE_CLIENT_ID.startsWith('INSERISCI')) { err.textContent = 'Configura GOOGLE_CLIENT_ID in questo file.'; err.hidden = false; return; }
    const init = () => {
      google.accounts.id.initialize({ client_id: GOOGLE_CLIENT_ID, hd: DOMAIN, callback: (r) => accept(r.credential) });
      google.accounts.id.renderButton(document.getElementById('gsi'), { theme: 'filled_black', size: 'large', locale: 'it' });
    };
    window.google ? init() : setTimeout(init, 1000);
  });
})();
</script>
</body>
</html>`;
fs.writeFileSync('landing.html', html);
console.log('landing.html', Math.round(html.length / 1024) + ' KB');
