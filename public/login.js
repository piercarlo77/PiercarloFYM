const errorBox = document.getElementById('error');
const showError = (msg) => { errorBox.textContent = msg; errorBox.hidden = false; };

async function onCredential({ credential }) {
  errorBox.hidden = true;
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ credential }),
  });
  if (res.ok) return location.reload();
  const data = await res.json().catch(() => ({}));
  showError(data.error || 'Accesso non riuscito');
}

(async () => {
  const cfg = await (await fetch('/api/config')).json();
  document.getElementById('domain').textContent = '@' + cfg.domain;
  if (!cfg.clientId) return showError('Configurazione mancante: GOOGLE_CLIENT_ID');
  const s = document.createElement('script');
  s.src = 'https://accounts.google.com/gsi/client';
  s.async = true;
  s.onload = () => {
    google.accounts.id.initialize({ client_id: cfg.clientId, callback: onCredential, hd: cfg.domain });
    google.accounts.id.renderButton(document.getElementById('gsi'), { theme: 'filled_black', size: 'large', text: 'signin_with', locale: 'it' });
  };
  s.onerror = () => showError('Impossibile caricare Accedi con Google');
  document.head.appendChild(s);
})();
