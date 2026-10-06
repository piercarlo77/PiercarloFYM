const MODE_LABEL = { online: 'On-line', indoor: 'Indoor', outdoor: 'Outdoor', road: 'In cammino' };
const LEVEL_LABEL = { junior: 'Junior', senior: 'Senior', master: 'Master' };
const eur = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' });
const $ = (id) => document.getElementById(id);

function el(tag, attrs = {}, ...kids) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') n.className = v;
    else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
    else if (v !== false && v != null) n.setAttribute(k, v === true ? '' : v);
  }
  for (const k of kids.flat()) if (k != null) n.append(k.nodeType ? k : document.createTextNode(k));
  return n;
}

let catalog, lines, quoteNo, nextId = 1;

const svcOf = (l) => catalog.services.find((s) => s.id === l.serviceId);
const baseOf = (l) => { const s = svcOf(l); return s.formats ? s.formats[l.format] : s; };
const hoursLabel = (h) => (h >= 8 && h % 8 === 0 ? `${h / 8} gg (${h} h)` : `${h} h`);

function newQuoteNo() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `PV-${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${String(Math.floor(Math.random() * 9000) + 1000)}`;
}

function defaultLine() {
  const s = catalog.services.find((x) => x.rates) || catalog.services[0];
  const l = { id: nextId++, serviceId: s.id, format: 0, mode: null, level: null, qty: null, unit: 'h', editions: 1, amount: null };
  normalize(l);
  return l;
}

// Riporta una riga in uno stato coerente col catalogo (modalità/livello disponibili, durata minima)
function normalize(l) {
  const s = svcOf(l);
  if (s.custom) { if (l.amount == null) l.amount = s.custom.min; return; }
  const b = baseOf(l);
  if (!b.modes.includes(l.mode)) l.mode = b.modes[0];
  if (!s.rates[l.level]) l.level = Object.keys(s.rates)[0];
  if (l.qty == null) l.qty = l.unit === 'd' ? 1 : b.minH;
}

function compute(l) {
  const s = svcOf(l);
  if (s.custom) {
    const ok = l.amount >= s.custom.min && l.amount <= s.custom.max;
    return { ok, error: ok ? '' : `Importo tra ${eur.format(s.custom.min)} e ${eur.format(s.custom.max)}`, total: ok ? l.amount : 0, hours: null };
  }
  const b = baseOf(l);
  const hours = l.unit === 'd' ? l.qty * catalog.meta.dayHours : l.qty;
  let error = '';
  if (!(l.qty > 0)) error = 'Inserisci una durata';
  else if (hours < b.minH) error = `Durata minima ${hoursLabel(b.minH)}`;
  else if (hours > b.maxH) error = `Durata massima ${hoursLabel(b.maxH)}`;
  else if (!(l.editions >= 1)) error = 'Almeno 1 edizione';
  const total = error ? 0 : s.rates[l.level] * hours * l.editions;
  return { ok: !error, error, total, hours };
}

function lineTitle(l) {
  const s = svcOf(l);
  return s.formats ? `${s.name} — ${s.formats[l.format].name}` : s.name;
}

function buildLine(l) {
  const card = el('div', { class: 'line' });
  const meta = el('div', { class: 'line-meta' });

  const render = () => {
    normalize(l);
    const s = svcOf(l);
    const b = s.custom ? null : baseOf(l);
    card.replaceChildren();

    const groups = {};
    for (const x of catalog.services) (groups[x.cat] ||= []).push(x);
    const svcSel = el('select', { onchange: (e) => { l.serviceId = e.target.value; l.format = 0; l.qty = null; render(); renderPreview(); } },
      Object.entries(groups).map(([cat, xs]) => el('optgroup', { label: cat }, xs.map((x) => el('option', { value: x.id, selected: x.id === l.serviceId }, `${x.id} · ${x.name}`)))));
    const rm = el('button', { class: 'ghost danger', title: 'Rimuovi riga', onclick: () => { lines = lines.filter((x) => x !== l); renderLines(); renderPreview(); } }, '✕');
    card.append(el('div', { class: 'row' }, el('label', { class: 'grow' }, 'Servizio', svcSel), rm));

    if (s.custom) {
      card.append(el('label', {}, `Importo € (${eur.format(s.custom.min)}–${eur.format(s.custom.max)}, ${s.custom.note})`,
        el('input', { type: 'number', min: s.custom.min, max: s.custom.max, step: 50, value: l.amount, oninput: (e) => { l.amount = +e.target.value; refresh(); } })));
    } else {
      if (s.formats) {
        card.append(el('label', {}, 'Format',
          el('select', { onchange: (e) => { l.format = +e.target.value; l.qty = null; render(); renderPreview(); } },
            s.formats.map((f, i) => el('option', { value: i, selected: i === l.format }, f.name)))));
      }
      const modeSel = el('select', { onchange: (e) => { l.mode = e.target.value; renderPreview(); } },
        b.modes.map((m) => el('option', { value: m, selected: m === l.mode }, MODE_LABEL[m])));
      const lvlSel = el('select', { onchange: (e) => { l.level = e.target.value; refresh(); } },
        Object.entries(s.rates).map(([k, r]) => el('option', { value: k, selected: k === l.level }, `${LEVEL_LABEL[k]} · ${r} €/h`)));
      const qty = el('input', { type: 'number', min: 0.5, step: 0.5, value: l.qty, oninput: (e) => { l.qty = +e.target.value; refresh(); } });
      const unit = el('select', { onchange: (e) => { l.unit = e.target.value; l.qty = l.unit === 'd' ? 1 : b.minH; render(); renderPreview(); } },
        el('option', { value: 'h', selected: l.unit === 'h' }, 'ore'), el('option', { value: 'd', selected: l.unit === 'd' }, `giorni (${catalog.meta.dayHours} h)`));
      const ed = el('input', { type: 'number', min: 1, step: 1, value: l.editions, oninput: (e) => { l.editions = +e.target.value; refresh(); } });
      card.append(el('div', { class: 'grid2' }, el('label', {}, 'Modalità', modeSel), el('label', {}, 'Livello docente', lvlSel)));
      card.append(el('div', { class: 'grid3' }, el('label', {}, 'Durata (per edizione)', qty), el('label', {}, 'Unità', unit), el('label', {}, 'N. edizioni', ed)));
      card.append(el('p', { class: 'hint' }, `Durata ammessa: ${hoursLabel(b.minH)} – ${hoursLabel(b.maxH)}`));
    }
    if (s.note) card.append(el('p', { class: 'hint' }, s.note));
    card.append(meta);
    refresh();
  };

  const refresh = () => {
    const c = compute(l);
    meta.className = 'line-meta' + (c.ok ? '' : ' bad');
    meta.textContent = c.ok ? `Importo riga: ${eur.format(c.total)}` : c.error;
    renderPreview();
  };

  render();
  return card;
}

function renderLines() {
  $('lines').replaceChildren(...lines.map(buildLine));
}

function totals() {
  const net = lines.reduce((a, l) => a + compute(l).total, 0);
  const vatRate = Math.max(0, +$('vat').value || 0);
  const vat = Math.round(net * vatRate) / 100;
  return { net, vatRate, vat, gross: net + vat, valid: lines.length > 0 && lines.every((l) => compute(l).ok) };
}

function renderPreview() {
  const t = totals();
  const today = new Date();
  const until = new Date(today.getTime() + (+$('validity').value || 30) * 864e5);
  const fmtD = (d) => d.toLocaleDateString('it-IT');
  const val = (id) => $(id).value.trim();

  const rows = lines.map((l) => {
    const s = svcOf(l);
    const c = compute(l);
    if (s.custom) return el('tr', {}, el('td', {}, lineTitle(l)), el('td', {}, '—'), el('td', {}, '—'), el('td', {}, 'a progetto'), el('td', { class: 'num' }, '1'), el('td', { class: 'num' }, eur.format(c.total)));
    return el('tr', {}, el('td', {}, lineTitle(l)), el('td', {}, MODE_LABEL[l.mode]), el('td', {}, `${LEVEL_LABEL[l.level]} (${s.rates[l.level]} €/h)`),
      el('td', {}, c.hours ? hoursLabel(c.hours) : '—'), el('td', { class: 'num' }, String(l.editions)), el('td', { class: 'num' }, eur.format(c.total)));
  });

  $('doc').replaceChildren(
    el('div', { class: 'doc-head' }, el('div', {}, el('h1', {}, 'PREVENTIVO'), el('p', {}, `N. ${quoteNo}`)),
      el('div', { class: 'right' }, el('strong', {}, 'FYM'), el('p', {}, `Data: ${fmtD(today)}`), el('p', {}, `Valido fino al: ${fmtD(until)}`))),
    el('div', { class: 'doc-client' }, el('h3', {}, 'Cliente'),
      el('p', {}, val('c-company') || '—'),
      val('c-contact') ? el('p', {}, `Att.ne: ${val('c-contact')}`) : null,
      val('c-email') ? el('p', {}, val('c-email')) : null,
      val('c-subject') ? el('p', {}, el('strong', {}, `Oggetto: ${val('c-subject')}`)) : null),
    lines.length
      ? el('table', {}, el('thead', {}, el('tr', {}, ['Servizio', 'Modalità', 'Livello', 'Durata', 'Ed.', 'Importo'].map((h, i) => el('th', { class: i > 3 ? 'num' : '' }, h)))), el('tbody', {}, rows))
      : el('p', { class: 'muted' }, 'Aggiungi almeno un servizio.'),
    el('table', { class: 'totals' },
      el('tr', {}, el('td', {}, 'Imponibile'), el('td', { class: 'num' }, eur.format(t.net))),
      el('tr', {}, el('td', {}, `IVA ${t.vatRate}%`), el('td', { class: 'num' }, eur.format(t.vat))),
      el('tr', { class: 'grand' }, el('td', {}, 'Totale'), el('td', { class: 'num' }, eur.format(t.gross)))),
    val('notes') ? el('div', { class: 'doc-notes' }, el('h3', {}, 'Note'), el('p', {}, val('notes'))) : null,
    el('p', { class: 'doc-foot' }, `Preparato da ${me.name} (${me.email})`));

  $('print').disabled = !t.valid;
  $('copy').disabled = !t.valid;
}

function summaryText() {
  const t = totals();
  const out = [`PREVENTIVO ${quoteNo} — ${$('c-company').value.trim() || 'Cliente'}`];
  if ($('c-subject').value.trim()) out.push($('c-subject').value.trim());
  out.push('');
  for (const l of lines) {
    const s = svcOf(l);
    const c = compute(l);
    out.push(s.custom ? `- ${lineTitle(l)}: ${eur.format(c.total)}`
      : `- ${lineTitle(l)} · ${MODE_LABEL[l.mode]} · ${LEVEL_LABEL[l.level]} · ${hoursLabel(c.hours)} × ${l.editions} ed.: ${eur.format(c.total)}`);
  }
  out.push('', `Imponibile: ${eur.format(t.net)}`, `IVA ${t.vatRate}%: ${eur.format(t.vat)}`, `Totale: ${eur.format(t.gross)}`);
  return out.join('\n');
}

function reset() {
  for (const id of ['c-company', 'c-contact', 'c-email', 'c-subject', 'notes']) $(id).value = '';
  $('validity').value = 30;
  $('vat').value = catalog.meta.vat;
  quoteNo = newQuoteNo();
  lines = [defaultLine()];
  renderLines();
  renderPreview();
}

let me;
function startApp(user, cat, onLogout) {
  me = user;
  catalog = cat;
  $('user').textContent = me.email;
  $('logout').onclick = onLogout;
  $('add').onclick = () => { lines.push(defaultLine()); renderLines(); renderPreview(); };
  $('print').onclick = () => window.print();
  $('reset').onclick = () => { if (confirm('Iniziare un nuovo preventivo? I dati attuali andranno persi.')) reset(); };
  $('copy').onclick = async () => { await navigator.clipboard.writeText(summaryText()); $('copy').textContent = 'Copiato ✓'; setTimeout(() => ($('copy').textContent = 'Copia riepilogo'), 1500); };
  for (const id of ['c-company', 'c-contact', 'c-email', 'c-subject', 'notes', 'vat', 'validity']) $(id).addEventListener('input', renderPreview);
  reset();
}
