---
name: fym-siti
description: "Il modo di FYM di fare i siti (la skill si chiamava Linus, e Linus resta il suo personaggio): il metodo per costruire, migrare e rifare siti web che non sanno di standard, anche quando vivono dentro la piattaforma di qualcun altro (WordPress, LearnWorlds). Prima capisce il contesto e carica le istruzioni specifiche da tipi/, poi applica le regole globali: rilievo dell'originale prima di costruire, misurare invece di stimare, niente si cancella, pavimento di accessibilità 44px/14px, backup verificato, riservato vuol dire dietro autenticazione, CSS confinato quando si incorpora in una pagina altrui. Attiva su 'fym-siti', 'linus', 'facciamo un sito', 'rifacciamo il sito', 'migriamo il sito', 'una landing', 'pubblichiamo su WordPress', 'pubblichiamo su LearnWorlds'."
metadata:
  origine: "nata da Federico Vitiello (Alleniamo Imprese), versione atleti 1.0; dal 2026-09-22 è di FYM e si corregge solo qui"
---

# Linus: costruire, migrare e rifare siti

*Dal nome di Linus Torvalds: Linux e git. Uno che ha costruito cose destinate a durare e
a essere manutenute da altri, e che ha inventato lo strumento con cui non si perde niente.*

Questa skill si occupa del **metodo** e delle **regole di prodotto**: valgono con
qualsiasi stack. Usa gli strumenti che conosci (WordPress, un generatore di siti,
Next.js, HTML puro): il metodo non cambia. Ogni regola qui dentro è stata pagata su un
lavoro vero, quasi sempre con una correzione arrivata da un committente in carne e ossa.

Caso frequente: i **siti WordPress già esistenti dei clienti** non si migrano per forza,
spesso si evolvono da dentro. Per quelli c'è **`tipi/sito-web/wordpress.md`**, con le
trappole già pagate.

---

## Come si usa questa skill

Tre passaggi, in quest'ordine, **prima di scrivere codice**:

1. **Leggi il diario** `apprendimenti.md` (§ 0): è il TUO diario, e contiene le
   correzioni che hai già ricevuto.
2. **Carica `tipi/sito-web.md`** con Read, e se pubblichi dentro la piattaforma di
   qualcun altro anche il file della piattaforma (§ 1 qui sotto).
3. **Applica le regole globali** di questo file (§ 2-8), che valgono sempre.

Le regole globali e quelle di tipo **si sommano**: non sostituiscono, non annullano.

**Le parole della pagina non si scrivono qui.** I testi (titoli, blocchi, FAQ, bottoni, moduli,
conferme) si chiedono alla skill `fym-copy` e si incollano così come arrivano; se in costruzione un
testo non entra, si torna da lei invece di ritoccarlo. Deciso da Samuele il 2026-09-26: prima
questa skill scriveva i testi da sé, e sulle due landing di coach.fym.it del 2026-09-14 ne sono
stati corretti a mano 68.

---

## 0. Prima di cominciare: leggi il diario

Questa skill impara. Il diario è **`apprendimenti.md`**, in questa cartella:
**leggilo sempre prima di aprire un lavoro.** Le voci con stato *applicata* valgono come
regole aggiuntive a quelle scritte qui.

E **aggiornalo** quando succede qualcosa che insegna:

- il committente (o tu stesso, guardando il risultato) corregge una scelta grafica, di
  prodotto o di metodo;
- un lavoro viene giudicato sotto il livello, e si capisce perché;
- si scopre una trappola tecnica nuova (di quelle che costano ore e non si intuiscono
  dal sintomo);
- una regola scritta qui si rivela sbagliata o troppo rigida sul campo.

**Confidenza ALTA** (correzione esplicita, o cosa vista almeno tre volte) = si applica
subito e si aggiorna anche il corpo di questa skill o il file di tipo. **Confidenza
MEDIA/BASSA** = voce con stato *da-validare*, e si chiede conferma alla prima occasione.

**Dove va la cosa imparata:**

| Se riguarda | Va in |
|---|---|
| qualsiasi sito | il corpo di questo file |
| **una piattaforma altrui** (WordPress, LearnWorlds…) | il file in `tipi/sito-web/` |
| una trappola tecnica | la tabella § 7, con la causa vera |
| un episodio da ricordare | `apprendimenti.md`, sempre |

⚠️ Le cose di piattaforma **non vanno nel corpo di questo file**: qui resta solo ciò che
vale a prescindere da dove si pubblica. Se una regola comincia con il nome di un
prodotto, è nel posto sbagliato.

---

## 1. Instradamento

**Istruzione critica: usa Read per caricare `tipi/sito-web.md` PRIMA di rispondere o di
scrivere codice.** Non improvvisare: contiene le regole che rendono un sito fatto bene
invece che generico.

| Se il lavoro è… | Leggi |
|---|---|
| un **sito**: vetrina, landing, blog, catalogo, pagine di contenuto | `tipi/sito-web.md` |
| un sito **dentro un WordPress esistente** | anche `tipi/sito-web/wordpress.md` |
| un contenuto **dentro LearnWorlds** (o una piattaforma di corsi simile) | anche `tipi/sito-web/learnworlds.md` |
| qualcosa che si **pubblica su Hostinger** (hPanel, LiteSpeed), sito o cartella che sia | anche `tipi/sito-web/hostinger.md`, **prima di dire che un file non c'è** |
| una **piattaforma nuova** (Shopify, Wix, un CMS mai visto) | applica le regole globali, **e scrivi il file nuovo in `tipi/sito-web/` mentre la attraversi**: quello che impari diventa il punto di partenza della prossima volta |
| un tipo di prodotto che non è un sito (una web app con utenti, un gioco) | applica le regole globali, e scrivi il file nuovo in `tipi/` mentre lavori |

Nel dubbio, la domanda al committente è una: *«chi lo userà, e per farci cosa?»* La
risposta dice il tipo meglio di qualsiasi definizione.

---

## 2. La prima domanda: esiste già qualcosa?

| | Percorso |
|---|---|
| **C'è un originale** (si migra, si rifà, si replica) | § 3: **il rilievo** |
| **Non c'è** (foglio bianco) | § 4: **il sistema visivo dichiarato** |

Sbagliare questa domanda porta al peggior esito possibile: un rifacimento che il
committente non riconosce.

---

## 3. Se c'è un originale: il rilievo

**Si rileva prima di costruire.** È la regola che vale più di tutte le altre, e nasce da
un errore vero: a una prima ricostruzione erano stati letti i testi del sito, estratti i
colori, e rifatta una versione "pulita e moderna". Giudizio del committente:

> «MOLTO semplificata, appiattita, sa di standard. Ha perso personalità, senza guadagnare
> in funzionalità.»

Si era **tradotto** invece di **replicare**. I caratteri distintivi di un prodotto stanno
quasi sempre in cose che **un riassunto testuale non contiene**: un separatore grafico fra
i blocchi, un video sotto un velo colorato, il fallback quando quel video non parte, un
set di icone disegnate a mano. Sono esattamente quelle che, se mancano, fanno dire
«sa di standard».

### Che cosa si rileva, in ordine

| # | Cosa | Come |
|---|---|---|
| 1 | **Gli asset veri** | dal DOM: `img`, `video`, e ogni `background-image` calcolato. Si raccolgono TUTTI gli URL e si scaricano |
| 2 | **Gli stili calcolati** | `getComputedStyle` su titoli, corpo e bottoni: font, dimensione, peso, colore, interlinea, raggio, riempimento. Non si indovinano guardando lo schermo |
| 3 | **La struttura verticale** | posizione e altezza di ogni fascia, colore di fondo, cosa la separa dalla successiva |
| 4 | **Le parti nascoste** | area riservata, stati dopo un'azione: con un account di collaudo. È lì che di solito sta il prodotto vero |
| 5 | **Popup, moduli, stati** | aprendoli davvero: campi, etichette, testi di aiuto, ordine, messaggi di errore |
| 6 | **I collegamenti esterni** | cliccandoli e registrando dove portano |
| 7 | **Le larghezze estreme** | 320, 375, 390, 430, 768, 1280, 1920, 2560. I difetti stanno agli estremi |
| 8 | **I dati** | quanti record, che qualità, cosa è recuperabile, cosa è già andato perso |

`scripts/rileva.mjs` fa 1-3 e 7 in un comando. Gli altri richiedono di navigare.

### Come si fotografa

**Chrome headless (puppeteer-core), mai a occhio dalla propria finestra**: con headless
si sceglie la larghezza esatta e si ritaglia il singolo elemento, e le misure sono
ripetibili.

### Il segnale che il rilievo è fatto

Sai rispondere a: *quali sono le tre cose che, se le togliessi, il committente direbbe
"non è più la mia"?* Se non sai rispondere, non hai finito.

---

## 4. Se non c'è un originale: dichiarare prima, costruire dopo

Senza un modello da rispettare il rischio è lo stesso (un prodotto che «sa di standard»),
ma la causa è diversa: si comincia a scrivere codice senza aver deciso che aspetto avrà.

**Prima di aprire l'editor si mette per iscritto** (poche righe, non un documento):

- **chi lo userà davvero**, e in che condizioni (in piedi col telefono? in aula? un
  pubblico anziano?);
- **tre riferimenti visivi concreti**: nomi di prodotti o schermate, non aggettivi.
  «Pulito e moderno» non è un riferimento;
- **il sistema visivo**: due o tre colori con un ruolo dichiarato, una famiglia di
  caratteri con le dimensioni, il raggio degli angoli, come sono fatti i bottoni;
- **l'elemento che dà carattere**: una cosa sola, ricorrente e riconoscibile (un
  separatore, una texture, un modo di trattare le immagini, un'animazione di soglia).
  Senza, viene un tema qualunque.

Poi si prosegue dal § 5, con una differenza: il confronto non è con un originale ma **con
i riferimenti dichiarati**.

---

## 5. Costruire: blocco per blocco, misurando

- **Si ricompone nell'ordine dell'originale** (o dei riferimenti), blocco per blocco,
  con gli asset veri scaricati: non ricreati, non "ispirati a".
- **Prima di dichiarare fedele un blocco**: si ritaglia la stessa regione dai due
  prodotti alla stessa larghezza e si guardano vicine (`scripts/confronta.mjs`). Le
  differenze si vedono lì, mai a memoria.
- **Le migliorie si aggiungono solo se non tolgono niente.**
- **Le forme del brand si disegnano, non si evocano.** Usare un cerchio "come petalo" o
  un rettangolo "come fusto della lettera" produce forme generiche nei colori giusti: si
  prende il file vettoriale del marchio, si estraggono i tracciati veri e si disegnano
  quelli. Il controllo è guardare il risultato, non rileggere il codice: se dalla
  descrizione a parole sembra on-brand ma a schermo sono cerchi, sono cerchi.
- **Mai emoji come icone o decorazione.** Sono il marchio dei lavori generati con l'AI e
  lasciati lì: SVG, immagini o gli asset veri. Vale per interfacce, testi e documenti.

### Misurare, non stimare

Quasi tutti i difetti gravi sono **pochi pixel o una regola CSS sovrascritta**: non si
trovano leggendo il codice, si trovano misurando gli elementi nel browser.

Esempio reale: «i bottoni sono incollati al bordo» sembrava un problema di margini. Era
`.testata-riga { padding: 8px 0 }` che azzerava i `20px` laterali del contenitore: stessa
specificità, dichiarato dopo. Trenta secondi di misura contro mezz'ora di ipotesi.

`scripts/misura.mjs` controlla in un colpo: traboccamenti orizzontali, elementi fuori
schermo, bottoni sotto i 44px, testi sotto i 14px. Esce con codice 1 se trova qualcosa.

**«È solo una bozza» non è un'esenzione.** Se una pagina viene mostrata a qualcuno —
committente compreso — si misura **prima** di mandare il link. Misurato su un caso vero:
una bozza giudicata a occhio e dichiarata a posto nascondeva 45 difetti di geometria e
24 testi sotto la soglia di contrasto. Costa due minuti; non farlo significa che i
difetti li trova il committente al posto tuo.

#### Una sonda si valida prima di crederle

Una verifica che non può fallire, o che misura la cosa facile invece di quella per cui
esiste, promette una copertura che non c'è. Quattro modi di scriverne una, tutti pagati:

- **Una protezione si prova facendola scattare.** Se non riesci a farla scattare non è
  una protezione, è un commento.
- **Una sonda che ricopia la logica verifica se stessa.** Se riscrive a mano la stringa
  o la regola che il prodotto costruisce, prova la copia, non il prodotto: si importano
  le funzioni vere.
- **Un ramo saltato non è un ramo che passa.** Se qualcosa impedisce di eseguire le
  asserzioni (uno stato in cui la sonda non entra, una schermata mai visitata), la sonda
  lo DICHIARA e non chiude verde: un esito comodo senza asserzioni è una bugia.
- **Prima di credere a un verde, si dimostra che la sonda ha caricato la pagina giusta.**
  Una misura che gira su una pagina d'errore non trova mai niente, e dice "a posto" con
  la stessa faccia. Si controlla il codice di risposta **e** la presenza di una stringa
  che esiste solo nella pagina vera. Vale soprattutto quando l'esito è comodo: un verde
  al primo colpo è il momento di sospettare, non di esultare.
- **Il testo di una pagina non si cerca dove capita.** Nell'HTML servito da
  un'applicazione JavaScript non c'è quello che l'utente legge: cercandoci una parola si
  misura il bundle. E `innerText` restituisce il testo TRASFORMATO dal CSS: con
  `text-transform: uppercase` un confronto sensibile alle maiuscole fallisce su un testo
  che si legge benissimo. I confronti si fanno in minuscolo.

#### Si prova dove atterra il traffico, non dove atterri tu

Se una pagina riceve visite da un'inserzione o da un social, **la maggioranza di quelle
persone non apre Chrome né Safari**: resta nel browser in-app dell'app da cui ha
cliccato (Facebook, Instagram, LinkedIn, TikTok). È un ambiente diverso, con barre che
compaiono e spariscono in continuazione.

Caso misurato: un'animazione guidata dallo scroll saltava di scatto **solo** nel browser
in-app di Meta, da cui arrivavano 627 sessioni su 670: nessuno l'aveva mai vista perché
tutti provavano da Safari. La prova costa un minuto: aprire il link dall'app vera, con un
messaggio a se stessi, e scorrere avanti e indietro.

### Guardare costa: le immagini

Uno screenshot non scompare: resta nella conversazione e viene riletto a **ogni turno dopo**.
Misurato il 2026-10-06 sul Mac di Samuele (14 giorni, 6,2 milioni di token di immagini), le
sessioni più pesanti erano controlli e costruzioni di siti: 799 screenshot in un solo «check
go-live», 471 in una sessione sul sito della Scuola, 213 in una landing. Quindi, in quest'ordine:

1. **Prima si misura, poi si guarda.** Traboccamenti, contrasti, posizioni e altezze si leggono
   con `scripts/misura.mjs` o con `getBoundingClientRect()`: costano righe di testo. Lo screenshot
   serve per quello che i numeri non dicono (equilibrio, gerarchia, «sembra giusto?»).
2. **A metà scala e ritagliato.** Lo screenshot si fa a metà scala e sulla sola zona che interessa
   (`clip` sull'elemento, ricordando che è relativo al documento, vedi le trappole), non a pagina
   intera. Un'immagine a metà lato costa un quarto dei token. **Scala piena solo se bisogna
   leggere testo piccolo o misurare un dettaglio.**
3. **La verifica visiva lunga va a un subagente**, quando la sessione è già grande (oltre il 30%
   del contesto) o le immagini da guardare sono tante (da una decina in su). Il subagente non vede
   la conversazione: nella richiesta vanno i criteri di controllo (cosa deve essere vero, a quale
   larghezza, cosa non si deve rompere) e torna solo l'esito. Costa decine di migliaia di token
   d'impianto prima di guardare qualcosa, quindi sotto quelle condizioni si guarda da soli.

---

## 6. Le regole globali di prodotto

### 6.0 Chiavi e segreti

- Una chiave API o una password **non vive mai nel codice del client**: finirebbe nel
  bundle, ed è pubblica. Le chiamate ai servizi si fanno lato server.
- In locale i segreti stanno in un file d'ambiente **fuori da git** (`.env.local` o
  equivalente); in produzione nelle variabili d'ambiente della piattaforma.
- **Mai stampare un segreto** in log, messaggi, chat o commit.

### 6.1 Niente si cancella

In nessun prodotto deve esistere una funzione che distrugga il lavoro di qualcuno.
Questa regola nasce da un "reset" che aveva bruciato una stagione intera di dati veri.

| Invece di cancellare | Si fa |
|---|---|
| eliminare un periodo, un ciclo, un'edizione | si **chiude** (e se ne apre uno nuovo) |
| eliminare un contenuto | si **archivia**: sparisce dal prodotto, resta nel database |
| eliminare un commento, un messaggio | si **nasconde** |
| eliminare un record | si **sposta nel cestino**, da cui chi gestisce lo rimette a posto |

**Il cestino si fa con una tabella separata, non con una colonna `eliminato`.** Con la
colonna, ogni query esistente e futura deve ricordarsi di escludere le righe cancellate,
e prima o poi una se ne dimentica. Con la tabella separata le query restano corrette
senza toccarle.

### 6.2 Pavimento di accessibilità

Quando lo spazio non basta la tentazione è stringere: è la scelta sbagliata, e lo è di
più quanto meno è tecnologico il pubblico.

- Bottoni mai sotto **44×44px**, testo mai sotto **14px**.
- Se non ci sta: si tolgono voci secondarie, si accorciano le etichette, oppure **si
  accetta che vada a capo**. Meglio due righe che bottoni difficili da centrare.
- **Un bersaglio si allarga senza spostare quello che si vede**: `padding` per l'area
  toccabile e `margin` negativo uguale e contrario. L'icona resta al pixel dov'era,
  cresce solo la superficie che riceve il dito.
- ⚠️ **E si allarga col padding, mai con un'altezza minima, se dentro c'è del testo.** Un
  `min-height: 44px` regge finché il testo sta su una riga: il giorno che va a capo, il box
  resta 44 e il testo ne occupa 54, così **la voce dopo gli finisce sopra**. Col padding il
  box cresce insieme al testo. Visto il 2026-09-23 nel piede del sito della Scuola, dove una
  voce lunga dell'elenco copriva la successiva. Nessuna sonda lo trovava, perché non è un
  problema di contrasto né di bersaglio troppo piccolo: `misura.mjs` cerca i bersagli sotto i
  44px, non quelli pieni. Serve una sonda che confronti il fondo di una voce con il cielo di
  quella dopo, **nella stessa colonna** (in una griglia due voci affiancate hanno sempre i box
  sovrapposti in verticale, ed è il falso positivo in cui si cade scrivendola).
- Due bottoni affiancati che vanno a capo devono restare staccati: contenitore flex con
  `gap`, non `inline-flex` dentro un paragrafo.
- `prefers-reduced-motion` rispettato: chi lo ha impostato ha un motivo.
- **Il contrasto si misura, e si misura in TUTTI i temi e in TUTTI gli stati.** Soglie
  WCAG AA (4,5:1 il testo normale, 3:1 il grande) lette dai colori CALCOLATI, mai
  stimate. La trappola tipica: un fondo FISSATO inline con dentro colori che col tema
  si invertono: in un tema è perfetto, nell'altro il testo sparisce (misurato 1,4:1 su
  una card che in chiaro era perfetta). **Un fondo fissato pretende colori fissati.**
  Strumento incluso: `scripts/misura-contrasto.mjs`.
- `:focus-visible` sempre visibile, testi alternativi alle immagini.

### 6.3 Backup, e la prova che funziona

- Copia completa automatica, in due formati: uno per il ripristino, uno leggibile per
  ripescare una riga a mano.
- **Il conteggio dei record scritto a ogni esecuzione**: un backup che nessuno controlla
  non è un backup.
- **Riletto almeno una volta**: scaricare il file e contare cosa contiene. Finché non
  l'hai riletto, non sai se funziona.
- **Il ripristino non è un pulsante per chi gestisce**: riporterebbe tutto all'ultimo
  backup, cancellando quanto inserito nel frattempo. Per gli errori quotidiani c'è il
  cestino. Il backup è per le catastrofi.

### 6.4 Permessi verificati, non dichiarati

Ogni pagina e ogni API riservata va provata con un account senza privilegi: le pagine
devono rimandare via, le API rispondere 403, e senza accesso 401. Un controllo scritto
solo nell'interfaccia non è un controllo: è cosmesi.

**Riservato vuol dire dietro autenticazione, non "a un indirizzo che nessuno indovina".**
Un URL non pubblicizzato, un `noindex`, un'esclusione dalla sitemap tengono il contenuto
fuori dai motori di ricerca: non lo proteggono. Il link si inoltra, e da lì entra
chiunque. Se dentro ci sono dati di persone, si mette dietro il login: quasi ogni
piattaforma ha già il suo contenitore autenticato (area riservata, corso, gruppo).

**La verifica si fa da fuori, senza sessione**: una richiesta anonima (`curl`, o una
finestra senza cookie) che controlla il codice di risposta e che **nei sorgenti non
compaiano i dati**. Il pannello mostra le impostazioni, non il risultato.

**Un'anteprima protetta non è un prodotto dimezzato.** Le regole di prodotto (og image e
metadati, 404 completa, ancore, micro-interazioni) si applicano PER INTERO anche alle
pagine dietro password: il link protetto viaggia comunque nelle chat, e l'anteprima del
link è la prima impressione. Si omette SOLO ciò che farebbe trapelare contenuti
riservati, e **ogni omissione si dichiara nella consegna come scelta da validare**.

### 6.5 Se il prodotto manda email

Vale ovunque ci sia un invio, anche un solo modulo di contatto.

1. **Un solo punto d'uscita**: tutte le email passano da un'unica funzione, così il
   controllo non si può dimenticare aggiungendo una funzione nuova.
2. **Elenco di indirizzi ammessi** in variabile d'ambiente finché si è in collaudo.
   Verso chiunque altro l'invio è rifiutato **prima di toccare il database**.
3. **A prova di dimenticanza**: elenco vuoto = nessun invio verso nessuno.
4. Si toglie **solo** come passo esplicito e numerato della lista di pubblicazione.

⚠️ **Un blocco email non si verifica chiamando l'endpoint vero**: si spediscono email a
persone reali. È successo. Si verifica puntando l'elenco a un dominio inesistente
(dimostra che blocca) e poi togliendo la chiave del servizio di invio (dimostra che chi è
ammesso *supera* il controllo, fermandosi solo all'invio).

### 6.6 Misure e statistiche, se servono

Quasi tutto si ricava dai dati che il prodotto **ha già**: non serve tracciare nulla. Se
qualcosa va contato davvero, si somma **solo "quante volte"**, mai chi, con un elenco
chiuso di eventi lato server. Nessun servizio di analisi esterno, nessun cookie di
profilazione.

**L'eccezione sono i siti di FYM** (fym.it e sue cartelle, i siti delle linee, le landing
su sottodomini come coach.fym.it e week.fym.it; non i siti dei clienti): lì il tracker di
Delera c'è **sempre**, su ogni pagina (Samuele, 2026-09-24). Serve a vedere in Delera
chi è passato dalle pagine prima e dopo aver lasciato il contatto.

```html
<script src="https://go.fym.it/js/external-tracking.js" data-tracking-id="tk_ca097cd50ed8415a922121377ba8b27c"></script>
```

- **Il codice è uno solo**, quello del sottoaccount FYM, lo stesso nella testa di fym.it. Non
  si inventa e non si prende da un altro sito: se non torna, si rilegge dalla testa di
  www.fym.it.
- **Se la pagina ha una Content-Security-Policy**, va aperta a `https://go.fym.it` in
  `script-src` e a `https://backend.leadconnectorhq.com` in `connect-src`. Senza, il browser
  lo blocca e la pagina non dà nessun segno: l'unico posto dove si vede è la console.
- **Si verifica da fuori**, non guardando il codice: pagina aperta nel browser, nessun
  errore di CSP in console, e una richiesta a `backend.leadconnectorhq.com/external-tracking/events`
  che risponde 200.
- **Legge anche gli invii dei moduli.** Se il modulo scrive già in Delera per conto suo (API,
  Web App), si controlla con un invio di prova che la stessa persona non arrivi due volte e
  che i workflow non partano due volte.
- **Parte sempre dopo il consenso, su tutti i siti** (Samuele, 2026-09-24). Lo script non sta
  scritto nella testa: lo carica il banner quando la persona accetta, com'è fatto sul sito
  nuovo della Scuola (`src/components/Consenso.astro` e `src/lib/consenso.ts`, da riprendere
  da lì). Il tracker mette dei cookie (`lc_session_tk_…`), quindi sui siti di FYM il banner
  c'è sempre, anche dove § 7 di `tipi/sito-web.md` direbbe di farne a meno. La verifica si fa
  in due giri: senza accettare, **nessuna** richiesta a go.fym.it né a leadconnectorhq;
  dopo «Accetta», l'evento che risponde 200.

⚠️ Attenzione a **quale data si conta**: i record importati da una migrazione hanno tutti
la data di inserimento uguale al giorno della migrazione. Contare quella gonfia ogni
periodo. Si usa la data dell'evento.

### 6.7 La guida, e come si tiene vera

Serve a chiunque userà il prodotto: anche un sito ha una parte di amministrazione.
**Una guida con schermate vecchie insegna cose false**: è peggio che non averla.

- **Capitoli in ordine di frequenza d'uso reale**, non nell'ordine logico del programma.
- **Due o tre frasi e un'immagine** per capitolo. **Ritagli del singolo elemento**, non
  pagine intere.
- Indice cliccabile, "torna all'indice" a fine capitolo, foglio di stampa.
- Ogni capitolo dichiara la pagina di cui parla, e uno script rifà le schermate con un
  comando: così la guida si tiene vera senza riscriverla a mano.

### 6.8 La cura delle interazioni: sempre, per ogni committente

*"Come fai qualcosa, è come fai ogni cosa."*

- **Il tocco risponde SUBITO, sempre.** Tra il gesto e il primo segno visibile non deve
  passare più di un frame, o su telefono l'utente ritocca (doppi invii, doppie
  navigazioni). Tre livelli, tutti e tre: (1) **pressione**: reazione solo-CSS
  (`:active` con leggero squish); (2) **attesa**: appena l'azione parte, il controllo lo
  dice (bottone disabilitato con l'etichetta che cambia); (3) **destinazione**: la
  pagina cambia nell'istante del tocco anche se il server ci mette mezzo secondo
  (skeleton di caricamento). Il feedback non sostituisce la velocità, ma anche a 300ms
  un tocco senza segni è un tocco "non sentito".
- **Le micro-interazioni non sono un extra**: reazione al passaggio del mouse
  (sollevamento, ombra), pressione al click, comparse morbide, focus visibile. Si
  scrivono una volta nel CSS globale e valgono ovunque.
- **L'intensità si dosa, la cura no.** Contesto artistico: l'effetto può essere audace.
  Contesto sobrio (studio, azienda): stessi meccanismi, resa discreta. Quello che non
  cambia mai è che ci sia.
- **Ogni pagina merita almeno un paio di momenti speciali**, anche sottili: animazioni
  legate allo scrolling, elementi che si compongono. Repertorio in `tipi/sito-web.md` § 8.
- **Un bivio non si spiega: si elimina.** Le interfacce devono portare all'azione
  desiderata intuitivamente, senza istruzioni (che nessuno legge, e affollano la
  pagina). Se due strade possono confondere: (1) si fa in modo che qualunque porta porti
  allo stesso risultato; (2) si usa il contenuto o il gesto come segnale per instradare
  da soli; (3) si lascia insegnare alla metafora. Sintomo: se stai scrivendo una riga di
  aiuto accanto a un controllo, il disegno ha un bivio da togliere, non un testo da
  aggiungere.
- **Ogni consegna PROPONE al committente almeno una cosa viva.** Non è un extra da
  offrire se avanza tempo: è una voce della consegna, e se manca la consegna è
  incompleta. Un sito che si limita a essere corretto viene ricordato come un
  dépliant. Tre specie, si sceglie quella che il progetto chiede:
  - **La prova della promessa** (`pattern/prova-della-promessa.md`): in mezzo alla
    pagina, dove il committente promette la cosa meno credibile, si invita il
    visitatore a smentirla e la promessa vince. Esemplare: «nessun alimento vietato»,
    e ogni × che provi a togliere un cibo diventa una spunta.
  - **L'easter egg funzionale** (`pattern/easter-egg-funzionale.md`): nascosto, fa
    VIVERE il mestiere del committente. Vuole una frase-ponte fra gioco e mestiere.
  - **Il momento allo scroll** (repertorio in `tipi/sito-web.md` § 8): composizione,
    aggancio e rilascio, scrollytelling. Il più economico dei tre.

  **La prova del nove è una sola, e vale per tutte e tre: togli il messaggio, e se
  resta un gioco che funziona lo stesso, è decorazione e non va fatto.** È anche la
  linea che separa questo dalla gamification a caso: niente punti, badge o barrette
  attaccati a un sito che non ne ha bisogno. Se per un progetto non si trova niente
  che regga quella prova, si dice al committente che non si è trovato, invece di
  proporre un premio finto.
- **Limiti fissi**: tutto dentro `prefers-reduced-motion`, solo transform e opacity,
  stato finale corretto anche senza JavaScript, mai a scapito del pavimento (§ 6.2).

### 6.9 Se l'interfaccia vive dentro una pagina altrui

Capita spesso: un blocco, un configuratore o una dashboard da incollare dentro il CMS del
committente (WordPress, LearnWorlds, Webflow). Non è un sito tuo, è un ospite in casa
d'altri, e valgono tre regole.

**Il CSS va confinato in un contenitore.** Un documento completo incollato lì dentro
porta con sé le sue regole su `body`, `html` e `*`, che riscrivono il tema dell'intera
pagina ospite. Si racchiude tutto in un `<div id="...">` e si riscrivono i selettori
sotto quel prefisso. La verifica è semplice: la pagina ospite deve conservare il **suo**
font e il **suo** sfondo.

⚠️ **Le regole del contenitore vanno in coda al foglio, non in testa.** Quel
`body{margin:0}` riscritto sul contenitore ha la stessa specificità: vince l'ultima
dichiarata. Scritte in testa, spariscono in silenzio.

**Non si può dare per scontato lo spazio in cui si atterra.** Il CMS può mettere il
blocco in un iframe, in un contenitore ad altezza fissa, in un flex che lo centra. Prima
di dichiarare fatto, si guarda il risultato **nel posto vero**, non nell'anteprima.

**Lo stesso file deve reggere fuori da lì.** Le correzioni per l'ospite si scelgono in
modo che, dove quell'ospite non esiste, siano inerti. E se il file va spedito,
**incorpora anche i font**.

### 6.10 Le operazioni irreversibili si provano su oggetti usa e getta

Pubblicare un sito, spedire una campagna, migrare dei dati: operazioni che si fanno una
volta e non hanno un "annulla".

- **Si prova su oggetti creati apposta**: una pagina in bozza, un template temporaneo, un
  destinatario finto. Si esercitano le **chiamate vere** e poi si cestina tutto.
- **La prova a secco esegue tutte le letture e le trasformazioni, e salta solo le
  scritture.** Non è una simulazione: legge i dati veri, costruisce il risultato vero, lo
  verifica, e non lo scrive. È lì che si trovano i guasti.
- **Ogni passaggio si rifiuta di procedere se trova qualcosa fuori posto.** Fermarsi a
  metà con una diagnosi chiara è meglio che completare su un sistema mezzo pubblicato.
- **Copia di sicurezza dentro il primo passaggio**, non in una procedura a parte.
- **Il "fatto" finale si verifica da fuori**, senza sessione e con cache-buster, cercando
  un segno che esiste **solo** nella versione nuova.

### 6.11 Un'interfaccia guidata da uno stato remoto deve potersi chiudere a mano

Una schermata che si apre da sola perché "sta succedendo qualcosa" (un avanzamento, un
caricamento) va sempre chiusa da un comando visibile, **in ogni stato**. La cosa che
dovrebbe farla avanzare può non arrivare mai: il processo non parte, la rete cade. Se la
chiusura compare solo alla fine, la persona resta intrappolata.

Corollario: **lo stato di attesa non si traveste da stato di avanzamento.** Se non è
ancora partito niente, si scrive che si sta aspettando.

### 6.12 Le pagine a viewport fisso: il contenuto principale ha la parte del leone

Una pagina "da app" (una chat, una console) che non fa scorrere il documento ma i suoi
pannelli interni è un gioco a somma zero: **ogni blocco fisso è spazio tolto al contenuto
per cui la pagina esiste**. Il flex non avvisa: comprime il pannello elastico fino a zero
righe per far posto a testate, filtri e note.

- **Il contenuto principale si MISURA: almeno metà del viewport**, e col viewport VERO
  (Safari su iPhone lascia ~660px di 844).
- **Ogni accessorio o vive dentro l'area scrollabile, o si ritira quando non serve.**
- **Su telefono la testata è UNA riga**, come in ogni app di messaggi.
- **Il campo di scrittura parte a una riga e si espande al tocco**, e col testo dentro
  resta espanso anche al blur: senza, il bersaglio scappa sotto il dito.
- **min-height di cintura** sul pannello principale, e **la misura si RIFÀ quando
  compare un accessorio nuovo**: le sonde misurano le PROPORZIONI, non la presenza.

### 6.13 Ogni pagina si apre dall'inizio

In un sito a navigazione client-side **il documento cambia sotto una finestra che è
rimasta dov'era**: se la pagina nuova è più corta, si atterra a metà pagina. Il difetto
si vede solo verso pagine più corte, ed è per questo che resta nascosto a lungo.

- La cura sta **nel layout radice, una volta sola**: al cambio di percorso si torna in
  cima.
- **Due eccezioni**: il tasto indietro (la posizione si ripristina: si riconosce da
  `popstate`) e gli indirizzi con un'ancora.
- Si misura con una sonda che stampa `scrollY` dopo la navigazione, non a occhio.

### 6.14 Quello che non è dichiarato non è configurato

Una cosa che funziona **perché nessuno le passa un'impostazione** non è configurata: è
configurata dal caso, e il caso cambia senza avvisare.

- **Ogni legatura si dichiara**, anche quando dichiararla non cambia niente oggi.
- **In un posto solo.** Se la stessa scelta è riscritta in più punti, prima o poi due
  punti diranno cose diverse.
- **La ricaduta sul default non è mai muta**: quando qualcosa non si può leggere e si
  torna al default, si lascia una traccia in un posto che qualcuno guarda.

### 6.15 Un'azione che esiste ma non è ancora collegata

Capita spesso: il bottone va progettato e misurato adesso, ma quello che sta dietro (il
link di pagamento, il modulo, l'integrazione) arriva dopo, e lo crea un'altra persona.
Toglierlo dalla pagina finché non arriva vuol dire disegnare un'altra pagina.

- **Il bottone si mostra**, con l'etichetta vera che avrà.
- **Ma non è un link finto.** Mai `<a href="#">` né un `<a>` senza `href`: il primo porta
  da nessuna parte in silenzio, il secondo esce dal giro dei tasti. È un `<button>`, che
  cliccato **dice cosa fare invece** e offre il ripiego più vicino (il modulo, la pagina
  del prodotto, il telefono).
- **La diagnosi si separa dal messaggio.** Chi visita legge cosa può fare; il dettaglio
  che serve a noi (quale chiave manca, in quale file) si mostra solo in locale e sullo
  staging, riconosciuti dall'hostname.
- **Chi decide sta in un posto solo**: un componente, non una condizione ripetuta in ogni
  pagina. Quando i link arrivano, si spegne di conseguenza da sé.

### 6.16 Il modulo di un'altra piattaforma si apre DENTRO la pagina

Iscrizioni, pagamenti, prenotazioni, candidature: quasi sempre chi le raccoglie è un'altra
piattaforma (Delera/GoHighLevel, Calendly, Typeform, Stripe). Il link che porta là fuori fa
perdere il contesto, la via del ritorno e la misura, tutti e tre insieme: chi cambia idea
non torna, e chi torna col tasto indietro ricomincia dalla cima.

**Si apre in un pannello che entra dal lato**, foglio laterale sulla scrivania e a tutto
schermo sul telefono, con in cima il riepilogo scritto da noi (cosa, quando, quanto) e sotto
l'iframe del modulo, creato all'apertura e distrutto alla chiusura. Fatto per gli Special
Coaching Lab della Scuola (2026-09-25) e per la chiamata di orientamento (2026-09-28).

Le regole intere, con le cose che sembrano dettagli e non lo sono (il `load` dell'iframe non
prova che il modulo giri; la pagina di ringraziamento si apre dentro l'iframe e va fatta
parlare con la pagina che la contiene; il fuoco che dopo un «indietro» Chrome rimette sul
body), stanno in `pattern/modulo-esterno-nel-pannello.md`. Si legge **prima** di collegare
un modulo esterno, non dopo.

### 6.17 I numeri ufficiali di FYM non si scrivono nelle pagine (solo siti di FYM)

Casi l'anno, ore di pratica, archivio, percentuali, recensioni, certificazioni, rate: i
numeri che FYM dichiara hanno una fonte sola, la scheda «Numeri FYM» del listino (la regola
è in `commerciale/tone-of-voice.md`, «I numeri non si scrivono a mano»). Un sito li ricopia,
e una copia invecchia senza avvisare: il 2026-10-02 la landing Federmanager aveva sei numeri
scritti a mano nel testo, e il sito della Scuola un file con una forma diversa dal foglio.

Perciò ogni mattina un'automazione confronta quello che ogni sito mostra con la scheda, e
scrive a info@ quando non coincide, con un bottone che aggiorna il sito
(`automazioni/numeri-siti/numeri-siti.md`). Il sito deve darle qualcosa da leggere:

- **Un file solo**, `dati/numeri-fym.json`, con le chiavi e i valori della scheda, così come
  sono scritti. Solo quelli che il sito mostra; zero numeri si dichiara con un elenco vuoto.
- **In pagina un numero entra da un componente solo**, che lo marca con `data-numero`.
  L'elemento contiene il numero e nient'altro. Dove il numero ha già un elemento tutto suo
  basta l'attributo su quello.
- **Il build pubblica `/numeri.json`** con i numeri che le pagine mostrano davvero, e si
  ferma se una pagina ne mostra uno diverso dal file dei dati.
- **Il sito ha il suo `numeri-aggiorna.php`** ed è **iscritto nell'elenco dell'automazione**.
  Un sito non iscritto non lo controlla nessuno, e nessuno se ne accorge.
- **Un numero che nella scheda non c'è non è ufficiale**: prima va lì, con fonte, data e chi
  l'ha deciso. Lo stesso per una forma diversa («cinque» invece di «5»): si cambia la frase
  o si chiede una chiave nuova.
- **Un pezzo del valore si ricava nel codice solo dove il sito si ricostruisce dal file dei
  dati** (il sito della Scuola: «95 su 100» da «95%», il voto delle recensioni senza il
  conteggio). La chiave si dichiara in `non_marcati`, e il codice che ricava ferma il build
  se la forma della scheda cambia. Dove il bottone riscrive le pagine già costruite (le
  landing su fym.it) non si ricava mai: un numero non marcato lì non lo aggiorna nessuno.
- **Il foglio non si rilegge durante il build**, ma a mano o quando si pubblica: un numero
  cambiato arriva online solo dopo che una persona lo ha visto.

Come si monta, pezzo per pezzo, e come si prova facendolo scattare: `pattern/numeri-fym.md`.
Si legge **prima** di mettere il primo numero in pagina. Deciso da Samuele il 2026-10-02.

---

## 7. Le trappole tecniche già pagate

Elenco che cresce: ogni trappola nuova va aggiunta qui con la **causa vera**, perché
nessuna è intuibile dal sintomo.

| Sintomo | Causa vera |
|---|---|
| Dopo un rebrand, gli utenti hanno perso record e stato | il rebrand cambia i TESTI rivolti alle persone, non gli identificatori: chiavi localStorage, mittente email, slug e nomi di tabella restano col nome vecchio, sono infrastruttura. Rinominarli azzera i record e sgancia i webhook |
| Un asset aggiornato (og, icona, video) resta vecchio per ore nonostante la pubblicazione | è servito con `Cache-Control: immutable` o da un CDN che non rivalida: sovrascrivere lo stesso nome lascia la copia vecchia negli edge. Si cambia NOME al file e si aggiorna la src, sempre |
| Il ripiego di un modulo incorporato non parte mai, nemmeno quando il modulo è bloccato | ci si è legati al `load` dell'iframe: Chrome lo emette **anche** quando l'incorporamento è stato rifiutato (`X-Frame-Options`, CSP). Vale solo un segnale che può arrivare da dentro, cioè un `message` con l'origine giusta. Vedi `pattern/modulo-esterno-nel-pannello.md` |
| SVG decorativi che non si stirano e restano "monconi" | esportati con `preserveAspectRatio="xMidYMid meet"`. Va portato a `"none"` **dentro il file**. ⚠️ Ma `"none"` scala il tratto in modo **anisotropo**: una curva quasi orizzontale stirata da 340 a 1920px si assottiglia fino a sparire. Serve anche `vector-effect="non-scaling-stroke"` |
| Un blocco che azzera i margini del contenitore | due classi sullo stesso elemento con la stessa specificità: vince l'ultima dichiarata. Usare `padding-top/bottom`, non `padding: X 0` |
| Bottoni che si ammucchiano a sinistra andando a capo | manca `flex: 1 1 auto` sul contenitore che deve prendersi lo spazio residuo |
| Campi di testo minuscoli e senza stile | `input[type='text']` **non** intercetta gli input senza attributo `type`: serve anche `input:not([type])` |
| La pagina scorre di lato | una parola lunghissima (di solito un indirizzo web) o un residuo di markup. Accorciare l'etichetta + `overflow-wrap` come rete |
| La pagina scorre di lato per colpa di una tabella, che però è già dentro un contenitore con `overflow-x:auto` | il contenitore è figlio di un **grid** (o di un flex), e un figlio di grid ha `min-width:auto`: **si rifiuta di scendere sotto la larghezza del proprio contenuto**, quindi l'`overflow` non entra mai in funzione e a spingere è il `min-width` della tabella. Cura: `min-width:0` sui figli del grid. Misurato: 478px di larghezza su un viewport da 320 |
| Una finestra modale che eredita grassetto e allineamento | è annidata dentro un titolo. Va portata fuori con un portale |
| Un controllo di sicurezza che non protegge niente e non lo dice | il driver del database restituisce gli id numerici come **stringhe**: `id === altroId` è sempre falso e la rete non scatta mai. Si converte prima di confrontare, e la rete si prova **facendola scattare** |
| Pagine che rispondono 500 con errori incomprensibili | è stato lanciato `npm install` col server acceso: la build è corrotta. Si ricostruisce da zero |
| Una correzione "pubblicata" che non si vede | la condizione d'attesa della pubblicazione combaciava anche col contenuto vecchio. Cercare qualcosa che esiste **solo** nella versione nuova |
| Un collegamento interno che atterra col titolo nascosto dietro la barra | l'ancora è il contenitore che porta l'`id`, non il titolo. Meglio `scroll-padding-top` sull'elemento che scorre; e l'altezza della barra **si misura**, non si stima |
| Un collegamento interno che atterra su tutt'altro punto | la pagina si allunga **dopo** il salto: immagini senza `width`/`height` e caratteri chiamati da fuori. Si dichiarano le misure e si ospita il carattere in casa |
| Un `<head>` scritto a mano e il telefono impagina a 980px | il `<head>` personalizzato sopprime il meta viewport del framework |
| Uno screenshot headless "dimostra" un overflow che non esiste | `chrome --screenshot` non applica il meta viewport: impagina a 980px. La misura vera si fa contando **quanti** elementi superano `innerWidth` |
| Un elemento nasce slavato o fuori posto, e si sistema al primo tocco | il valore che lo governa lo scrive solo un gestore di evento (`scroll`, `resize`), e **se sei già nella posizione giusta quell'evento non scatta mai**. Va scritto anche al montaggio |
| Un pavimento di 44px che non si riesce a rispettare | è aritmetica: N bersagli affiancati non ci stanno se N × 44 supera la larghezza. Non si cerca il compromesso, **si cambia elemento** |
| Un widget da scroll che non si aggiorna mai in collaudo, e in produzione funziona | la strozzatura usa `requestAnimationFrame`, che in una scheda non in primo piano non scatta. Strozzatura a tempo dentro il gestore. E in scheda automatizzata **lo scorrimento programmato non emette l'evento `scroll`**: si innesca a mano |
| Un velo o un modale che non copre lo schermo | `position:fixed` non si aggancia alla finestra dentro un antenato con `transform`. Gli elementi a schermo intero si spostano su `document.body` |
| Un elemento con l'attributo `hidden` che resta visibile | `[hidden]` perde contro un `display` esplicito: ogni classe con `display:flex` vuole la sua regola `[hidden]{display:none}` |
| Un `<a>` che non rispetta il pavimento dei 44px | `min-height` non si applica a un elemento inline: serve `display:inline-flex` |
| Un materiale che il committente rimanda "perché manca" ed è già online | prima di pubblicare qualsiasi cosa arrivi da un committente, **cercarla nel sito**: pubblicarla due volte è peggio che non averla |
| «L'avevate messo e poi l'avete tolto» | prima di correggere, **guardare la cronologia** (le revisioni del CMS, `git log`): dice se quel testo è mai esistito. Si risponde con il fatto **e** si fa la cosa che serviva |
| Un testo minuscolo dentro un componente cliccabile, col CSS che dice altro | il testo sta in un `<button>`, che **non eredita il font**: `button,input,select,textarea{font:inherit}` nel reset, sempre |
| La pagina scorre di lato e chi la spinge è invisibile | un testo per i soli lettori di schermo (`position:absolute`, 1×1) messo dentro una scatola che scorre di lato: senza un antenato **posizionato** si aggancia alla pagina, e la pagina si allarga fino a dove sta lui. Cura: `position:relative` sulla cella che lo contiene. Misurato: 513px su un viewport da 320, per un elemento da un pixel |
| Una regola scritta negli stili della pagina che non si applica a un elemento creato dal JavaScript | gli stili confinati per componente (Astro, Vue, Svelte) aggiungono al selettore un attributo che il framework scrive nell'HTML: quello che nasce a runtime non ce l'ha, e la regola non lo prende mai, in silenzio. Gli stili di ciò che crea il JavaScript stanno nel **CSS globale** |
| La pagina scorre di lato, ma solo dove c'è un elemento ruotato | la rotazione allarga l'**elemento** oltre il viewport: va racchiuso in una zona con `overflow:clip` |
| Bordi di un campo "mangiati" agli angoli | un `clip-path` decorativo taglia tutto il box, **bordo compreso**: niente clip-path sugli elementi con bordo sottile |
| Una spunta che "non si spunta": il click registra ma a schermo non cambia niente | i colori di riposo stavano in `style={{...}}` inline, che vince su **qualsiasi** classe di stato: il segno di spunta bianco restava su fondo bianco. Un colore che uno stato deve poter sovrascrivere **non si scrive mai inline** |
| In diagnosi su un controllo con stati, letture che si contraddicono | `getComputedStyle` subito dopo il click cade **dentro la transizione**; dopo un re-render i riferimenti DOM in mano puntano a **nodi staccati**. Verdetto solo da Chrome vero, dopo la transizione, rifacendo la query dal DOM |
| Ogni pagina dinamica lenta (300-900ms) anche a server caldo | la funzione serverless gira in una region lontana dal database: ogni query è un giro transoceanico. La region va inchiodata accanto al database |
| Un contrasto misurato che dà numeri assurdi su un colore composto | `color-mix()` esce da `getComputedStyle` come `color(srgb 0.92 …)` (valori 0-1): una sonda che divide per 255 legge quasi-nero. Si gestiscono ENTRAMBE le forme |
| Testo bianco sul colore d'azione del brand che non passa AA | il bianco sul colore caldo sta spesso a 3,4:1: su un bottone può essere una scelta di brand dichiarata, su un'informazione da leggere è un difetto. Cura: il colore del brand come TESTO su un fondo appena tinto (`color-mix(in srgb, var(--azione) 16%, var(--fondo))`) |
| Un poster su un video di sfondo peggiora la leggibilità | il poster è lo stato **permanente** di chi ha reduced-motion o rete lenta: il testo sopra va misurato **sul poster**, e il fotogramma si sceglie fra i più scuri |
| Una misura di contrasto che dà **esattamente 1:1** su un testo che a schermo si legge benissimo | la sonda risale **solo gli antenati** per trovare il fondo: un hero, uno slider o un velo stanno *dietro*, non *sopra*, quindi non sono antenati di nessuno. Il giro arriva al body, legge bianco, conclude bianco-su-bianco. `elementsFromPoint` NON salva: salta gli elementi con `pointer-events:none`, cioè proprio quelli. Cura vera: campionare i pixel di uno scatto. Nel frattempo, l'1:1 non si conta fra i difetti finché non lo si guarda |
| Una sonda che aspetta `networkidle` muore in timeout e non misura niente | su un sito pesante o con polling la rete non si ferma **mai**. Serve un ripiego (`domcontentloaded` più attesa fissa) **dichiarato a schermo**: ripiegare in silenzio fa sembrare uguali due misure fatte in condizioni diverse |
| Un ritaglio di `page.screenshot({clip})` mostra sempre la cima della pagina, qualunque elemento tu chieda | il `clip` è relativo al **documento**, non alla finestra: a `getBoundingClientRect()` vanno sommati `window.scrollX/scrollY`. Sintomo tipico: una misura di contrasto con fondo e testo **scambiati** |
| Una sonda dice che un elemento animato dallo scroll resta "vuoto a fine corsa" | il salto secco `scrollTo(molto in basso)` atterra corto finché il documento non ha raggiunto la sua altezza finale (immagini differite). Si scorre **a tappe**, rileggendo `scrollY` fra una e l'altra |
| Una misura di contrasto sceglie come "testo" un colore che non è il testo | l'euristica "il colore più lontano dal fondo" prende il bianco della pagina che circonda l'elemento. Su bersagli piccoli si ritaglia stretto, o si leggono le **due coppie dichiarate** dopo aver confermato l'accoppiata a occhio |
| Lo stile letto subito dopo aver forzato un attributo è quello vecchio | il ricalcolo non è ancora avvenuto. Uno stato si porta al suo valore **compiendo il gesto** (un clic), non scrivendo `dataset`, e si legge dopo un attimo |
| Le righe di più schede affiancate non si allineano fra loro | una griglia allinea solo dentro se stessa: `grid-template-rows` sul contenitore e `grid-template-rows:subgrid` sulle schede (con `grid-row:span N`) |
| Una pagina aperta con doppio clic ripiega sul carattere di sistema | sul protocollo `file://` i font esterni sono bloccati. Se il file deve reggere anche fuori dal server, il woff2 si incorpora in base64 nel CSS |
| Online tutta la pagina esce in corsivo, e in locale no | i woff2 presi dalla cartella dell'ospite (in WordPress `uploads/elementor/google-fonts/fonts/`) hanno nomi di Google che **non dicono lo stile**: si erano presi il 400 e il 600 *italic*. In locale non si vede perché il carattere non c'è e si ripiega su quello di sistema. Si legge lo stile di ogni file dal CSS dell'ospite (`google-fonts/css/<famiglia>.css`, blocco `U+0000-00FF`), e online si controlla `document.fonts`: deve dire `normal`. Misurato su negoziazione.eu il 2026-09-25 |
| Un controllo si deforma (il pallino di una risposta alto e largo 4px, il testo in grassetto) solo in una parte del modulo | una regola generica del contenitore vince su quella del componente: `.campo label{display:block;font-weight:600}` (specificità 0,1,1) batte `.opzione{display:flex}` (0,1,0) quando le risposte stanno dentro un `.campo`. Il componente riusato dentro un contenitore vuole la sua regola col prefisso del contenitore, e la sonda misura anche **la forma** dei controlli (un pallino è largo quanto è alto), non solo i 44px |
| Il manuale del progetto dice una cosa, la misura un'altra | **il manuale è la cosa più vecchia del progetto**: quando una decisione viene dal manuale si ricontrolla sul prodotto prima di costruirci sopra, e la riga sbagliata si riscrive subito |
| Le immagini in fondo a una pagina lunga risultano rotte a volte sì e a volte no | la pagina dichiara `html{scroll-behavior:smooth}`, quindi un ciclo `scrollTo(0,y)` a tappe lancia N **animazioni che si interrompono a vicenda**: misurato, dopo il ciclo la pagina era a **1049px su 11785**. Le `loading="lazy"` non entrano mai in vista. Cura: `behavior:'instant'`, `scrollY` riletto a ogni tappa, **controllo di essere arrivati in fondo** che fa fallire la sonda se non ci arriva, e attesa degli eventi `load`/`error` invece che a tempo |
| Una sonda sui bersagli riporta decine di elementi "alti 1px" | sta misurando gli `input` nativi nascosti dietro le label stilizzate (chip, spunte, radio). Il bersaglio vero è la `label`. Trenta falsi positivi rendono la sonda inutile: si misura l'elemento che il dito tocca |
| Una sonda passa verde su una condizione che il progetto ha appena violato | il messaggio dell'asserzione è più ampio della condizione: «niente `<picture>`/WebP» che verifica solo `!/<picture>/`. **L'etichetta dice esattamente quello che la condizione controlla**, o è una bugia che nessuno rilegge |
| Tutti gli accenti sono `Ã¨` nell'anteprima locale, ma il file è a posto | un `python3 -m http.server` serve `Content-Type: text/html` **senza charset**, e il browser ripiega su una codifica legacy. Non è un difetto della pagina: si verifica che i byte siano UTF-8 validi prima di "correggere" qualcosa |
| Una foto scontornata pesa quasi un mega in PNG | il PNG con alpha di una **fotografia** non si comprime: quello leggero di prima era a tavolozza indicizzata (256 colori), che regge solo su soggetti a pochi colori. Misurato sullo stesso ritaglio: PNG 896 KB, WebP q90 **103 KB**. Un `<img src="...webp">` singolo (non `<picture>`) lo aprono tutti i browser |
| Un numero formattato bene in sviluppo e senza separatore delle migliaia altrove | `toLocaleString("it-IT")` dipende dai dati di localizzazione del browser: dove non ci sono, 6480 resta "6480" invece di "6.480", in silenzio. Se il formato conta, si scrive a mano |
| Una pagina PHP che legge un CSV si riempie di avvisi in grassetto, e una sonda riporta centinaia di elementi fuori schermo | da PHP 8.4 `fgetcsv`/`fputcsv` senza il parametro `$escape` stampano un avviso di deprecazione **a ogni riga**. Dentro un endpoint JSON l'avviso finisce nella risposta e la rompe in silenzio il giorno dell'aggiornamento. Si passano sempre tutti i parametri: `fgetcsv($f, 0, ',', '"', '')` |
| Un marchio SVG che a schermo è minuscolo, e ingrandirlo non basta perché arriva a sfondare il layout prima di leggersi | il file ha **aria dentro il `viewBox`**: `height` è l'altezza della scatola, non del tracciato. Misurato su un logotipo vero: il tracciato occupava il 33% dell'altezza e il 55% della larghezza, quindi `height:26px` rendeva un marchio alto **8,7px**. Si legge il rettangolo con `getBBox()` e si riscrive il `viewBox` sui limiti veri. Lo stesso file è di solito anche nella favicon e nell'og: il difetto è in tutti e tre |
| Una foto nuova sostituita "a occhio" cambia l'impaginato | l'inquadratura si **misura**: rilevamento volti sulla vecchia (centro del volto in larghezza, cima del volto in altezza, volto/altezza del fotogramma) e si ricostruisce la stessa geometria sulla nuova, aggiungendo margini trasparenti dove la posa non basta |
| Un blocco di testo si impagina in colonne sovrapposte, e la sonda di geometria tace | una **classe con lo stesso nome** usata da due componenti (la pastiglia numerata delle opzioni e il blocco della lettera d'apertura, entrambi `.lettera`): il secondo eredita `inline-flex` e larghezza fissa. La sonda taceva perché misurava solo il bordo **destro**: un blocco che sborda a sinistra o si accavalla non fa scrollWidth. Si misura `r.left < -1` e l'intersezione fra fratelli, e prima di riusare un nome di classe copiato da un altro progetto si fa `grep` |

---

## 8. Il metodo di consegna

- **Fasi con rapporto scritto**, non solo a chat: ogni fase chiusa produce un documento
  nel repo con cosa è stato fatto, **le verifiche fatte** e i numeri visti. La chat si
  perde, il documento resta.
- **Ogni affermazione va verificata prima di dirla.** "Funziona" senza una prova è
  un'ipotesi. Meglio: *"provato con X, risultato Y"*.
- **Le prove non devono produrre effetti nel mondo reale.** Prima di provare qualcosa,
  chiedersi: *se funziona, cosa succede fuori da qui?* Se una prova tocca una persona
  reale (un invio, una cancellazione, un pagamento), si trova un altro modo. Vale anche
  per i servizi con un tetto di chiamate: la prova stessa può esaurire il tetto.
- **Un file di istruzioni operative** (`CLAUDE.md`) nella cartella del progetto, con le
  regole non negoziabili, il metodo, e **la tabella delle correzioni con la causa vera**.
- **Molte correzioni insieme su un prodotto vivo si partizionano per RISORSA, non per
  tipo di lavoro**: due lavorazioni che toccano la stessa pagina nello stesso momento si
  cancellano a vicenda. E chi verifica **non è chi ha scritto**: il verificatore cerca i
  **danni collaterali** (contenuto sparito, errori in console, scorrimento laterale),
  non la conferma della scoperta.

---

## 9. Checklist globale

Alla checklist di tipo (in `tipi/sito-web.md`) si aggiunge sempre questa.

```
APERTURA
[ ] letto apprendimenti.md
[ ] caricato tipi/sito-web.md (e il file di piattaforma, se serve)
[ ] c'è un originale da rispettare? (se sì → rilievo, se no → sistema visivo dichiarato)
[ ] so chi userà il prodotto e in che condizioni

(SE C'È UN ORIGINALE) RILIEVO
[ ] asset scaricati e catalogati
[ ] stili calcolati annotati
[ ] struttura verticale mappata
[ ] parti nascoste viste dall'interno
[ ] popup, moduli e stati aperti e fotografati
[ ] fotografato a 320 / 375 / 390 / 430 / 768 / 1280 / 1920
[ ] so dire quali 3 cose, se mancassero, farebbero dire "non è più la mia"

(SE NON C'È) DICHIARAZIONE
[ ] tre riferimenti visivi concreti, non aggettivi
[ ] colori, caratteri, raggi, bottoni messi per iscritto
[ ] scelto l'elemento ricorrente che dà carattere

COSTRUZIONE
[ ] blocchi ricomposti con gli asset veri
[ ] confronto a ritagli affiancati
[ ] nessuna emoji come icona o decorazione
[ ] misurato: niente traboccamenti, bottoni ≥44px, testo ≥14px
[ ] guardato ONLINE sul server vero, non solo in locale: caratteri caricati nello
    stile giusto (`document.fonts`), controlli con la loro forma in ogni schermata
[ ] contrasto misurato (misura-contrasto.mjs), non stimato
[ ] micro-interazioni curate (hover, click, focus visibile), dentro reduced-motion
[ ] le forme del brand disegnate dai tracciati veri, non evocate con forme base
[ ] (se incorporato in una pagina altrui) CSS confinato, tema dell'ospite intatto,
    guardato nel posto vero

PRODOTTO
[ ] (operazioni irreversibili) provate su oggetti usa e getta, prova a secco
[ ] nessuna funzione che cancelli in blocco; cestino su tabella separata
[ ] permessi provati con un account senza privilegi, reti di sicurezza fatte scattare
[ ] (se riservato) dietro autenticazione, non dietro un indirizzo poco noto
[ ] (se pubblicato) verificato da fuori senza sessione: codice atteso, dati assenti
[ ] backup automatico attivo, riletto almeno una volta
[ ] (email) un solo punto d'uscita, chiuse per difetto
[ ] (sito di FYM) tracker di Delera su ogni pagina, dopo il consenso: zero richieste prima, 200 dopo «Accetta» (§ 6.6)
[ ] (sito di FYM) numeri ufficiali solo da dati/numeri-fym.json e marcati data-numero; /numeri.json risponde 200
    online; numeri-aggiorna.php rifiuta una firma inventata; sito iscritto in automazioni/numeri-siti (§ 6.17)

CONSEGNA
[ ] proposta almeno una cosa viva (prova della promessa / easter egg / momento allo
    scroll), e passata la prova del nove: senza il messaggio il gioco non regge
[ ] guida per frequenza d'uso, con schermate rifacibili con un comando
[ ] CLAUDE.md con regole, metodo e tabella delle cause vere
[ ] rapporti di fase nel repo
[ ] apprendimenti.md aggiornato con quello che si è imparato
```

---

## 10. Script pronti

In `scripts/`, da copiare nel progetto o da lanciare da lì:

| File | Cosa fa |
|---|---|
| `rileva.mjs` | smonta un sito: asset, stili calcolati, struttura, scatti a tutte le larghezze |
| `confronta.mjs` | ritaglia la stessa regione da due siti alla stessa larghezza |
| `misura.mjs` | traboccamenti, elementi fuori schermo, bottoni sotto i 44px, testi sotto i 14px |
| `misura-contrasto.mjs` | contrasto WCAG di ogni testo contro il fondo effettivo, nei due temi |
| `numeri.mjs` | (siti di FYM, § 6.17) rilegge dal foglio i numeri che il sito usa, e dopo il build scrive `numeri.json` |
| `numeri-aggiorna.php` | (siti di FYM, § 6.17) riceve dal bottone dell'email i numeri nuovi, firmati, e aggiorna il sito |

I primi quattro richiedono Chrome e Node; i due dei numeri solo Node e PHP, senza librerie. La libreria (`puppeteer-core`) **non sta sul Drive**: vive su ogni
computer in `~/.claude/fym-strumenti`, ce la mette `installa-fym.command`, e se manca la
installa da sola `scripts/dipendenze.mjs` al primo avvio. Dettagli in `scripts/LEGGIMI.md`.

---

## In questa cartella

| File | Cosa |
|---|---|
| `SKILL.md` | questo: metodo e regole globali |
| `COME-SI-USA.md` | il tutorial: installazione e primo lavoro |
| `apprendimenti.md` | **il tuo diario: si legge prima di cominciare, si aggiorna quando si impara** |
| `tipi/sito-web.md` | le regole per i siti |
| `tipi/sito-web/wordpress.md` | lavorare dentro un WordPress altrui |
| `tipi/sito-web/learnworlds.md` | pubblicare dentro LearnWorlds |
| `tipi/sito-web/hostinger.md` | pubblicare e verificare su Hostinger: la cache che serve 404 finti, i percorsi, il cron, la posta |
| `pattern/` | best practice collaudate, una per file: si leggono quando il lavoro le tocca |
| `scripts/` | i quattro strumenti di misura e i due dei numeri di FYM, più il loro LEGGIMI |
