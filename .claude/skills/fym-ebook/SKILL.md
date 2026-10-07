---
name: fym-ebook
description: "Gli ebook di FYM: un file di dati che diventa una pagina web da leggere sul telefono e sul PC, e un PDF in A4 con la colonna degli appunti da scaricare e stampare, col marchio FYM. Il testo scorre, la divisione in pagine la fa Chrome, i rimandi sono link anche nel PDF. Attiva su 'fym-ebook', 'ebook', 'un ebook', 'rifacciamo l'ebook', 'guida da scaricare', 'lead magnet in PDF', 'documento stampabile'."
metadata:
  aspetto: "../fym-design/SKILL.md; colori e caratteri presi da ../fym-slide/tema-fym.css"
  creata: '2026-09-15'
  rifatta: '2026-09-16'
  base: "l'impianto a dati di fym-slide"
---

# fym-ebook: gli ebook di FYM

Un ebook e' **un file di dati**: le sezioni stanno in un `.json`, il motore le disegna. Da
quel file escono due cose, con un comando solo:

- una **pagina web** (`.html`), la versione da leggere: una colonna che si adatta al
  telefono e al PC, con in cima la barra che dice «Ti abbiamo inviato il PDF via email».
  E' quella da linkare nelle email, e il PDF viaggia con l'email, non con la pagina;
- un **PDF in A4** (`.pdf`), da scaricare e da stampare, con la **colonna degli appunti**
  a destra su ogni pagina: l'ebook si legge con la penna in mano (Piercarlo, 2026-09-16).
  Il testo scorre da una pagina all'altra: la divisione la fa Chrome.

E' il `.json` la fonte. Tutti e tre i file stanno **nel Drive della linea di business**, mai
su questo Drive: gli ebook della Scuola in `SCUOLA COACHING STRATEGICO › 02_Marketing e
comunicazione › 02.4_Grafiche e brand › Ebook`.

**Perche' cosi'** (Samuele, 2026-09-16). La prima versione, del 2026-09-15, era in A4 a
pagine fisse ricalcate dalle Presentazioni Google: ogni pagina un blocco, il testo non
scorreva, e con il corpo da carta le pagine restavano mezze vuote. Ma un ebook arriva via
email e quasi tutti lo aprono sul telefono, dove nessun formato di pagina fissa si legge
senza zoom. Da qui le due uscite: lo schermo vuole un testo che si adatta, la stampa vuole
pagine piene. Per la stampa Samuele aveva scelto l'A5; Piercarlo lo stesso giorno ha
chiesto l'A4 con lo spazio per gli appunti, ed e' rimasto l'A4. Il motore a pagine fisse di
Alessia e' stato messo da parte, non buttato: i blocchi, la copertina, il retro e i colori
sono gli stessi.

## E' lo strumento giusto?

**Si'**, per un documento che si legge da soli e si stampa: un ebook, una guida, una scheda
da portare a un colloquio. **No** per una cosa da proiettare o da presentare: quella e'
[`fym-slide`](../fym-slide/SKILL.md). **No** se il file vive in Documenti o Presentazioni
Google e qualcuno lo corregge li': la fonte e' quel file, non un `.json`.

## Le regole

Colori, caratteri, contrasti, la scala tipografica e il taglio a 49 gradi vengono da
[fym-design (Rams)](../fym-design/SKILL.md) e qui non si decidono: questo file dice solo come si applicano a una
pagina che si legge e si stampa. I gradini riportati sotto sono un promemoria, la fonte e'
rams § 3: se la' cambia la scala, si cambiano i numeri in `pagina.css` e qui, non il contrario.

- **La scala e' quella aurea di rams § 3**, la stessa del sito della Scuola (Samuele,
  2026-09-16: la prima versione aveva il corpo a 15 px e la copertina a 52, «troppo piccoli»).
  Sullo schermo tale e quale: corpo 17, titoletti 21,6, frase grande 24-27,5, titoli di
  sezione 34-44,5, titolo di copertina 44-72. Stampato la versione da telefono, perche' la
  colonna dell'A4 e' larga 507 px come uno schermo stretto: corpo 17 px (12,75 pt), titoletti
  21,6, frase grande e citazione 24, titolo di sezione 34, copertina 72; un gradino solo sotto
  il corpo, 13,5 (10 pt), per note e tabelle, e la cornice a 10.
- **Sullo schermo**: una colonna larga al massimo 44 rem, la barra in Navy in cima con il
  titolo e la frase «Ti abbiamo inviato il PDF via email». Niente bottone di scaricamento:
  il PDF non ha un indirizzo pubblico, e un link relativo al file accanto funziona solo
  se i due file stanno nella stessa cartella (Samu, 2026-09-16). Sotto i 560 px schede, porte e persone
  vanno su una colonna sola; le tabelle larghe scorrono da sole.
- **Stampato**: A4, colonna di testo da 134 mm (margine sinistro 14 mm, destro 62 mm),
  18 mm sopra e sotto.
  Testata (etichetta e titolo breve, versione), piede (logotipo, diritti e siti), **numero
  di pagina** e la **colonna degli appunti** (filetto e etichetta nel margine destro, 48
  mm per scrivere) stanno nei riquadri di margine di `@page`: li scrive Chrome, dal 131
  in poi, su ogni pagina di contenuto. Copertina e retro sono pagine a se', senza cornice.
- **Le pagine dei dati sono sezioni.** Ognuna ha il suo titolo; due di seguito con lo
  stesso titolo diventano una sola sezione. Una sezione che deve cominciare su una pagina
  nuova (una scheda da stampare) porta `nuovaPagina: true`. **Si cambia pagina solo fra
  una sezione e l'altra**: una sezione che non ci sta nello spazio rimasto va intera sulla
  pagina dopo, e solo una sezione piu' lunga di una pagina continua sulla successiva
  (Samuele, 2026-09-16). Riquadri, schede, righe di tabella e voci di elenco non si
  spezzano mai.
- **I rimandi sono link, sempre.** `{{rimando:id|testo}}` diventa un link alla sezione con
  quell'`id`; stampato, dopo il testo compare «(pagina N)», e il link funziona anche nel
  PDF. Si scrive «stampa {{rimando:scheda|la scheda delle sette domande}}», mai «vedi
  pagina 17»: il numero lo mette il motore, il nome regge anche dove le pagine non
  esistono. Il vecchio `{{pag:id}}` funziona ancora e usa come testo il titolo della
  sezione.
- **Pochi fondi pieni**: carta bianca, riquadri in tinta chiara (Navy all'8%, Dandelion al
  25%, Uniberry all'8%). Il Navy pieno resta per la fascia della copertina, una frase in
  evidenza e il retro.
- **Il colore della linea.** Gli ebook della Scuola usano Uniberry `#9f1c4c`, il
  secondario della Scuola, per titoletti degli errori, sottotitolo di copertina e numero
  di pagina: 7,65:1 sul bianco. Un ebook di un'altra linea usa il suo.
- **Dandelion non e' mai testo.** La parola in evidenza del retro e' sottolineata in
  Dandelion, e il testo resta Blu FYM.
- **Le certificazioni solo come testo**, come nella brochure della Scuola.
- **Il quaderno** («Tag» e «Letto il» della prima versione) non c'e' piu': Samuele l'ha
  tolto il 2026-09-16, su un ebook letto a schermo erano due caselle vuote.

## Come si costruisce

1. Si parte dal testo com'e': **l'impaginazione non riscrive**. Refusi e correzioni decise
   si dicono a chi l'ha chiesto, uno per uno. Se il testo e' da scrivere, prima si legge il
   [nucleo della voce](../../commerciale/tone-of-voice.md) e prima di consegnarlo si fa il suo
   [controllo](../../commerciale/tone-of-voice.md#il-controllo-prima-di-consegnare).
2. Si scrive il `.json` (formato qui sotto). Loghi e foto dentro come data URI.
3. `python3 costruisci.py percorso/ebook.json` fa tutto: monta l'HTML, lo stampa in A4 con
   Chrome, rilegge il PDF per sapere su che pagina e' finita ogni sezione, ristampa con i
   numeri giusti nei rimandi, e alla fine **collauda**: elenca le sezioni con la loro
   pagina, conta i link interni del PDF e controlla che arrivino sulle sezioni giuste,
   elenca i link esterni, e segnala i «DA COMPILARE» rimasti e le porte del retro senza
   link. `--solo-html` salta il PDF.
4. **Si apre il PDF e lo si guarda pagina per pagina**, e si apre l'HTML sul telefono. Il
   collaudo trova i link rotti, non quello che e' brutto.

## Il formato dei dati

In cima: `titolo`, `etichetta` («FYM Ebook»), `breve` (il titolo nella testata), `versione`
(a destra nella testata), `marchio` (il logo della linea, orizzontale), `logoPiede` (il
logotipo), `diritti`, `siti`, `anagrafica` (righe di copertina e retro), `pagine`.
`notaBarra` cambia la frase nella barra; `pdf`, solo se un giorno il PDF avra' un indirizzo
pubblico, mette al suo posto il bottone «Scarica il PDF».

Nel testo si scrivono tre cose: `**neretto**`, `{{rimando:id|testo}}` e `\n` per andare
a capo.

| Pagina | Campi |
|---|---|
| `copertina` | `autori`, `titolo`, `sottotitolo`, `descrizione` (una frase, oppure una lista: diventa l'elenco dei contenuti coi trattini del marchio, in Navy sotto il sottotitolo in colore di linea; Samuele, 2026-09-16), `edizione`, `cartiglio` (`modulo`, `revisione`, `dicitura`; «Pag. 1 di N» lo aggiunge il motore) |
| `pagina` | `titolo`, `id` (se qualcuno la cita), `nuovaPagina: true`, `blocchi` |
| `retro` | `titolo` (la fascia), `righe` (con `_parola_` in evidenza), `domanda`, `porte` (tre: `titolo`, `icona`, `link`, `etichettaLink`) |

| Blocco | Campi |
|---|---|
| `testo` | `testo`: un paragrafo o una lista |
| `titoletto` | `testo`, `tono: "linea"` per il colore della linea |
| `elenco` | `stile`: `punti`, `numeri`, `caselle` (quadratini da spuntare); `voci`: testi, o `{titolo, testo}` col titolo in neretto |
| `riquadro` | `tono`: `tenue`, `accento`, `linea`, `scuro`, `filetto` (solo la barra gialla); `etichetta`, `titolo`, `testo`, `icona`; `grande: true` per la frase in evidenza, col taglio a 49 gradi |
| `citazione` | `testo`, `autore`. In Fraunces: al massimo tre in tutto l'ebook |
| `tabella` | `intestazione`, `righe` (liste di celle, o `{celle, totale}`), `larghezze`, `primaColonna` (`forte`, `numero`), `altezzaRiga` (righe vuote in cui scrivere), `fitta` |
| `schede` | `colonne`, `fitte`, `schede` (`titolo`, `sotto`, `testo`, `link`, `etichettaLink`, `dettaglio`, `prezzo`, `evidenza`) |
| `persone` | `persone` (`nome`, `ruolo`, `testo`, `foto`) |
| `nota` | `testo`, a 12 px |
| `spinta` | non fa piu' niente (c'era per le pagine fisse); si puo' togliere |

Icone: quelle a linea disegnate nel motore (`video`, `bersaglio`, `chiamata`, `calendario`,
`posta`) e quelle **del set del brand** nella cartella `icone/` (`allenamento`, `dialogo`; il
nome del file e' il nome nei dati, il LEGGIMI li' dice da dove vengono e come aggiungerne).
Dal 2026-09-16 le porte del retro usano `video`, `allenamento` e `dialogo`: Samuele non voleva
un bersaglio per la Coaching Week ne' una cuffia da call center per la chiamata.

**I loghi vanno ritagliati al disegno**, perche' negli SVG di `REBRANDING FYM` meta'
dell'area e' vuota (rams § 5). Misurati col riquadro vero del disegno, il 2026-09-15:
`Artboard 14.svg` (FYM | Scuola Coaching Strategico, Blu FYM) `83.76 83.64 454.89 124.00`;
`LOGOTIPO_navy.svg` `83.35 83.36 202.44 83.35`.

## I file

- `costruisci.py`: monta, stampa due volte, rilegge, collauda.
- `motore.js`: disegna copertina, sezioni e retro dai dati; i rimandi.
- `pagina.css`: le misure e le forme; `@media screen` e `@media print` sono i due mondi.
- `testo-pdf.swift`: legge testo e link di ogni pagina del PDF con PDFKit (serve a
  costruisci.py; gira con `swift`, senza installare niente).
- `icone/`: le icone del set del brand usate dagli ebook, con il LEGGIMI.
- Il PDF lo stampa `../fym-slide/esporta-pdf.sh`, che e' condiviso.

## Cosa manca, dichiarato

- **Non si corregge nella pagina** e non si pubblica su Claude col salvataggio, come fa
  fym-slide. Le correzioni si fanno nel `.json`.
- **Solo da Mac**: stampa e lettura del PDF cercano Chrome in `/Applications` e `swift`.
  Su Windows non e' provata.
- **Al montaggio serve internet**, perche' i caratteri arrivano da Google Fonts.
- **Il numero di pagina di una sezione si trova cercando il suo titolo nel PDF**: se due
  sezioni avessero lo stesso titolo e un `id` ciascuna, il motore troverebbe la prima. Non
  e' ancora successo.
- **La pagina web non si pubblica da sola.** Per gli ebook della Scuola sta su coach.fym.it
  accanto alla landing, la pubblica Federico Vitiello e si apre subito dopo il modulo (deciso
  il 2026-09-16); a ogni rimontaggio il file HTML gli va rimandato. Il PDF sta nella
  Libreria media di Delera e arriva con l'email.
- **Provata su due ebook**, il 2026-09-16: «Il titolo di coach non esiste» (23 pagine A4) e
  «Ho studiato coaching, ma…» (15). Mai stampata su carta.
