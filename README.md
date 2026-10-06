# Preventivi FYM

Landing page riservata agli account `@24orebs.com` per creare preventivi dal catalogo FYM (v. 8.0 del 01/10/2026).

## Come funziona
- Login con Google; il server verifica il token e accetta solo `hd=24orebs.com` con email verificata.
- Catalogo, tariffe e JS dell'app sono serviti **solo** dopo il login (cookie firmato HttpOnly, 8 h).
- Prezzo riga = tariffa oraria del livello (Junior/Senior/Master) × ore × edizioni. 1 giorno = 8 h.
- Il preventivo si stampa / salva in PDF dal browser.

## Setup
1. Google Cloud Console → Credentials → OAuth client ID "Web application"; aggiungi l'URL del sito tra le origini JavaScript autorizzate.
2. `cp .env.example .env`, compila `GOOGLE_CLIENT_ID` e `SESSION_SECRET`.
3. `npm install && npm start` (esporta le variabili di `.env` o usa un host che le gestisce).

## Aggiornare il catalogo
Modifica `data/catalog.json` (derivato dal foglio Google; la Faculty non è inclusa di proposito).

## landing.html (versione file singolo)
`node scripts/build-landing.js` rigenera `landing.html`: un solo file HTML autonomo, ospitabile ovunque. Imposta `GOOGLE_CLIENT_ID` in cima allo script. Attenzione: il filtro @24orebs.com avviene nel browser e il catalogo è nel sorgente, quindi è una barriera "di cortesia", non sicurezza.
