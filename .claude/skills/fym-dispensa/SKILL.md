---
name: fym-dispensa
description: "Le dispense dei corsi da stampare: il quaderno di lavoro A5 a spirale che i partecipanti compilano in aula (spazi da riempire, modelli del corso, debriefing, apprendimenti, appunti), da un file di dati al PDF pronto da caricare su Pixartprinting, con abbondanza, margine della spirale, facciate pari e CMYK. Chiede per prima cosa per chi lavoriamo: veste FYM (modello 14.03) per i nostri corsi, veste Digit'Ed per quelli che eroghiamo per Sole 24 ORE Business School, dove FYM non compare da nessuna parte; accetta anche il deck delle slide. Attiva su 'fym-dispensa', 'dispensa', 'dispense', 'quaderno di lavoro', 'materiale didattico da stampare', 'file per Pixartprinting', 'stampare le dispense', 'dispensa A5'."
metadata:
  creata: '2026-10-05'
  creata-da: Samuele
  modello: "la dispensa del Team Walking Marini Fayat, agosto 2025 (Presentazioni Google 1KXuIHb7CcUPy13KG_0NV03yn8f_5QvvUZbhiJcoMBT8)"
  stampa: "l'ordine Pixartprinting PIX-HID-659649 del 2026-09-04"
---

# fym-dispensa: il quaderno del corso, pronto per la stampa

Una dispensa di FYM **non è un testo da leggere: è un quaderno di lavoro**. Lo si vede
nella dispensa del Team Walking Marini Fayat (agosto 2025, 64 pagine A5), che è il modello
di questa skill:
- poche pagine di contenuto: i modelli del corso, C.A.P., le tre sfere, S.A.G.R.A.,
  F.A. S.P.E.S.A.;
- molte pagine da riempire: obiettivi da spuntare, colonne, tabelle «a chi / su cosa», il
  debriefing in quattro riquadri (Facts, Feel, Find, Future), gli apprendimenti di ogni
  giornata, e in fondo una dozzina di pagine di appunti.

Fin qui le dispense si facevano a mano in Presentazioni Google. Qui la dispensa è **un
file di dati**, e il motore ne fa il PDF da caricare su Pixartprinting, già a norma.

## Come si stampa (Pixartprinting, spirale metallica)

Lo standard è l'ordine PIX-HID-659649 del 2026-09-04:
- formato chiuso A5 verticale, spirale metallica argento sul lato sinistro;
- copertina in patinata opaca da 300 g, plastificata esterno e interno;
- pagine interne in patinata opaca da 130 g;
- 30 copie, 177 € IVA compresa per 44 facciate.

Quello che chiede Pixartprinting, e che il motore fa da solo
([guida](https://support.pixartprinting.com/hc/it/articles/21490694937106-Spirale-Metallica)):

| Regola | Come la rispetta il motore |
|---|---|
| PDF a pagine singole, scala 1:1, 3 mm di abbondanza | pagine da 154 × 216 mm, TrimBox a 148 × 210 |
| testi a 3 mm dal taglio, 10-15 mm dal lato della spirale | area sicura a 10 mm, 13 mm sul lato della spirale, che sulle dispari è a sinistra e sulle pari a destra |
| il numero di facciate comprende la copertina | prima pagina copertina, ultima retro, e il totale lo stampa lo script |
| facciate fronte e retro | se il totale è dispari aggiunge una pagina di appunti prima del retro |
| CMYK, caratteri incorporati, niente crocini | Chrome stampa, Ghostscript converte in CMYK e incorpora i caratteri |
| caratteri da almeno 6 pt | il più piccolo è 6,5 pt, nella testata |

Il CMYK è quello di base di Ghostscript, non il Fogra 39: sul Mac il profilo non c'è. Per
testo e loghi non si vede la differenza; per una foto in copertina sì, poco.

## Le domande, prima di scrivere

1. **Per chi lavoriamo?** È la prima domanda, sempre, e non si deduce dal cliente
   (Samu, 2026-10-05):
   - **per FYM**, cioè un corso nostro: veste `fym`, il modello 14.03 delle dispense Marini
     e Michelin, col marchio e i dati di FYM;
   - **per Digit'Ed**, cioè un corso che eroghiamo per Sole 24 ORE Business School (oggi
     TAS): veste `digited`, col marchio 24ORE e il logo del cliente. **FYM non compare da
     nessuna parte**: niente marchio, niente modulo 14.03, niente dati della società, e
     nemmeno nei testi, nelle note o nei contatti del docente (niente email @fym.it).

   Lo script senza la veste non parte. In veste `digited` legge tutto il testo impaginato
   e, se ci trova «FYM» o «fym.it», non scrive il PDF e dice dove sta.
2. **Per quale corso?** Cliente, titolo, luogo e date, logo del cliente in PNG, meglio se
   su fondo trasparente (i margini vuoti li rifila il motore).
3. **Cosa fanno in aula, giornata per giornata?** È la domanda che fa la dispensa: quali
   attività hanno un debriefing, quali modelli si spiegano, cosa devono scrivere i
   partecipanti. Se c'è già una micro-progettazione del corso, si parte da quella.
4. **Le informazioni pratiche**: numeri utili, staff con telefono, location, e l'area web
   riservata dell'assistenza post-formazione con la sua password, se c'è
   ([fym-area-clienti](../fym-area-clienti/SKILL.md)).

## Le pagine

Una dispensa è un `.json` con i dati del corso e un elenco `pagine`. Ogni pagina ha un
`tipo`, e `"ripeti": n` per farne più copie (quattro schede di debriefing, dodici pagine di
appunti). L'esempio completo è [`esempio-dispensa.json`](esempio-dispensa.json).

| Tipo | Cos'è | Campi |
|---|---|---|
| `info` | numeri utili, staff, location, valori | `titolo`, `gruppi`: `{titolo, voci}`, dove una voce è un testo o `[voce, valore]` |
| `spunte` | un elenco da spuntare: obiettivi, aspettative, impegni | `titolo`, `citazione` facoltativa, `righe` (altrimenti riempie la pagina) |
| `colonne` | colonne vuote con l'intestazione | `titolo`, `colonne` (i titoli), `larghezze` facoltative |
| `tabella` | una tabella da compilare | `titolo`, `colonne`, `larghezze`, `righe` (altrimenti riempie la pagina), `riquadri` facoltativi sotto la tabella (con `righe` date) |
| `riquadri` | riquadri impilati, ognuno con la sua domanda: il debriefing, gli apprendimenti | `titolo`, `riquadri` (i testi, `**neretto**` ammesso) |
| `modello` | un modello del corso: in fila `immagine`, `citazione`, `frase`, `punti`, `passi`, `matrice`, `colonne` con testo, `paragrafi`. Sotto, lo spazio che resta va agli appunti | `titolo`, `attacco` e i blocchi, con gli stessi campi dei tipi di [fym-slide-digited](../fym-slide-digited/SKILL.md) |
| `testo` | testo che scorre, e se serve prosegue nella pagina dopo | `titolo`, `paragrafi` |
| `appunti` | una pagina per scrivere, senza righe | `titolo` facoltativo |
| `sezione` | un divisore a tutta pagina | `titolo` |
| `sommario` | l'indice, coi numeri di pagina | niente |
| `vuota` | una pagina bianca | niente |
| `deck` | inserisce le slide di un deck, ognuna come pagina di modello con le sue note | `file`: il `.json` del deck; `slide` facoltativo, i numeri delle slide da prendere (`[12, 14]`). I `disegno` del deck (cerchi, ciclo, croce) qui escono come passi e colonne normali; le celle della matrice con `immagine` e `motto` li portano entrambi, più la spiegazione |

Gli spazi per gli appunti sono liberi, senza righe, perché chi scrive possa farlo come vuole (Samu, 2026-10-06). Con `"appunti": "punti"` nel `.json` della dispensa ci sono i pallini di un elenco, con `"righe"` tornano le righe ogni 7,5 mm.

La copertina e il retro li fa il motore: in copertina vanno il riquadro del modulo 14.03,
il logo del cliente, la foto (`"foto"`), «Materiale didattico personale di», titolo, luogo
e date e i dati della società; sul retro l'assistenza post-formazione (`"assistenza"`), il
docente, i loghi e il motto. Le testate sono speculari come nella dispensa Marini: sulle
dispari il nostro marchio a sinistra, sulle pari a destra, col numero sempre sul lato
esterno.

Si può dare anche **solo il deck delle slide** (`node monta.mjs deck.json`), con la veste
nel suo blocco `"dispensa": { "veste": "digited" }`. Ne esce una
dispensa con il sommario, una pagina per slide col contenuto ridisegnato per la carta, le
note come approfondimento e gli appunti in fondo. Per i corsi della Business School è la
strada più corta, ma resta un libro da leggere e non un quaderno: di solito conviene una
dispensa a pagine che lo include con `{ "tipo": "deck" }` e ci aggiunge debriefing,
apprendimenti e appunti.

## Come si monta

```bash
node monta.mjs "<cartella del corso>/dispensa.json"
```

Scrive `dispensa-A5-pixart.pdf` accanto al `.json` e stampa il numero di facciate, che è
quello da scrivere nell'ordine, gli avvisi (una pagina che non sta in un A5, un tipo che
non conosce) e il riassunto dell'ordine. Poi **si apre il PDF e si guarda**, pagina per
pagina, prima di caricarlo.

I file stanno nella cartella del corso, nel Drive della linea: il `.json` e il PDF, mai su
questo Drive. Immagini, foto e logo si indicano col percorso. Un percorso che comincia con
`Drive condivisi/` lo script lo trova da solo, su ogni Mac.

## Cosa manca, dichiarato

- **Mai stampata.** Provata il 2026-10-05 solo sui due esempi, guardati come immagini: il
  quaderno in veste FYM (26 facciate) e la dispensa dalle slide della docenza Leadership
  2025-05-23 in veste Digit'Ed (20 facciate). Il primo ordine vero dirà se il controllo
  di Pixartprinting lo accetta così com'è.
- **Il profilo Fogra 39 non c'è**: vedi sopra.
- **I modelli disegnati della dispensa Marini (C.A.P., le tre sfere) erano immagini.** Qui
  si mettono come `immagine` in una pagina `modello`, e vanno esportati a parte da
  Presentazioni Google o ridisegnati. Il motore non li disegna.
- **Solo Mac**: cerca Chrome in `/Applications` e Ghostscript in Homebrew. Senza
  Ghostscript esce un PDF in RGB, che Pixartprinting converte da sé, e lo script lo dice.
- **Il punto metallico non c'è**: vorrebbe le facciate in multipli di 4 e niente margine
  della spirale. Si aggiunge quando serve.
- **I tipi del deck che non conosce** (quelli di fym-slide, il deck FYM) li salta e lo
  dice. Oggi capisce i tipi di fym-slide-digited.

## Ancora da verificare

- Se 13 mm dal lato della spirale bastano davvero con i fori da 4 mm: Pixartprinting dice
  da 10 a 15. Va guardato sulla prima copia stampata.
- Se la Business School vuole la dispensa dei suoi corsi nella sua veste o nella nostra:
  la veste `digited` è una nostra interpretazione del format, non un loro modello.
