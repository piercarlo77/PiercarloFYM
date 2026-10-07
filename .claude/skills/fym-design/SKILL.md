---
name: fym-design
description: "L'aspetto delle cose di FYM (la skill si chiamava Rams, e Rams resta il suo personaggio), nato sulle pagine di COACHING.it: i colori con il loro ruolo e il loro contrasto misurato, i tre caratteri del brand, la scala tipografica, gli spazi, il taglio a 49° che viene dal marchio, e cosa prendiamo dallo stile Apple e cosa no. Non è un metodo di costruzione: quello è la skill fym-siti (Linus), e va caricata insieme a questa. Attiva su 'fym-design', 'rams', 'che colori usiamo', 'sistema visivo', 'palette', 'font del brand', 'stile Apple', 'landing coaching.it', 'come deve sembrare'."
metadata:
  fonte: "Brand book 23.06 — Drive condiviso REBRANDING FYM"
  perimetro: "COACHING.it. Le altre linee hanno palette proprie: vedi § 2"
  creata: '2026-08-25'
---

# fym-design (Rams): l'aspetto di COACHING.it

*Dal nome di Dieter Rams. È il motivo per cui questa skill esiste: lo stile Apple che ci
piace non è nato ad Apple, discende dai dieci principi di Rams. Andiamo alla sorgente
invece di copiare la copia — che è anche l'unico modo di non fare un clone.*

**Questa skill porta l'aspetto, non il metodo.** Il metodo — rilievo, costruzione blocco
per blocco, misura, accessibilità, go-live — è [`fym-siti`](../fym-siti/SKILL.md), e va caricata
**insieme** a questa, non al posto suo. Regola di precedenza: se Linus e Rams dicono cose
diverse, **vince Linus**, perché le sue regole sono di sicurezza e queste di gusto.

Quello che impariamo va **qui** se riguarda l'aspetto, e in `fym-siti` se riguarda il
metodo: nel corpo se è una regola, nel diario `apprendimenti.md` se è un episodio.

Rams riempie esattamente il buco che Linus lascia aperto al suo § 4: «tre riferimenti
visivi concreti» e «il sistema visivo» non si reinventano a ogni pagina, sono scritti qui.

---

## 1. Da dove vengono questi numeri

Dal **Brand book 23.06**, nel Drive condiviso **REBRANDING FYM** (in radice), insieme
agli asset in `FYM LOGO assets/`. Il brand book è la fonte: **non si copia qui**, si cita —
vedi la regola 5 in [CLAUDE.md](../../CLAUDE.md). Quello che sta in questo file è solo la
parte che serve a una macchina per costruire una pagina, più le misure che il brand book
non aveva fatto.

I rapporti di contrasto qui sotto sono **calcolati il 2026-08-25**, non stimati. Il brand
book a pagina 15 porta la nota «*Controllare rapporti per capire come impostare regola
scuro-chiaro*»: questa skill è la risposta a quella nota.

**Dove queste regole sono state provate:** la pagina di coaching.it, nel Drive
**COACHING.it**, in `02_MARKETING E COMUNICAZIONE COACHING.it/progetto sito con Claude`.
Dal 2026-08-25 sta lì e basta: il doppione su FYM CORPORATE è stato messo nel cestino
appena `samuele@fym.it` è entrato nel Drive. È un puntatore, non una copia — [le
convenzioni](../../convenzioni-drive.md) vietano le seconde. Chi cambia una regola qui
rilanci le misure lì prima di crederci.

---

## 2. I colori

Perimetro: **COACHING.it**. Il brand book definisce una palette per FYM e una per ogni
linea (Scuola Coaching, Formazione in cammino) ma **non una per COACHING.it**.

**Deciso il 2026-08-25: COACHING.it usa la palette principale FYM, senza un secondario
suo.** I quattro secondari del brand book sono stati verificati uno per uno e nessuno
entra (§ 2-bis). La ragione di fondo non è di contrasto: coaching.it è la **porta
d'ingresso** ai servizi di coaching di FYM, non una quarta linea. Un colore proprio la
farebbe sembrare sorella di Scuola e Cammini, che è l'opposto del suo mestiere.

| Token | Ruolo | Hex | Nome nel brand book |
|---|---|---|---|
| `--fondo` | fondo di pagina, sempre | `#ffffff` | *bianco pieno* (era Soft `#f6fbfc`) |
| `--fondo-alt` | fascia alternata, schede | `#eceef1` | *calcolato qui* (Navy all'8%) |
| `--filetto` | separatori da 1px, mai fondi | `#cbd0d8` | *calcolato qui* (Navy al 22%) |
| `--inchiostro` | tutto il testo che si legge | `#112b4d` | Navy |
| `--inchiostro-tenue` | etichette, note, didascalie | `#4a5f79` | *calcolato qui* |
| `--azione` | bottone primario, link | `#015174` | Blu FYM |
| `--accento` | evidenza, una per schermata | `#f5bc47` | Dandelion |
| `--superficie` | riempimenti, mai testo | `#a3c0d2` | Sky |

**Il fondo alternato è Navy all'8%, `#eceef1`. Deciso il 2026-08-25**, dopo aver provato
in pagina prima il `Grey #e2e5e7` del brand book e poi il `Cloud #d9f0f4` — che occupano
entrambi il ruolo «UI/UX color», Grey nella palette principale, Cloud in quelle di Scuola
e Cammini. Nessuno dei due regge su una pagina intera: **il grigio neutro legge come una
scelta non fatta, e l'azzurro tira tutta la pagina verso il freddo**, che è l'opposto del
registro di un servizio di coaching (§ 6). Il fondo che funziona non viene dalla palette:
è il **Navy dell'inchiostro diluito all'8% sul bianco**, cioè un grigio che porta dentro
la tinta che il brand ha già, senza aggiungerne una nuova. Contro il fondo pagina, che dal 2026-09-24 è bianco pieno, sta a
**1,16:1**: lo stacco fra le fasce chiare lo fa la **tinta**, non la luminosità — se serve
più stacco si cambia fondo, non si scurisce questo. Su `#eceef1`: Navy 12,24:1 · Blu FYM
7,43:1 · `--inchiostro-tenue` 5,64:1.

**Il filetto è un token a parte, e questo è il punto che si sbaglia.** Fino al 2026-08-25
il fondo alternato faceva due mestieri: riempiva le fasce **e** disegnava i separatori da
1px di tabelle, tappe e domande. Sono due lavori con due esigenze opposte — un fondo va
bene chiarissimo, un filetto a 1,1:1 **semplicemente non si vede**, e in pagina le righe
erano sparite senza che nessuna sonda se ne accorgesse, perché un separatore invisibile
non è un difetto di contrasto. Quindi `--filetto` `#cbd0d8`, Navy al 22%: 1,55:1 sul fondo
pagina (bianco pieno dal 2026-09-24) e 1,33:1 sul fondo alternato. Si vede come riga, senza
diventare una scatola. **Un token, un mestiere.**

`--inchiostro-tenue` non sta nel brand book: è stato **calcolato**, non scelto a occhio.
È il grigio-blu più chiaro che passa AA su tutti e quattro i fondi su cui atterra
(5,18:1 nel caso peggiore, che era il fondo Grey; sul fondo alternato di oggi sta a 5,64:1). Sotto quel valore si ricade nell'errore
del 2026-08-24, quando **un solo token** ha prodotto ventitré fallimenti di contrasto.

**Il fondo è bianco pieno, `#ffffff`. Deciso da Alessia il 2026-09-24**, al posto del Soft
`#f6fbfc` del brand book. I rapporti qui sotto sono ricalcolati su bianco: cambiano tutti di
poco, e tutti in meglio, perché il bianco pieno è più chiaro del Soft. Nessuna regola cambia
verso: quello che passava passa, quello che non passava — bianco su Dandelion, Sky come testo,
Blu FYM su Navy — non passa lo stesso.

⚠️ **Il Brand book 23.06 dice ancora Soft `#f6fbfc`**, e il PDF non è stato aggiornato: lo
aggiorna chi lo tiene. Finché non succede, per le macchine vale questo file, e chi legge il
brand book trova un colore diverso.

### I rapporti misurati, e le regole che ne derivano

| Combinazione | Rapporto | Verdetto |
|---|---|---|
| Navy su bianco | 14,22:1 | AAA — è il testo normale |
| Blu FYM su bianco | 8,64:1 | AAA — link e titoli colorati |
| Bianco su Blu FYM | 8,64:1 | AAA — **il bottone primario è questo** |
| Navy su Dandelion | 8,24:1 | AAA — l'unico testo che va sul giallo |
| Blu FYM su Dandelion | 5,01:1 | AA — passa, ma solo per testi grandi |
| Dandelion su Navy | 8,24:1 | AAA — l'accento funziona sul fondo scuro |
| **Bianco su Dandelion** | **1,73:1** | **mai.** È il difetto classico della CTA gialla |
| **Sky su bianco** | **1,90:1** | **mai come testo.** Sky è un riempimento |
| Navy su Sky | 7,47:1 | AAA — **l'unico testo che va su una fascia Sky** |
| **Bianco su Sky** | **1,90:1** | **mai.** |
| **Blu FYM su Navy** | **1,65:1** | **mai.** I due blu del brand non si sovrappongono |

Le tre regole da ricordare, che sono quelle che si sbagliano:

- **Sul giallo si scrive in Navy.** Bianco su Dandelion non passa e non passerà mai:
  nessuna dimensione lo salva. Se una CTA gialla ha bisogno del bianco, la CTA non è
  gialla — è Blu FYM.
- **Sky non è un colore di testo.** È il colore di una superficie, di un grafico, di una
  campitura: una parola in Sky sul chiaro non si legge. Quando Sky fa da fondo, sopra si
  scrive solo in Navy, come sul giallo; il bianco non passa. (Sul Navy lo stesso esadecimale
  è `--su-scuro-tenue` e fa le etichette, 7,47:1: è l'unico caso in cui Sky è testo.)
- **Blu FYM e Navy non si toccano.** Sono a 1,65:1 fra loro: il marchio blu su fondo navy
  sparisce. Su fondo scuro si usa la versione negativa del logotipo, che è un file
  diverso — non il logo blu ricolorato (§ 5).

## 2-bis. I quattro secondari, e perché nessuno entra

Verificati e misurati il 2026-08-25, perché la domanda si riaprirà. Sono questi quattro,
pagina 16 del brand book: non ce ne sono altri da nessuna parte.

| Secondario | | Perché no |
|---|---|---|
| Uniberry | `#9f1c4c` | è il **secondario della Scuola Coaching**. Su una pagina COACHING.it direbbe «questa è la Scuola» |
| Forest | `#196031` | è il **primario di Formazione in cammino**. Idem |
| Amber boss | `#a86200` | **a 5° di tinta da Dandelion**: è lo stesso giallo-arancio dell'accento, solo più scuro, e in pagina i due litigano invece di distinguersi. E come testo cade su due fondi su quattro (3,76:1 su Grey, 4,02:1 su Cloud) |
| Prime violet | `#643a95` | l'unico tecnicamente pulito — 7,80:1 su Soft, 6,43:1 su Grey, bianco sopra 8,14:1. Scartato per merito, non per misura: è a 70° dal Blu FYM, quindi in piccolo legge come «un altro freddo scuro» senza aggiungere niente |

Restano fuori da una pagina COACHING.it **tutti e quattro**, con una sola eccezione: se la
pagina sta parlando proprio di un'altra linea e la sta citando, allora usa il colore di
quella linea, ed è giusto così.

**Le icone sono quelle del set del brand.** In `REBRANDING FYM/Icon set/` c'è un set Shutterstock
di 48 icone a linea (workshop, formazione, persone), comprato da FYM, ma solo in EPS con
un'anteprima JPG. Per il web va convertito: Ghostscript lo porta in PDF, PyMuPDF legge i
tracciati (sono riempimenti, non tratti), e ogni icona diventa un SVG con `fill="currentColor"`.
Lo script è `prove/icone-set.py` nel progetto del sito della Scuola, con i 48 file già estratti in
`src/icone/set/`. Regola di Samuele del 2026-09-15: **prima si guarda nel set, le icone disegnate a
mano restano solo per i segni che il set non ha** (spunta, croce, freccia). Sotto i 24 px le icone
del set si impastano: si usano a 24-32.

**Le croci che segnalano cose che non ci sono sono rosse, e il rosso del brand è Uniberry
`#9f1c4c`.** Regola di Samuele del 2026-09-15, nata sul sito della Scuola (l'elenco «dieci cose
che non troverai»): una croce grigia si legge come un elenco puntato, una rossa dice «no». È
un segno, non un testo: sta a 7,65:1 sul fondo bianco e 6,58:1 sul fondo alternato, quindi reggerebbe
anche come testo, ma non lo diventa. Sulle pagine della Scuola è il suo secondario e non c'è
niente da decidere; su una pagina COACHING.it vale il paragrafo qui sopra, e se serve una croce
rossa lì, si chiede a Samuele quale rosso, perché Uniberry direbbe «Scuola».

**Il vecchio azzurro FYM, `#30bef2`, è il colore dei segni.** Deciso da Samuele il 2026-09-26 sulla
pagina degli Special Coaching Lab. Serve dove un segno piccolo deve distinguersi a colpo d'occhio
dagli altri: il trattino di una categoria, un'icona, una legenda, una serie in un grafico. La palette
nuova non aveva niente per quel ruolo, e lì si è visto: come trattino di 3px accanto al Blu FYM e
all'Uniberry, il Prime violet e il Forest si confondevano con il blu, e lo Sky era troppo spento
(1,64:1 sul fondo alternato). Tre vincoli:

- **Mai testo.** Sta a 2,15:1 sul bianco e 1,85:1 sul fondo alternato: accanto al segno c'è sempre
  scritto il nome della cosa.
- **Mai l'accento.** L'evidenza della pagina resta il Dandelion. L'azzurro come accento al posto del
  giallo è stato provato su tutta la pagina lo stesso giorno, e Samuele ha tenuto il giallo.
- **Mai l'anello del fuoco sul chiaro**, che vuole 3:1. Sul Navy invece regge (6,62:1).

⚠️ **Il Brand book 23.06 non lo contiene ancora**: va aggiunto con questo ruolo da chi lo tiene
(Alessia). Finché il PDF non è aggiornato, per le macchine vale questo paragrafo.

---

## 3. I caratteri

Tutti e tre sono **su Google Fonts, licenza aperta**: si possono ospitare sul nostro
dominio senza chiedere niente a nessuno. È la ragione per cui l'aspetto Apple qui è
ottenibile davvero — SF Pro non è licenziabile per il web fuori dalle piattaforme Apple,
e ogni tentativo di «un font che sembra quello» finisce in Helvetica.

| Carattere | Dove | Pesi che servono |
|---|---|---|
| **Red Hat Display** | titoli e sottotitoli | 800 (titolo), 700 (sottotitolo) |
| **Plus Jakarta Sans** | tutto il testo che si legge | 400 (corpo), 600 (titolo inter-testo) |
| **Fraunces** | *italic*, e solo quello | 400 italic |

Attenzione: il brand book scrive «Plus Jack**a**rta Sans». Il carattere vero si chiama
**Plus Jakarta Sans**, senza la *c*: cercando l'altro non si trova niente.

**Fraunces è la tipografia special, e va usata come tale.** Serve per le citazioni in
grande formato e per gli occhielli dal tono più caldo — è la cosa che rende la pagina di
un'azienda di coaching invece che di un'azienda di hardware. Ma è un corsivo con
personalità, e **si legge poco**: **una occorrenza per pagina, non di più** (Samuele,
2026-09-15, sul sito della Scuola, dove ne erano finite tre: il sottotitolo della testata,
la citazione a metà pagina e la domanda di chiusura nel piede). Oltre quella soglia smette
di essere uno stacco e diventa il carattere della pagina. La voce che resta è quella che
suona come una persona che parla: la citazione, o la domanda del piede se non c'è altro.

Si ospitano in locale in `woff2`, con `font-display: swap`, e si precarica **solo** il
peso del titolo — la regola sta al § 4 di [`tipi/sito-web.md`](../fym-siti/tipi/sito-web.md)
e non si ricopia qui.

### La scala

Poche misure, distanti fra loro. Una scala con dodici gradini non è una scala, è una
scusa per non decidere.

**È una scala aurea: ogni gradino è il precedente per √1,618**, cioè sulla scrivania
17 · 21,6 · 27,5 · 44,5 · 72, e sul telefono 17 · 21,6 · 24 · 34 · 44. Deciso da Samuele il
2026-09-15 sul sito della Scuola, dopo averla provata su una pagina sola e poi su tutte
(«portala su tutto il sito»): la scala di prima (44 · 36 · 21 · 17) era corretta ma
**monotona**, con i titoli troppo vicini al corpo e un «muro di testo» a corpo 21 sotto.
La proporzione fra un gradino e l'altro è la stessa che fa la dinamica delle pagine di
Apple, ed è quella che si chiedeva.

| Ruolo | Misura | Carattere e peso | Interlinea |
|---|---|---|---|
| titolo 1 | `clamp(2.75rem, 5.6vw, 4.5rem)` (44→72) | Red Hat Display 800, `letter-spacing: -0.02em` | 1,02 |
| titolo 2 | `clamp(2.125rem, 3.5vw, 2.78rem)` (34→44,5) | Red Hat Display 700 | 1,12 |
| corpo grande, frase di apertura | `clamp(1.5rem, 2.15vw, 1.72rem)` (24→27,5) | Plus Jakarta Sans 400 | 1,4 |
| titolo inter-testo | `1.35rem` (21,6px) | Plus Jakarta Sans 600 | 1,35 |
| corpo | `1.0625rem` (17px) | Plus Jakarta Sans 400 | 1,6 |
| etichetta | `1rem` (16px) | Plus Jakarta Sans 600 | 1,4 |

Non c'è più una misura `display`: il titolo 1 a 72px è già la misura di una hero, e in una
hero a due colonne (da 900px il testo sta accanto alla foto) va su due o tre righe corte
senza bisogno di un gradino in più. E **sparisce la via di mezzo dei 21px per i paragrafi
lunghi**: un paragrafo o è la frase di apertura, a 24-27, o è corpo a 17. Il pattern che ne
segue, provato sulle pagine dei corsi e poi su tutto il sito:

- **una frase di apertura** in corpo grande e Navy, una sola, che dice la cosa;
- sotto, **paragrafi corti** a corpo 17 in `--inchiostro-tenue`, tre o quattro righe l'uno;
- in ogni paragrafo **una frase piena** in Navy a peso 600, quella che si deve ricordare.
  È lo `strong`, e sta nel testo, non nel CSS: chi scrive decide cosa pesa.

Sul sito della Scuola è la classe `.apertura` di `base.css`. I titoli delle **schede**
(un nome dentro una scheda a tre o quattro colonne) stanno un gradino sotto il titolo 2,
a 24-27,5 in Red Hat Display: a 44 il nome mangiava la scheda. E con i titoli a 34px su
una colonna da 272px (telefono da 320) una parola lunga fa scorrere la pagina di lato:
la rete è `overflow-wrap: anywhere` sotto i 400px, la regola è scrivere titoli con parole
corte («quanto ti seguiamo», non «quanto accompagnamento»).

⚠️ **I 14px sono il pavimento, non una misura da usare.** Corretto il 2026-08-25 dopo
averlo sbagliato: l'etichetta stava a 14px e il testo secondario a 15, e su una pagina
intera erano ventitré punti di testo piccolo — a schermo sembrava tutto minuto. Ora le
misure piccole sono **due sole**: `1rem` (16px) per etichette, targhette e numeri di
servizio, `1.0625rem` (17px) per **tutto il testo che si legge**, compreso quello
secondario. La gerarchia fra corpo e testo secondario la fa il **colore**
(`--inchiostro-tenue`), non la dimensione. Il pavimento dei 14px resta quello che è — un
pavimento, al § 6.2 di [`fym-siti`](../fym-siti/SKILL.md) — e non si tocca mai.

Il corpo a 17px è una scelta deliberata: 16 è il default di tutti, e si vede.

Il testo lungo sta entro **68 caratteri per riga**, cioè `max-width: 34em`. **In `em` e non
in `rem`, ed è il punto che si sbaglia:** `em` è la misura del testo che sta lì dentro, `rem`
è quella della pagina. Sui paragrafi le due coincidono e nessuno se ne accorge; su una
citazione in Fraunces a corpo doppio, `34rem` diventano 34 caratteri per riga invece di 68, e
la citazione si accartoccia in mezzo allo spazio vuoto. Corretto il 2026-09-08 dopo averlo
visto succedere su una slide, dove i corpi sono molto più distanti fra loro che su una
pagina. I titoli
sono **dichiarativi e corti**: una riga sola, due al massimo, con la subordinata sotto in
corpo grande. Se il titolo ha bisogno di tre righe, non è un titolo, è un paragrafo.

### Aziende o persona: il segno della committenza

Deciso il 2026-08-25. Chi naviga deve capire a colpo d'occhio se quello che sta guardando
lo paga l'azienda o lo paga lui, perché il percorso cambia (doppia committenza e report
finale contro nessuno dei due).

| | Segno | Dove |
|---|---|---|
| **B2B**, paga l'azienda | trattino 32×3px in **Blu FYM** | etichetta di gruppo, riquadro «Aziende», tabella «Aziende», esito del test |
| **B2C**, paga la persona | trattino 32×3px in **Dandelion** | tutto il resto: privati, sport, scuola |

Tre vincoli, tutti e tre necessari:

- **È un segno, non il colore delle parole.** Dandelion come testo sta a 1,65:1 sul chiaro
  e non si legge: la distinzione non può stare nel colore del testo, mai.
- **Il colore non è l'unico portatore.** Accanto al trattino c'è sempre scritto «B2B» o
  «B2C», o il nome della categoria. Chi non distingue i colori legge lo stesso.
- **Il segno è quello che la pagina ha già** — il trattino delle tappe del metodo — così
  non si impara un idioma nuovo. E si spiega **una volta sola**, in chiaro, nella sezione
  dei coach.

---

## 4. Gli spazi, e la geometria

- **Scala degli spazi**, multipli di 4: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 160`.
  Non si usano valori fuori scala. Un `padding: 37px` è sempre il sintomo di qualcosa
  aggiustato a occhio.
- **Le fasce respirano**: `96px` sopra e sotto su telefono, `160px` da tablet in su. È il
  numero che fa più differenza di tutti gli altri messi insieme, ed è il primo che viene
  tagliato quando si ha fretta.
- **Una idea per fascia.** Se una fascia ha due messaggi, sono due fasce.
- **Lo spazio che lega è più piccolo di quello che separa.** Un titolino sopra un elenco
  vuole circa **una volta e mezza** lo spazio che c'è fra due voci dell'elenco: se è uguale,
  o peggio se è zero, il titolino smette di essere un titolo e legge come la prima voce.
  Vale per qualunque gruppo con una sua etichetta: schede, tappe, domande. Imparato il
  2026-09-08 su una slide a due colonne dove quello spazio era zero, e non se n'era accorto
  nessuno finché non l'ha guardata una persona. Lo stesso vale fra il testo e una **scatola**,
  cioè tutto quello che ha un bordo, un fondo suo o un'ombra (una tabella, un pannello, una
  scheda, una foto): sta ad **almeno 24px** dal testo che ha sopra e da quello che ha sotto,
  mai 16, che è lo spazio fra due paragrafi. A 16 la scatola sembra attaccata alla frase, a
  zero la frase sembra la sua didascalia. Sul sito della Scuola, il 2026-10-01, la tabella
  delle formule del Coaching LAB stava a 0px dalla frase sopra e le edizioni dei corsi a 16
  dal titolo: Samuele, «testi e tabelle troppo vicini». Fanno eccezione le parti di una
  stessa scatola (testa e corpo di una scheda, linguette e pannello) e le fasce a tutta
  larghezza, che si toccano apposta. Come si controlla: la sonda `spaziature.mjs` di fym-siti.
- **Raggio degli angoli: il 9,4% del lato**, che è il rapporto misurato sulla mattonella
  del marchio (28,35 su 302,95). Su un bottone alto 48px sono 4-5px; su una scheda larga
  360px sono circa 34px. Non è un valore fisso in pixel: è una proporzione, e va
  ricalcolata quando l'elemento cambia taglia.
- **Separatori: filetti da 1px in `--filetto`**, non scatole — non in `--fondo-alt`, che è un fondo e come riga non si vede (§ 2). Il bordo che circonda una
  cosa la chiude; il filetto che la separa la fa respirare. Le schede vivono su un fondo
  appena diverso, senza contorno.
- **Un filetto separa, quindi non sta mai sopra il primo elemento.** Scritto il 2026-09-23,
  dopo una revisione UI della home della Scuola: le testimonianze avevano `border-top` su
  tutte, e sopra la prima riga quella linea non separava niente, chiudeva soltanto. In una
  griglia il conto si fa per riga e non per voce: a una colonna resta senza filetto la
  prima, a due colonne le prime due. E sul telefono, dove l'ordine cambia, si rifà il conto.

---

## 5. Il marchio

Gli asset veri stanno in `REBRANDING FYM/FYM LOGO assets/Logotipo & icona/SVG/`.
Si prendono da lì. Non si ridisegnano, non si ricolorano.

**I loghi delle linee** (Scuola, Coaching aziendale, Formazione & Coaching, Formazione in
cammino) stanno accanto, in `FYM + loghi secondari/SVG/`, con nomi da programma di grafica
che non dicono niente. Riconosciuti il 2026-09-15 guardandoli: **Scuola coaching strategico**
verticale è `Artboard 1.svg` (Blu FYM), `Artboard 1 copy 6.svg` (Navy) e `Artboard 1 copy 3.svg`
(Soft, per il fondo scuro); l'orizzontale è **solo** `Artboard 14.svg`, in Blu FYM. Gli
orizzontali Navy e Soft esistono solo in PNG, nella cartella `PNG/`. Un sito di una linea usa il
logo della linea, non il solo FYM (Samuele, 2026-09-15, sito della Scuola).

- **Il negativo è un file diverso**, non il logo scuro con un altro `fill`. Il brand book
  è esplicito a pagina 5: la costruzione è formalmente diversa. Ricolorare quello scuro è
  un errore, non una scorciatoia.
- **Il lockup orizzontale in Soft esiste solo in PNG**, e si usa quello: `Scuola di coaching
  strategico.orizzontale_soft` nella cartella `PNG/` (1920×897, il testo dentro dice «Scuola
  Coaching Strategico», non «di»). Serve quando la testata e il piede devono portare lo stesso
  marchio e il piede è scuro (Samuele, 2026-09-23, sito della Scuola). Si ritaglia alla sua aria
  — nel file ce n'era il 27% in larghezza — e si riduce a due volte la misura in pagina, in
  WebP: 880×240 pesano 29 KB. **Un PNG del brand è un file vero; l'SVG blu ricolorato no.**
- **Grandezze minime**: 64px per il logotipo, 44px per la mattonella ridotta, 16px per la
  F iconica. Sono a pagina 11 e 13 del brand book.
- ⚠️ **Ogni SVG ha metà artboard di aria intorno.** Misurato: il logotipo occupa 185 unità
  su una viewBox larga 369, la mattonella 303 su 604 — in tutti i casi il **50,1%**. Un
  `<img width="64">` con questi file rende un marchio da 32px, cioè **sotto il minimo di
  brand**. O si ritagliano gli SVG alla loro `viewBox` vera, o si raddoppiano le misure
  in pagina. Questo è il tipo di difetto che non si vede leggendo il codice.

### L'elemento che dà carattere: il taglio a 49°

Linus chiede una cosa sola, ricorrente e riconoscibile, altrimenti viene un tema
qualunque. La nostra è **la diagonale del marchio**.

Misurata sui tracciati veri di `LOGOTIPO_navy.svg`: tutte le diagonali della Y e della M
hanno pendenza **1,152** — cioè **49,0°**, non 45°. Ogni segmento del marchio la rispetta.
Quindi: separatori di fascia, angoli tagliati delle immagini, direzione delle animazioni
di soglia, tutto a 49°. **E la diagonale sale, da sinistra a destra**, sempre (Samuele,
2026-09-03, sulle fasce: «la discesa comunicava decrescita»). **L'angolo tagliato sta in basso a destra**
su tutto: pannelli, riquadri, schede, foto che non sono ritratti (Samuele, 2026-10-05: «in basso a dx e non in
alto a sx»). Gli altri tre angoli restano tondi, e un bordo colorato che segue il taglio lo segue anche lì.
**L'eccezione sono i ritratti delle persone**: docenti, coach, firma degli articoli, chi conduce un lab, il
segnaposto di chi non ha foto, e la foto di testata, che sul telefono ha l'angolo **in alto a sinistra** e sulla
scrivania il gradino a 49° sul lato sinistro. Samuele li ha provati in basso a destra lo stesso 2026-10-05 e li ha
riportati com'erano: «nelle testate era meglio prima, anche le foto dei docenti». Un taglio a 45° «che sembra uguale» è precisamente il caso che
Linus descrive al § 5 — *dalla descrizione a parole sembra on-brand, a schermo è generico*.

---

## 6. Cosa prendiamo dallo stile Apple, e cosa no

Il problema, detto una volta: **la grammatica Apple è costruita attorno a un oggetto
fotografato nel vuoto.** Il bianco enorme funziona perché al centro c'è un telefono. Noi
vendiamo una relazione e un percorso: se si copia l'impaginato senza l'oggetto, resta una
pagina vuota con una frase grande in mezzo e niente da guardare.

**Si prende:**

- pochissimi elementi per schermata, e una sola idea per fascia;
- la scala tipografica stretta del § 3, con titoli dichiarativi corti;
- il nero che non è nero (Navy) e i grigi con una tinta dentro;
- filetti al posto delle scatole, e le ombre quasi assenti;
- una sola coppia di bottoni: pieno (`--azione`, testo bianco) e fantasma (bordo 1px,
  testo `--azione`). Non ne esiste un terzo;
- la coreografia della pagina prodotto: si scorre, e una cosa alla volta compare alla
  soglia.

**Non si prende:**

- la neutralità industriale fredda. Su un servizio di coaching legge distante, e il
  nostro registro deve essere caldo: è per questo che il brand ha Fraunces e Dandelion,
  che ad Apple non esisterebbero;
- le tabelle di specifiche e i numeri in grande senza contesto;
- lo scrollytelling a manetta: la dose è al § 8 di
  [`tipi/sito-web.md`](../fym-siti/tipi/sito-web.md), e non la alziamo;
- le foto di prodotto al centro del vuoto. Al posto dell'oggetto ci vanno **le persone**,
  e vanno trattate tutte allo stesso modo — stesso taglio, stessa resa, stessa temperatura.
  Foto disomogenee sono la cosa che fa sembrare improvvisato un sito per il resto pulito.

  **Dove sono quelle vere** (trovate il 2026-08-25): le sessioni di coaching simulate e
  gli scatti d'aula stanno in `SCUOLA COACHING STRATEGICO/02_Marketing e
  comunicazione/02.6_Foto selezionate/` — lo shoot professionale è quello firmato
  *MilordStudio*. I **ritratti dello staff** su fondo blu del brand (Alby, Francesca,
  PIER, Samu) stanno in `REBRANDING FYM/Foto sito/`, in radice.

  ⚠️ **`REBRANDING FYM/Foto sito/Home/Carosello/` NON si usa: sono immagini generate.**
  Sembrano buone in miniatura e sono la scorciatoia più a portata di mano, ma sono la
  stessa cosa dell'emoji usata come icona — il marchio del lavoro fatto in fretta.

E soprattutto: **se prendiamo solo Apple, otteniamo Apple senza l'oggetto.** La cosa che
rende la pagina nostra è il § 5 — il taglio a 49° — più le persone al posto del prodotto.

---

## 7. La coppia di bottoni

| | Primario | Fantasma |
|---|---|---|
| Fondo | `--azione` `#015174` | trasparente |
| Testo | `#ffffff` (8,64:1) | `--azione` (8,64:1 su `--fondo`) |
| Bordo | nessuno | 1px `--azione` |
| Altezza | 48px minimo (il pavimento è 44) | uguale |
| Raggio | 9,4% dell'altezza | uguale |

Uno solo dei due è primario, per schermata. Due bottoni pieni affiancati sono due
richieste, e chi legge non ne sceglie nessuna.

**Dentro lo stesso gruppo i bottoni hanno la stessa larghezza e la stessa altezza**, anche
quando le etichette sono di lunghezze diverse (2026-09-23, revisione UI della home della
Scuola: «Scopri la Coaching Week» misurava 254px e «Scarica il programma della Scuola» 325,
e la coppia leggeva come due cose scollegate). Si ottiene con `flex: 1 1 <base>` su tutti e
due: affiancati si dividono la riga in parti uguali, e quando non ci stanno vanno a capo
prendendo tutta la riga, che è quello che chiede linus § 6.2. Mai stringere l'etichetta per
farceli stare.

**Due azioni di testo affiancate stanno in un contenitore flex con `gap`**, non in un
paragrafo separate da un punto mediano: andando a capo resterebbero incollate, e i bersagli
da 44px si sovrapporrebbero. Attenzione, perché fuori da un paragrafo la regola che allarga
i link del testo non li prende più: il bersaglio va rimesso sul contenitore (misurato il
2026-09-23: due link passati da un `<p>` a un `<div>` erano tornati alti 27px, e la sonda
di linus li ha trovati subito).

**Sul sito della Scuola (deciso da Samuele il 2026-09-03) il primario è Dandelion con testo
Navy**, 8,24:1, lo stesso della voce «Coaching Week» nel menu: così l'azione principale ha
un colore solo su tutto il sito, chiaro e scuro. Il fantasma resta Blu FYM. La disciplina non
cambia: un pieno per schermata, il resto fantasma. Sul giallo il fuoco da tastiera si disegna
in Blu FYM, perché il giallo sul giallo non si vede. Attenzione a non usare il Blu FYM come
testo sul giallo: 5,01:1, passa solo per i testi grandi.

---

## 7-bis. Quando qualcosa si apre, si tocca o si chiude, si vede

**Regola di Samuele, 2026-08-25.** Ogni elemento che cambia stato lo deve dichiarare
**subito e senza ambiguità**: una categoria di listino che si apre, una domanda frequente,
un bottone premuto, una scheda scelta. Chi tocca qualcosa deve sapere di averlo toccato
prima di chiedersi se ha funzionato. Vale ovunque, non solo dove è già stato fatto.

**Lo stato non si porta mai con un portatore solo.** Ne servono due, ed è la stessa regola
del segno della committenza (§ 3): chi non distingue i colori deve capirlo lo stesso.
Nella pratica: un cambio di **colore** del titolo, più un **segno** che compare, più
l'indicatore `+`/`−` che si gira.

⚠️ **Il giallo non può essere il colore del testo aperto, e questa è la trappola.** La cosa
che viene naturale chiedere è «il titolo aperto diventa Dandelion»: su un foglio bianco
sta a **1,73:1** e su fondo chiaro a 1,65:1 — non si legge, e nessuna dimensione lo salva
(§ 2). Il giallo entra come **segno**: un filetto da 3px che si tira da sinistra a destra
sopra la voce aperta. Il testo va invece in **Blu FYM**, 8,64:1 sul bianco.

Il secondario `Amber boss #a86200` passerebbe la misura (4,76:1 sul bianco) ed è
l'obiezione ovvia. Resta fuori lo stesso: è a 5° di tinta da Dandelion e i due litigano
invece di distinguersi (§ 2-bis).

**Vale anche per il passaggio del mouse.** Le schede — linee, coach, certificazioni — si
sollevano di 4px e posano un'ombra quando ci si passa sopra: chi punta qualcosa deve
vedere che l'ha puntato, prima di premere. Tre vincoli:

- **solo dentro `(hover:hover) and (pointer:fine)`**, se no sul telefono il tocco incolla
  l'hover e la scheda resta sollevata per sempre;
- **da ferma la pagina resta piatta.** L'ombra sta solo nel passaggio, e così la regola
  delle «ombre quasi assenti» (§ 6) non si rompe: l'unica ombra a riposo resta quella dei
  fogli dei listini;
- **chi ha `reduced-motion` non vede il sollevamento ma vede l'ombra.** Il riscontro non si
  toglie a nessuno: si cambia solo il modo di darlo.

⚠️ **La regola dell'hover va scritta DOPO quella della comparsa alla soglia.**
`.appare.dentro{transform:none}` e `.scheda:hover{transform:...}` hanno la stessa
specificità: a parità vince chi viene dopo. Messa prima, l'ombra compare e la scheda resta
ferma — un difetto che leggendo il CSS sembra corretto.

### Quanto dura

Le regole qui sopra dicono **cosa** si muove e non **quanto**, e senza un numero ognuno ne
sceglie uno diverso: è così che una pagina perde il passo pur avendo tutte le regole
rispettate. Scritto il 2026-09-08, prendendo la scala dei registri da
[frontend-slides](https://github.com/zarazhangrui/frontend-slides): il movimento
cinematografico sta fra 1 e 1,5 secondi, quello professionale fra 200 e 300 millisecondi.

**Il nostro registro è il secondo, ma tiepido**, perché il brand ha Fraunces e Dandelion e
non deve leggere freddo (§ 6). Quindi:

| | Durata | Note |
|---|---|---|
| comparsa alla soglia | **350 ms** | con lo scarto qui sotto |
| scarto fra un elemento e il successivo | **60 ms** | il quinto elemento è a posto dopo 590 ms |
| riscontro al tocco e al passaggio del mouse | **200 ms** | chi tocca deve vedere subito, non fra un attimo |
| apertura di una categoria o di una domanda | **250 ms** | |

**Il conto che conta è quello dell'ultimo elemento, non del primo.** A 600 ms con 100 ms di
scarto, che era il valore di partenza scelto a occhio, su un gruppo da cinque l'ultimo
arriva dopo **oltre un secondo**: chi sta parlando davanti a quella pagina, o a quella
slide, aspetta il proprio contenuto. È il motivo per cui la durata da guardare non è mai la
singola transizione.

**Provato su** i due listini, le domande frequenti e le tre famiglie di schede di
coaching.it, il 2026-08-25. Le durate del 2026-09-08 sono provate su un deck di fym-slide, non
ancora su una pagina.

---

## 7-ter. Come il giallo entra in una fascia chiara

Deciso il 2026-08-25, dopo che «un contorno giallo attorno alle fasce grigie» si è
rivelato impossibile due volte.

**Un contorno no.** Dandelion contro il fondo alternato sta a **1,48:1** e contro il fondo
pagina a 1,73:1: non si vede. E un bordo che circonda chiude, che è l'opposto del § 4.

**Un bordo solo in cima sì**, perché lì il giallo ha il fondo pagina dietro e stacca. Sulla
fascia alternata di coaching.it è una striscia di 5px lungo il bordo superiore che in alto
a sinistra **gira a 49°**, la pendenza del marchio. La fascia si annuncia invece di
cominciare e basta.

⚠️ **Il taglio a 49° qui è quello PICCOLO (48px), e non contraddice la regola del § 9.**
Sono due mestieri diversi: sulla fascia scura del metodo il taglio è grande e dà la
*silhouette* a tutta la fascia — e lì resta uno solo; qui è un *segno* di pochi pixel che
accompagna un bordo. Se un domani i due si confondono, è il segno che va tolto, non la
silhouette.

⚠️ **Il modo in cui si dipinge cambia la misura, anche se a schermo non si vede.** La
prima versione dipingeva la fascia di **giallo** e ci rimetteva sopra un `::before` del
colore vero: identica a occhio, ma il fondo che il testo aveva davvero dietro era
Dandelion, e `misura-contrasto.mjs` ha letto **otto testi a 3,8:1**. Non era un falso
allarme: il giorno che quell'overlay non dipinge, il testo è davvero su giallo. La striscia
va disegnata **sopra**, come strato in più — non sotto, come fondo che si intravede.

---

## 7-quater. Le icone

**Il brand book non ha una pagina sulle icone**: verificato il 2026-09-03 su tutte e 22 le
pagine del Brand book 23.06 (logo, colori, caratteri: niente pittogrammi). L'unico riferimento
nel Drive è `REBRANDING FYM/Icon set/`, un set stock a linea (48 icone «workshop»): tratto
sottile e uniforme, punte tonde, niente riempimenti. È quello che si segue.

- **Icone d'interfaccia a linea**: `stroke` 1,8-2 px, `stroke-linecap: round`, nessun
  riempimento, 18-22 px di lato, colore `--azione` (o quello del testo accanto). Sotto i 24 px
  le forme del marchio non si leggono (linus, diario 2026-08-30): qui si usano forme
  **convenzionali**, freccia, calendario, orologio, spunta, e la geometria del brand resta
  alle taglie grandi.
- **Una freccia al posto di una parola.** Su una scheda che è tutta un link non si scrive
  «Apri» o «Scopri di più»: una freccia a linea in basso a destra, che al passaggio del
  mouse si sposta di 4 px (solo dentro `(hover:hover)`), dice la stessa cosa senza rumore.
  Regola di Samuele, 2026-09-03.
- **Dove la parola serve, la coda della scheda è sempre la stessa**: un filetto che stacca
  l'azione dal contenuto, l'azione, e la freccia **accanto al testo**, a otto pixel, non
  spinta all'altro capo della scheda. La coda sta in fondo (`margin-top: auto`), così le
  code delle schede della stessa riga si allineano anche con testi di lunghezze diverse, ed
  è quello che rende leggibile una riga di schede (revisione UI del 2026-09-23). Sul sito
  della Scuola è il componente `Vai.astro`, con le classi in `base.css`: un pezzo solo per
  tutte le pagine, non una coda ridisegnata a ogni griglia.
- ⚠️ **La freccia è un disegno, non un carattere.** Mai il glifo `→`: cambia forma da un
  carattere tipografico all'altro, non si allinea alla riga come l'icona e non si può
  ingrossare a 1,8px di tratto. E va nascosta a chi legge con la voce (`aria-hidden`),
  perché il link lo dicono già le parole accanto.
- **Mai emoji**, mai icone piene «da app», mai due stili nella stessa pagina.

Provato su `/corsi/` del sito della Scuola, 2026-09-03.

## 7-quinquies. Scegliere fra poche opzioni: pillole, non scatole

**Correzione di Samuele, 2026-09-16**, sulla pagina di attivazione dei percorsi promozionali.
Una scelta singola fra cinque aree era stata disegnata come cinque scatole bordate, una sotto
l'altra, con il tondino del radio a sinistra e un sottotitolo sotto ogni voce: «questo
graficamente non funziona». È l'aspetto di qualunque costruttore di moduli, e va contro il § 4:
il bordo che circonda una cosa la chiude, e cinque cose chiuse in fila sono cinque scatole.

Il sito aveva già il controllo giusto, il filtro per specializzazione della vetrina dei coach.
Da lì la regola:

- **Poche opzioni brevi, una sola da scegliere: pillole affiancate**, che vanno a capo se non
  ci stanno. Bordo 1px `--filetto`, fondo bianco, raggio 5px, testo `--inchiostro` 600, alta
  almeno 44px. Il radio vero resta sotto, invisibile, grande quanto la pillola.
- **Quella scelta ha tutto il contorno giallo e più spesso, niente filetto in basso** (Samuele,
  2026-10-02, sulla landing Federmanager: «giallo su tutti i pulsanti di tutti i siti»). Due segni,
  come al § 7-bis: bordo Dandelion da 3px e testo in `--azione`. Il padding scende di quanto sale il
  bordo (2px per lato), così la pillola non cambia misura quando la si sceglie. Vale per ogni
  scelta a pillole, radio o bottoni `aria-pressed` che siano. **Il fuoco da tastiera diventa
  `--azione`**, perché giallo si confonderebbe con la scelta. È un'eccezione voluta al «contorno
  no» del § 7-ter: il giallo sul bianco sta a 1,73:1, e lo spessore che cambia è il secondo segno
  che rende lo stato leggibile anche a chi il giallo lo vede poco. Le schede a linguette (tab)
  restano col filetto in basso: sono navigazione, non una scelta. **Dove ogni opzione ha già un
  colore suo, il contorno prende quello e non il giallo**: sono le linee degli Special Coaching
  Lab sul sito della Scuola (Business Blu FYM, Personal Uniberry, Innovation l'azzurro della linea),
  dove il colore della linea è un segno della pagina (Samuele, 2026-10-02: «il colore deve
  rimanere»). La forma resta quella: contorno da 3px, niente riga sotto.
- **Niente sottotitolo dentro l'opzione.** Se una voce ha bisogno di una spiegazione, o il nome
  è sbagliato o la spiegazione va nel testo sopra al gruppo. Qui i sottotitoli sono caduti e
  nessuno ne ha sentito la mancanza.
- **Elenchi lunghi o scelte multiple: spunte e radio in colonna**, con l'etichetta accanto,
  come negli altri moduli del sito. Le pillole reggono fino a cinque o sei voci corte.
- **La scatola con il tondino dentro non si usa mai.** Se sembra necessaria, quasi sempre è
  perché le opzioni sono troppe o troppo lunghe: si torna alla colonna.

Provato su `/coachee/` del sito della Scuola, 2026-09-16: misurato a 320, 375, 768 e 1280. Lo stato
scelto col contorno giallo, il 2026-10-02 su fym.it/federmanager/: a 320 una pillola lunga va su due
righe scelta o no, ed è la stessa altezza nei due stati.

## 7-sexies. La testata

Fino al 2026-09-23 questa sezione non c'era, e si vedeva. Messe una accanto all'altra la
testata del sito della Scuola e quella di coaching.it, costruite a tre settimane di distanza
da due sessioni diverse, **nessuna misura coincideva**: 80px di altezza contro 93, voci di
menu a peso 600 contro 400, soglia del menu esteso a 1280px contro 880px, e il marchio FYM
presente su una e assente sull'altra. Nessuna delle due era sbagliata, perché non c'era
niente da rispettare. La regola
qui sotto è la revisione UI del sito della Scuola del 2026-09-23, promossa a regola per tutti
i siti di FYM.

- **Altezza minima 80px, marchio alto 44px, 12px d'aria sopra e sotto.** La testata era alta
  72 e il logo sfiorava i bordi. Non è una preferenza: 44 è il pavimento del bersaglio, e
  sotto i 12px di aria il marchio sembra incastrato.
- ⚠️ **Chi cambia quell'altezza cambia anche lo `scroll-padding-top`**, o le ancore interne
  finiscono dietro la testata appiccicata e il visitatore atterra su un titolo tagliato.
- **Il marchio sta a sinistra ed è un oggetto solo**, cliccabile, che porta alla home, con
  la sua etichetta accessibile. **In testata ci va il marchio con cui la gente è arrivata**, e
  i casi sono due:
  - **una linea di FYM** (la Scuola, il Coaching aziendale) porta il lockup della linea, cioè
    **FYM più il descrittore** (§ 5). La linea non è un marchio a sé: senza FYM la testata non
    dice di chi è la scuola.
  - **un prodotto con un nome suo** (coaching.it) porta **solo il proprio nome**, e FYM è
    citato nel piede. Decisione di Samuele del 2026-09-24: «qui il brand principale deve
    essere coaching.it». Chi arriva è arrivato sul prodotto, e FYM è il garante, che è
    un'informazione da fondo pagina, non da testata.

  Quello che non si fa in nessuno dei due casi è **spezzare l'identità fra i due angoli**, con
  il marchio a sinistra e il nome del prodotto a destra: si leggono come due soggetti diversi
  invece che come un prodotto e la sua casa, e a destra c'è già il menu. Dove il lockup
  ufficiale non esiste come file, il descrittore si compone in Red Hat Display accanto al
  marchio intoccato, e si segna come ripiego da far disegnare davvero.
- ⚠️ **In testata va la mattonella, non il logotipo.** I minimi del brand book (§ 5) sono
  64px per il logotipo e **44px per la mattonella ridotta**: una testata alta 80 con 12px
  d'aria lascia esattamente 44, quindi il logotipo lì dentro non ci sta e la mattonella sì.
  È il lockup orizzontale della linea, ritagliato alla sua aria, che la Scuola serve a 44px.
  ⚠️ Applicare il minimo del logotipo alla testata porta alla conclusione sbagliata che il
  marchio FYM in testata non ci stia affatto: è successo su coaching.it il 2026-08-25, e per
  un mese quel sito è rimasto senza marchio per una regola letta sulla riga sbagliata.
- **Il menu sta a destra.** Voci alte almeno 44px, peso 600, corpo dell'etichetta, raggio
  5px, e `white-space: nowrap`, perché una voce di menu che va a capo non è più una voce.
- **Dove sei si dichiara con un filetto Dandelion da 3px**, dritto sotto la parola e largo
  quanto il testo, non con un'ombra interna che segue gli angoli tondi. Con `aria-current`
  sono i due portatori che chiede il § 7-bis.
- **Sotto una certa larghezza il menu esteso sparisce, e quello che resta deve bastare.**
  La soglia non è un numero unico: dipende da quante voci ci sono e da quanto sono lunghe.
  La Scuola la mette a 1280px, coaching.it a 880px, e vanno bene tutte e due. Quello che non
  cambia è **cosa resta sotto la soglia**, e i modi sono due: o il **panino da 44×44 nella
  testata**, come la Scuola, oppure una **barra in basso**, come coaching.it, che porta
  il menu col pollice (`fym-siti/pattern/navigazione-col-pollice.md`). ⚠️ Se la barra in basso
  arriva **solo dopo l'hero**, come lì, allora nella prima schermata non c'è nessuna navigazione:
  si regge solo se in quella schermata ci sono già le azioni principali, e va verificato aprendo
  la pagina sul telefono senza scorrere, non leggendo il CSS.
  ⚠️ Quello che non si fa mai è togliere il menu senza mettere nient'altro: si prova
  restringendo la finestra e provando ad arrivare a una sezione qualsiasi, non leggendo il CSS.
- **Appiccicata in alto solo dai 1280px in su**, con fondo `--fondo` al 92% e `blur(10px)`.
  Sotto quella soglia scorre via con la pagina, perché su uno schermo alto 700px una testata
  fissa è un ottavo di pagina regalato.
- **Filetto da 1px in `--filetto` sotto la testata, sempre.** È l'unica cosa che le due
  testate divergenti avevano già in comune, ed era giusta.

### La fascia di apertura: blu dove si sceglie, chiara dove si legge

La barra qui sopra è una cosa, la fascia che apre la pagina sotto di lei (etichetta, titolo,
sottotitolo, bottoni, foto) è un'altra. Regola per tutti i siti di FYM, decisa da Samuele il
2026-09-29 sul sito della Scuola, dopo averla vista sulla pagina degli Special Coaching Lab e
provata per una sera su tre pagine.

- **Navy sulle pagine in cui chi arriva sceglie**: la home, le pagine di un prodotto o di un
  corso, gli indici (corsi, calendario), chi siamo, le risorse, le pagine rivolte a un
  pubblico preciso. Testo bianco, etichetta in `--su-scuro-tenue`, il trattino Dandelion
  sopra, bottone principale bianco con il testo Navy, secondario fantasma bianco.
- **Chiara (`--fondo-alt`) sulle pagine che si leggono o servono**: articoli, privacy, cookie,
  contatti, quiz, le pagine che si sbloccano con un modulo, quelle di riserva, le conferme.
- **Perché non tutte blu.** Se ogni pagina apre scura, il blu smette di dire «qui scegli» e
  diventa solo il colore del sito. Sopra un testo lungo o legale, poi, è una cornice pesante che
  non aggiunge niente.
- **Perché una regola e non una scelta di pagina.** Il 2026-09-28 le pagine blu erano 3 su 19:
  dalla home blu si passava alla pagina della Scuola grigia e sembravano due siti.
- **La parola in risalto, sul Navy, è Dandelion** (8,24:1), e ce n'è **al massimo una per
  titolo**, solo dove una parola lo merita: dove non c'è, il titolo resta tutto bianco. Sulla
  fascia chiara il risalto è Blu FYM, mai Dandelion, che lì non si legge (§ 2).
- **La barra resta chiara** anche sopra un'apertura blu (Samuele, 2026-09-28, dopo averla vista anche Navy:
  «si stacca meglio»).
- ⚠️ **Due fasce Navy non si toccano.** La fascia che segue un'apertura blu è chiara, anche se
  da sola era nata scura: il 2026-09-29 le cifre della Scuola, Navy come la testata, si
  fondevano con lei in un blocco unico, e sono passate a `--fondo-alt` con le cifre in Blu
  FYM, come la striscia dei numeri della home.
- ⚠️ **Sul Navy si perde tutto quello che aveva un colore suo.** Le briciole in
  `--inchiostro-tenue` sulla pagina di un corso diventavano invisibili: ogni pagina che si
  accende si ripassa con `misura-contrasto.mjs` prima di pubblicarla, non solo a occhio.

Sul sito della Scuola è la proprietà `scura` di `Testa.astro`.

### Il piede: la domanda su Sky, le colonne su Navy

Il piede ha due parti con due mestieri: **la domanda di chiusura** («Da dove vuoi partire?», la
frase in Fraunces, i due bottoni) e **le colonne** (marchio, dati societari, certificazioni,
link). Deciso da Samuele il 2026-10-05 sul sito della Scuola: tutto Navy, sul telefono, era un
blocco blu lunghissimo. Prima un filetto da 1px, poi una riga Sky da 8px da bordo a bordo:
separavano, ma il piede restava un blocco unico.

- **La domanda sta su una fascia Sky (`--superficie`)**, che scende nel Navy delle colonne
  con il gradino a 49° delle fasce (`.taglio`, § 5), in salita da sinistra a destra. Nessuna
  riga fra le due parti: lo stacco lo fanno il colore e il gradino.
- **Sulla fascia Sky tutto è Navy**: etichetta, frase, link (7,47:1). Il bottone pieno è
  **Navy col testo bianco**, il secondario fantasma Navy. Il giallo no: su Sky come forma non
  si stacca, e l'evidenza gialla resta nella barra (in alto sulla scrivania, in basso sul
  telefono).
- **La foto accanto alla domanda**, dove c'è, sta appesa al bordo destro e finisce col bordo
  basso sul gradino.
- **Perché Sky e non un altro fondo.** Il grigio chiaro (`--fondo-alt`) è stato provato e
  scartato: si fondeva con l'ultima fascia della pagina, che spesso è alternata. Il Blu FYM
  accanto al Navy non si usa (§ 2). Sky si stacca sia da una fascia chiara sia da una Navy, e
  fa da cuscinetto fra la fine della pagina e le colonne.
- **Dove la domanda non c'è** (le landing, che chiudono già con la loro azione) il piede è
  solo Navy, senza fascia Sky.

Sul sito della Scuola è `.piede__alto` in `Base.astro`.

## 8. Checklist, prima di mandare un link

Si somma a quella di Linus, non la sostituisce.

```
[ ] nessun testo in Sky sul chiaro; su Sky e su Dandelion si scrive solo in Navy
[ ] i due blu non si sovrappongono mai
[ ] tre caratteri, non quattro; Fraunces una volta sola in pagina
[ ] misure solo dalla scala del § 3; niente valori intermedi
[ ] spazi solo dalla scala dei 4; fasce a 96/160
[ ] ogni scatola (tabella, pannello, scheda, foto) sta ad almeno 24px dal testo sopra e sotto (§ 4)
[ ] il logo è l'SVG vero, e il marchio visibile supera davvero i 64px
[ ] sul fondo scuro c'è il file negativo, non quello blu ricolorato
[ ] il taglio, dove c'è, è a 49°
[ ] nessun testo sta sopra un fondo giallo, nemmeno coperto da un overlay (§ 7-ter)
[ ] le foto sono trattate tutte allo stesso modo
[ ] le icone sono a linea, tratto 1,8-2 px, punte tonde, e le schede-link hanno la freccia, non «Apri» (§ 7-quater)
[ ] nessun filetto sopra il primo elemento di una griglia, e le code delle schede della
    stessa riga stanno alla stessa altezza (§ 4, § 7-quater)
[ ] i bottoni dello stesso gruppo hanno la stessa larghezza e la stessa altezza (§ 7)
[ ] la testata: marchio con descrittore a sinistra, menu a destra, 80px di altezza, marchio
    da 44, menu esteso solo dai 1280 in su e panino sotto (§ 7-sexies)
[ ] se l'altezza della testata è cambiata, è cambiato anche lo scroll-padding-top
[ ] la fascia di apertura è Navy se la pagina fa scegliere, chiara se si legge, e la fascia sotto non è Navy anche lei (§ 7-sexies)
[ ] il piede: la domanda su Sky col gradino a 49°, le colonne su Navy, nessuna riga fra le due (§ 7-sexies)
[ ] misura-contrasto.mjs passato su tutti i fondi (non solo su quello di pagina)
[ ] ogni cosa che si apre o si chiude lo dichiara con DUE portatori, e il contrasto
    è stato misurato anche nello stato APERTO, non solo in quello iniziale (§ 7-bis)
```

---

## 9. Ancora da verificare

- **La fascia Sky del piede la deve ancora vedere Alessia.** È sullo staging della Scuola dal
  2026-10-05; è il primo uso di Sky come fondo grande, e il primo bottone principale Navy.
- **Il taglio a 49° è una proposta, non una regola approvata.** Il numero è misurato e
  giusto; che diventi *l'elemento che dà carattere* è una scelta di design che va vista a
  schermo su una fascia vera prima di essere dichiarata.
- **Il brand book porta la nota «Rivedere kerning» sul logotipo** (pagina 4). Se il
  kerning cambia, gli SVG cambiano: prima di incorporarli in una pagina, controllare che
  quelli nel Drive siano gli ultimi.
- **Il piede di un prodotto che porta solo il proprio nome in testata.** Chiusa la domanda di
  dove va il marchio (§ 7-sexies), resta da normare **come** FYM viene citato in fondo. Su
  coaching.it il piede porta la mattonella a 64px, «FYM s.r.l. · Formazione e Coaching
  Strategico», numero verde e mail, e funziona; ma è una pagina sola. Prima di farlo diventare
  una regola serve vederlo su un secondo prodotto, perché una citazione in fondo è una regola di
  ritmo come il fondo scuro, e il ritmo si vede solo su più pagine.
- **Manca ancora il TRATTAMENTO delle foto.** Adesso sappiamo *quali* usare (§ 6), ma non
  come si trattano: taglio, resa, temperatura. Finché non è scritto, ogni pagina lo
  reinventa — che è esattamente il problema che questa skill esiste per chiudere.
- **Il fondo scuro può essere usato due volte, non cinque.** Sulla pagina di
  coaching.it il Navy stava sulla fascia del metodo e su quella dei listini: due eventi
  distanti. **L'apertura blu del § 7-sexies non conta fra i due** (Samuele, 2026-09-30):
  coaching.it l'ha accesa e ha così tre fasce scure, l'apertura, il metodo e i listini,
  lontane fra loro e mai a contatto. La regola resta di ritmo: si guarda che nessuna fascia
  Navy ne tocchi un'altra e che il blu non diventi il colore della pagina. Il taglio a 49° invece resta su **una sola** — quella del metodo — altrimenti
  smette di essere una firma e diventa carta da parati. Da riconfermare alla seconda
  pagina: è una regola di ritmo, e il ritmo si vede solo su più pagine.
- **Il taglio a 49° è stato provato una volta sola.** Sulla hero di coaching.it del
  2026-08-25 regge su due tagli diversi (foto grande a 160px di salita, ritratti a 48px) e
  si riconosce. Serve vederlo su una seconda pagina prima di promuoverlo da proposta a
  regola.
