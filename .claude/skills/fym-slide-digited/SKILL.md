---
name: fym-slide-digited
description: "Le slide delle formazioni che FYM eroga per Sole 24 ORE Business School, nel format standard di Digit'Ed: un file di dati riempie il loro .pptx (copertina, indice, divisori, slide di testo, grazie) col logo del cliente per cui si eroga; il testo della dispensa va nelle note. Ne esce un PowerPoint che si apre in Presentazioni Google. Attiva su 'fym-slide-digited', 'slide per la Business School', 'slide 24 ORE', 'format Digit'Ed', 'template del Sole', 'slide per TAS', e ogni volta che un deck va fatto nel format della Business School."
metadata:
  creata: '2026-10-05'
  creata-da: Samuele
  nata-su: "le slide della formazione Leadership per TAS (via 24ORE Business School), provata sui contenuti della docenza Leadership del 2025-05-23"
---

# fym-slide-digited: le slide nel format della Business School

Quando FYM eroga una formazione per **Sole 24 ORE Business School**, le slide vanno nel
**format standard di Digit'Ed**, la società della Business School: fondo chiaro, oro
`#EEC8A4` su antracite `#363C46`, titoli in DM Sans, il marchio 24ORE in ogni layout.
Da un'edizione all'altra **cambia solo il logo del cliente** per cui si eroga, che sta su
ogni slide (Samu, 2026-10-05).

Non è un deck di FYM, quindi [fym-slide](../fym-slide/SKILL.md) non c'entra: il suo
motore disegna solo il nostro marchio. Qui **non si disegna niente**. Lo script apre il loro
`.pptx`, tiene schemi, layout e immagini, butta le slide d'esempio e ne scrive di nuove sui
loro layout. Il file che esce è il loro, con dentro il nostro contenuto, e chi lo apre trova
caselle di testo vere.

**FYM non compare da nessuna parte** (Samu, 2026-10-05): il deck è della Business School e
del suo cliente. Niente nome, niente marchio, niente email @fym.it, né sulle slide né nelle
note, che finiscono anche nella dispensa. I contatti del docente sulla slide «Grazie» si
chiedono a chi è alla tastiera. Lo script controlla testi e note e, se trova «FYM» o
«fym.it», non monta e dice dove sta.

Del metodo di fym-slide si tiene tutto quello che non è aspetto: il deck è un file di dati,
una slide dice una cosa, se non ci sta si divide, e sulla slide non finisce mai il lavoro
che c'è dietro.

## Dove stanno le cose

| Cosa | Dove |
|---|---|
| il format, così come ce l'ha mandato la Business School | `FYM CORPORATE/03_Sviluppo e clienti/03.01_Clienti e Prospect Corporate/DIGITED (24 ORE)/_format slide Digit'Ed.pptx` |
| il logo del cliente | nella cartella dell'edizione, accanto al deck (per TAS: `TAS Leadership 2026/logo-tas.png`) |
| il deck (`.json`) e il `.pptx` montato | nella cartella dell'edizione, sotto `DIGITED (24 ORE)/` |
| il motore e l'esempio | qui: [`monta.mjs`](monta.mjs), [`esempio-deck.json`](esempio-deck.json) |

Il format pesa 21 MB e non può stare su questo Drive. Se la Business School ne manda una
versione nuova, si sostituisce quel file e si tiene lo stesso nome. Lo script lo trova da
solo su ogni Mac, qualunque sia l'account di Drive per desktop.

## Le domande, prima di scrivere

1. **Per quale cliente, e in che data?** Serve il logo in PNG o JPEG, possibilmente su fondo
   trasparente e largo almeno 1000 px. Non si ingrandisce un logo piccolo: se c'è solo
   quello, si cerca il vettoriale sul sito del cliente.
2. **Cosa si proietta e cosa si legge.** Di solito la stessa formazione si proietta la prima
   giornata e va in dispensa la seconda. Allora per ogni slide si scrivono due cose: sulla
   slide l'essenziale, **da 1 a 3 punti** perché qualcuno racconta; nelle **note** la
   spiegazione completa, che è la dispensa.
3. **Quante slide.** Se non si sa, si propone una scaletta, una riga per slide, e si fa
   approvare prima di montare.

## I tipi di slide

Il layout lo sceglie il tipo, non chi scrive. Ogni slide può avere `"note"`: testo semplice,
paragrafi separati da una riga vuota (`\n\n`), `**neretto**` ammesso.

| Tipo | Su quale layout del format | Campi |
|---|---|---|
| `copertina` | Diapositiva titolo, con il marchio Digit'Ed | `titolo` (al massimo due righe, circa 50 caratteri), `data`, `docente` |
| `indice` | indice | niente: le voci sono i divisori, col numero di slide e il link. Al massimo 8. Si può forzare con `voci: [{titolo, n}]` |
| `sezione` | Divisore capitolo 24 oro | `titolo` |
| `punti` | testo_1 | `titolo`, `attacco`, `punti` (fino a 6, la forma è `"**Nome**: spiegazione"`) |
| `colonne` | testo_1 | `titolo`, `attacco`, `colonne` (da 2 a 4: `titolo`, poi `testo` o `punti`, e un `esito` facoltativo in fondo). Con `disegno: "croce"` e 4 colonne: io al centro (`centro` per cambiarlo), le colonne sopra, sotto, a sinistra e a destra, con le frecce (le quattro direzioni del feedback) |
| `passi` | testo_1 | `titolo`, `attacco`, `passi` (`sigla`, `nome`, `testo`): una sequenza o un acronimo. Fino a 5 in colonna, poi due colonne. `gruppi` facoltativi (`nome`, `da`, `a`) per dire «prima» e «durante». Con `disegno: "cerchi"` (da 2 a 4) i passi diventano cerchi uno dentro l'altro, il primo al centro (le tre sfere, la comfort zone); con `disegno: "ciclo"` (4) tappe su un anello in senso orario (le quattro abilità del feedback) |
| `matrice` | testo_1 | `titolo`, `colonne` e `righe` (le etichette dei due assi), `celle` 2×2 con `titolo`, `testo` ed `evidenza` sulla cella da guardare per prima. Una cella può avere `immagine` (PNG o JPEG, percorso relativo al deck) e `motto`: sulla slide vanno immagine e motto, la spiegazione in `testo` resta alla dispensa |
| `citazione` | testo_1 | `testo`, `autore`, `titolo` facoltativo |
| `frase` | testo_1 | `testo` grande al centro, `sotto` facoltativo: un'attività, una domanda alla sala |
| `lavagna` | testo_1 | `titolo` e un elenco puntato vuoto, da scriverci sopra in aula (il debriefing). Le note vanno ai formatori: è una slide che la dispensa non prende |
| `grazie` | Diapositiva titolo | `nome`, `ruolo`, `contatti` (un elenco, senza riferimenti a FYM); con più docenti `docenti`: `[{nome, ruolo}]`, uno per riga |

`attacco` è la riga sotto il titolo che dice come leggere la slide: una frase sola, entro
circa 70 caratteri, che non ripete il titolo. Il titolo delle slide di testo sta in una riga
(circa 42 caratteri).

Se serve una forma che qui non c'è, si aggiunge un tipo a `monta.mjs`, così ce l'hanno
tutti. Il format ha altri layout che non usiamo ancora (testo con immagini, quote1 e quote2,
modulo): sono il primo posto dove cercare.

## Come si monta

```bash
node monta.mjs "<cartella dell'edizione>/deck.json"
```

Scrive il `.pptx` accanto al `.json`. Se la cartella è su un Drive montato, stampa il link
che lo apre in Presentazioni Google. Stampa anche gli **avvisi**: testi che secondo la stima
non ci stanno. La stima è grossolana, perché non c'è un motore di testo che misuri: un
avviso va preso sul serio, ma l'assenza di avvisi non basta.

Poi **si guarda**, slide per slide, in Presentazioni Google. È lì che il deck verrà usato,
ed è lì che si vedono i caratteri veri. Si apre in una ventina di secondi. Se a guardarlo è
una sessione di Claude, deve farlo dal Chrome di chi lavora, con l'estensione: il browser
integrato dell'app non ha l'accesso a Google, e resta fermo su «Apertura del file in corso»
senza dare errori (2026-10-05).

La **dispensa da stampare** non si fa qui: la fa [fym-dispensa](../fym-dispensa/SKILL.md),
che legge lo stesso `.json` e ne fa il quaderno A5 a spirale pronto per Pixartprinting.
Per una copia veloce da mandare via email basta Presentazioni Google: File, Anteprima di
stampa, «1 slide con le note», Scarica come PDF (provato il 2026-10-05).

Il percorso del logo nel `.json` può cominciare con `Drive condivisi/...`: lo script lo
cerca nel Drive per desktop di chi lancia, così lo stesso deck funziona su ogni Mac.

## Cosa manca, dichiarato

- **Solo Mac.** Lo script cerca il format e il logo in `~/Library/CloudStorage`. Su Windows
  (Gian, Valentina) non è stato provato: format e logo vanno indicati con un percorso
  completo (`"format"` e `"cliente.logo"` nel `.json`).
- **Le anteprime sul Mac non usano i caratteri veri.** DM Sans e Source Sans Pro non sono
  installati, e Quick Look li sostituisce: le misure vere si vedono solo in Presentazioni
  Google. La stima degli avvisi è tarata su quelle (2026-10-05).
- **La dispensa è una pagina semplice**: la slide sopra, le note sotto, nel carattere di
  Google. Se la Business School la vuole nel suo format anche nelle pagine di testo, serve
  una seconda uscita, più densa.
- **Le slide con immagini non ci sono ancora.** Il format ha i layout (testo_img,
  testo_4img), il motore non li usa.
- **Il format viene alleggerito, da 21 a 11 MB.** Dei 62 layout restano quelli che usiamo e la
  famiglia del «nuovo format» (indice, testo_1, testo_2, quote1...). Lo schema vecchio
  «24ORE bs», con i suoi divisori e i suoi hero quote, se ne va. Se la Business School
  chiedesse il file con tutti i layout, la lista sta in `NUOVO_FORMAT` in `monta.mjs`.
- **Nello schema del format c'è un testo nascosto**, «LEADERSHIP & SKILLS OFFER 2025», coperto
  dalle immagini dei layout. Non si vede, ma un lettore di schermo lo legge. È nel loro file
  e lì resta.

## Ancora da verificare

- Provata il 2026-10-05 solo sull'esempio: 18 slide coi contenuti della docenza Leadership
  del 2025-05-23, guardate in Presentazioni Google, dispensa compresa. Il file sta in
  `DIGITED (24 ORE)/_esempio format Digit'Ed (contenuti 2025-05-23).pptx`. Su un deck vero,
  in aula, non ancora.
- Il corpo è a 24 pt (22 nei passi su due colonne). Va bene a schermo, ma su un proiettore
  vero non è stato visto.
- Non si sa se la Business School riapra il file in PowerPoint e con quali caratteri: DM Sans
  e Source Sans Pro sono quelli del format, ma su un PC senza quei caratteri escono
  sostituiti.
