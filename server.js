const crypto = require('crypto');
const path = require('path');
const express = require('express');
const { OAuth2Client } = require('google-auth-library');

const PORT = process.env.PORT || 3000;
const DOMAIN = (process.env.ALLOWED_DOMAIN || '24orebs.com').toLowerCase();
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const PROD = process.env.NODE_ENV === 'production';
const SESSION_HOURS = 8;
const COOKIE = 'fym_session';

let SECRET = process.env.SESSION_SECRET;
if (!SECRET) {
  if (PROD) throw new Error('SESSION_SECRET obbligatorio in produzione');
  SECRET = crypto.randomBytes(32).toString('hex');
}

const oauth = new OAuth2Client(CLIENT_ID);
const catalog = require('./data/catalog.json');

const sign = (data) => crypto.createHmac('sha256', SECRET).update(data).digest('base64url');

function makeSession(user) {
  const body = Buffer.from(JSON.stringify({ ...user, exp: Date.now() + SESSION_HOURS * 3600e3 })).toString('base64url');
  return `${body}.${sign(body)}`;
}

function readSession(req) {
  const raw = (req.headers.cookie || '').split(/;\s*/).find((c) => c.startsWith(COOKIE + '='));
  if (!raw) return null;
  const [body, mac] = raw.slice(COOKIE.length + 1).split('.');
  if (!body || !mac) return null;
  const expected = Buffer.from(sign(body));
  const given = Buffer.from(mac);
  if (expected.length !== given.length || !crypto.timingSafeEqual(expected, given)) return null;
  try {
    const s = JSON.parse(Buffer.from(body, 'base64url').toString());
    return s.exp > Date.now() && s.email.endsWith('@' + DOMAIN) ? s : null;
  } catch {
    return null;
  }
}

function cookieFlags(maxAgeSec) {
  return `Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAgeSec}${PROD ? '; Secure' : ''}`;
}

const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '10kb' }));
app.use((req, res, next) => {
  res.set({ 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'no-referrer', 'X-Frame-Options': 'DENY' });
  next();
});

const requireAuth = (req, res, next) => {
  const s = readSession(req);
  if (!s) return res.status(401).json({ error: 'non autenticato' });
  req.user = s;
  next();
};

app.get('/api/config', (req, res) => res.json({ clientId: CLIENT_ID, domain: DOMAIN }));

app.post('/api/login', async (req, res) => {
  try {
    const ticket = await oauth.verifyIdToken({ idToken: String(req.body.credential || ''), audience: CLIENT_ID });
    const p = ticket.getPayload();
    const email = String(p.email || '').toLowerCase();
    if (!p.email_verified || p.hd !== DOMAIN || !email.endsWith('@' + DOMAIN)) {
      return res.status(403).json({ error: `Accesso riservato agli account @${DOMAIN}` });
    }
    res.set('Set-Cookie', `${COOKIE}=${makeSession({ email, name: p.name || email })}; ${cookieFlags(SESSION_HOURS * 3600)}`);
    res.json({ ok: true });
  } catch {
    res.status(401).json({ error: 'Token Google non valido' });
  }
});

app.post('/api/logout', (req, res) => {
  res.set('Set-Cookie', `${COOKIE}=; ${cookieFlags(0)}`);
  res.json({ ok: true });
});

app.get('/api/me', requireAuth, (req, res) => res.json({ email: req.user.email, name: req.user.name }));
app.get('/api/catalog', requireAuth, (req, res) => res.set('Cache-Control', 'no-store').json(catalog));

// Pagina principale: login se anonimi, app se autenticati
app.get('/', (req, res) => {
  res.set('Cache-Control', 'no-store');
  const page = readSession(req) ? 'private/app.html' : 'public/login.html';
  res.sendFile(path.join(__dirname, page));
});

// Asset dell'app (solo utenti autenticati)
app.use('/app', requireAuth, express.static(path.join(__dirname, 'private'), { index: false, setHeaders: (r) => r.set('Cache-Control', 'no-store') }));
// Asset pubblici (login, stili)
app.use(express.static(path.join(__dirname, 'public'), { index: false }));

app.listen(PORT, () => console.log(`Preventivi FYM su http://localhost:${PORT} (dominio ${DOMAIN})`));
