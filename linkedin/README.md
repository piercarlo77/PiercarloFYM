# Copertine LinkedIn di Piercarlo · grafica FYM 2026

Il carosello di quattro copertine per il profilo personale (1584×396), costruite con le regole della skill `fym-design`
(palette principale FYM, Red Hat Display / Plus Jakarta Sans / Fraunces, taglio a 49° in basso a destra).

| File | Cosa è |
|---|---|
| `copertina-A-navy.png` | 1 — Piercarlo: la copertina scelta, con i suoi testi |
| `copertina-2-scuola.png` | 2 — Scuola di Coaching Strategico: le tre cifre della pratica. Il lockup è composto (marchio FYM + descrittore in Red Hat Display): il file vero è `Artboard 1 copy 3.svg` in `FYM + loghi secondari/SVG/` sul Drive |
| `copertina-3-sport.png` | 3 — Sport Coaching Strategico. Slot a destra per `scs-logo.png` (il marchio SCS), vuoto finché il file non c'è |
| `copertina-4-libri.png` | 4 — i due libri. Slot nelle schede per `libro-feedback.png` e `libro-equilibrio.png` (Drive: `Equilibrio-emotivo.png`, `COPERTINA estratto La cultura del feedback.png`) |
| `copertina-B-chiara.png` | fondo bianco, logotipo Blu FYM, firma «Il mio hobby preferito è vivere.» |
| `copertina-C-navy-foto.png` | Navy con lo spazio per il ritratto a destra (gradino a 49°). Mettere `PIER.png` (Drive: `REBRANDING FYM/Foto sito/PIER.png`) in questa cartella e rilanciare il render |
| `anteprima-linkedin.png` | come si vedono sul profilo, scrivania e telefono, con la foto profilo sopra |

Gli HTML escono da `python3 genera.py`; i PNG dagli HTML: `node render.js copertina-A-navy copertina-2-scuola copertina-3-sport copertina-4-libri`
(serve Playwright con Chromium). I testi si cambiano nell'HTML, la misura non va toccata.

Zona sicura: la foto profilo copre l'angolo in basso a sinistra (fino a x≈500, da y≈180 in giù sul
telefono): lì non va nessun testo, e il marchio sta in alto a sinistra.

I loghi sono gli SVG del brand ritagliati alla loro viewBox vera (`83.35 83.36 202.44 83.35`), non ridisegnati.
Il negativo (`logo-soft.svg`) è il file del brand, non il blu ricolorato.
