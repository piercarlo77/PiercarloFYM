---
name: fym-slide
description: "Il modo di FYM di fare le slide: il deck e' un file di dati, il motore lo disegna su una tela fissa 16:9 col marchio FYM, e non ci sono stili fra cui scegliere. Pubblicato su Claude si apre in anteprima e i testi si correggono nella pagina, che si risalva da sola. Fa il PDF col Chrome che c'e' gia' sul Mac, e la Presentazione Google per scriverci sopra in aula. Attiva su 'fym-slide', 'slide', 'facciamo delle slide', 'un deck', 'una presentazione', 'presento a un cliente', 'slide per il corso', 'slide per la lezione', 'in Presentazioni Google'."
metadata:
  aspetto: "../fym-design/SKILL.md, che cita il Brand book 23.06 in REBRANDING FYM"
  creata: '2026-09-08'
  base: "frontend-slides di Zara Zhang (MIT). Vedi in fondo cosa si e' preso e cosa no"
---

# fym-slide: le slide di FYM

Un deck e' **un file di dati**: le slide stanno in un `.json`, e il motore le
disegna. Da quel file solo escono quattro cose, che sono la stessa cosa vista da quattro parti:

- una **pagina pubblicata su Claude**, che si apre in anteprima qui dentro e in cui **i
  testi si correggono nella pagina stessa**. Il salvataggio scrive in un archivio accanto
  alla pagina: la correzione resta, il link non cambia, e la si vede aggiornarsi anche
  mentre la corregge un collega;
- un **file `.html` solo** da tenere sul disco, per proiettare senza dipendere da niente;
- un **PDF**, per mandarlo a chi non deve modificarlo;
- una **Presentazione Google**, solo per le slide d'aula, dove durante la lezione ci si
  scrive sopra: ogni testo e' una casella in cui si scrive, non una fotografia della slide.

E' il `.json` la fonte: da li' si rimonta tutto quando si vuole, e li' vanno riportate le
correzioni fatte nella pagina se devono durare.

## Prima di tutto: e' questo lo strumento giusto?

**Si', anche se in aula ci si scrive sopra.** Dal 2026-09-11 il deck esce anche come
Presentazione Google, con caselle di testo vere: in formazione capita di scrivere sulle
slide durante la lezione (Samu). Ma e' una copia: quello che si scrive li' **non torna nel
`.json`**, e alla prossima esportazione non c'e' piu'. Va bene per gli appunti di una
lezione. Una correzione che deve durare si fa nel `.json`, o nella pagina, e si riesporta.
Vale **solo per le slide che si usano in aula**: le offerte non si esportano, al cliente va
il PDF (Samu, 2026-09-11), e lo script un deck d'offerta lo rifiuta.

**No, se il file vive in Presentazioni Google o PowerPoint e si corregge li'.** E' il caso
dei materiali didattici che Alberto corregge slide per slide, e di quello che si consegna a
un cliente che poi ci mette le mani: li' la fonte e' il file stesso e non un `.json`, e
questo strumento non c'entra. Si parte dallo script di conversione di Alberto, descritto in
[`PASSAGGIO-2026-09-01-conversione-slide-template-metadidattica.md`](../../passaggi-di-consegna-claude/PASSAGGIO-2026-09-01-conversione-slide-template-metadidattica.md).

**No, per MetaDidattica.** Non e' FYM: ha un template suo (Oswald, Ubuntu, rosso `#9A0000`,
fascia grigia nel piede) e vive in PowerPoint. Stessa strada di sopra.

**Si', quando il deck lo presenti tu e poi lo mandi.** Una presentazione a un cliente, un
webinar, il deck di un corso che gira come PDF, le slide di una lezione FYM, una cosa da proiettare. Li' questo strumento e' piu'
veloce di qualunque altra strada e viene a brand al primo colpo.

## Non ci sono stili fra cui scegliere

E' il punto che distingue questo strumento da tutti quelli che si trovano in giro, e
non e' una mancanza: e' la funzione. Lo stile di FYM e' gia' deciso e sta in
[`../fym-design/SKILL.md`](../fym-design/SKILL.md), che cita il Brand book 23.06. Uno strumento che
ogni volta chiede «che vestito vuoi?» e' una macchina per sfornare deck fuori brand.

Quindi qui **non ci sono anteprime da scegliere, non ha preset, non ha temi**. Ha due fondi,
tutti e due misurati in rams: **chiaro** (Soft) per il contenuto, **scuro** (Navy) per
copertine e separatori. Il ritmo del deck si fa alternandoli.

Se qualcuno chiede un aspetto diverso da quello di FYM, la risposta non e' un tema nuovo:
o e' un deck che non e' di FYM, e allora si dice, o e' rams che va corretta, e si corregge
li'.

## Le domande da fare, e sono tre

Si fanno tutte insieme, prima di scrivere una riga.

1. **Chi ha davanti chi presenta?** Un cliente aziendale, una classe, dei privati, dei
   colleghi. Cambia il registro, non l'aspetto.
2. **Si racconta o si legge?** E' la domanda che decide quanto sta su una slide, e la
   risposta ha dei numeri, presi da frontend-slides:

   | | **Lo racconta qualcuno** | **Gira da solo per mail** |
   |---|---|---|
   | punti per slide | **da 1 a 3** | **da 4 a 8**, o da 4 a 6 schede; **fino a 12 blocchi corti** se sono voci alla pari in griglia (brochure della Scuola, 2026-09-22: sei profili, dieci «cose che non trovi», dodici domande) |
   | titoli | grandi, dichiarativi | piu' piccoli, la slide si spiega da sola |
   | numero di slide | di piu': una idea per slide | di meno, ma piene |
   | il prodotto vero | il file da proiettare | **il PDF** |

   Se la richiesta e' mista non si inventa una via di mezzo, si sceglie la piu' vicina:
   davanti a una sala si va sul racconto, per una circolare si va sulla lettura.
3. **Quante slide, all'incirca?** Se non lo sa, si propone una scaletta e si fa approvare
   quella prima di costruire.

Non si chiede altro. In particolare **non si chiede lo stile**, e non si chiede il formato
di uscita prima di aver deciso il punto qui sopra («e' questo lo strumento giusto?»).

## Come si dispongono le informazioni

Lo schema viene dalla **brochure della Scuola fatta a mano da Alessia e Piercarlo** in
Presentazioni Google («Piercarlo FYM brochure Scuola Coaching 2026», id
`1kQvMm3ZYuFysa7JpqRRmU6SUn4TGOTttBUnVeWJey5Q`), letta slide per slide il 2026-09-22. Da
li' si prendono **la struttura delle informazioni e la disposizione dei blocchi**; colori e
caratteri restano quelli di [`../fym-design/SKILL.md`](../fym-design/SKILL.md) (Alessia,
2026-09-22). Quale tipo del motore fa ogni schema, e cosa il motore non fa ancora, sta in
[`impianto.md`](impianto.md).

**La cornice, uguale su ogni slide di contenuto.**

- **In alto a sinistra il titolo**, su una riga, dichiarativo. Spesso in due tempi col
  due punti, il tema e poi cosa significa: «La formazione: comprendere il coaching».
  **Le parole che portano il senso si evidenziano col colore**, una o piu' (Alessia,
  2026-09-22): *formazione* colorata nel titolo qui sopra;
  «10 cose che non trovi in FYM», con *non trovi* colorato. **Mai in maiuscolo**:
  nella brochure c'era («La PRATICA: dove si diventa PROFESSIONISTI») e sembrava un grido
  (Alessia, 2026-09-22).
- **Sotto il titolo una riga d'attacco**, una frase sola larga quanto la slide, in tono
  tenue: dice come leggere quello che segue («Nessuna di queste e' uno slogan: sono tutte
  verificabili prima di iscriverti»). **Non ripete il titolo**: «I docenti della nostra
  scuola» sotto «I docenti della Scuola» non dice niente, e allora l'attacco non si mette
  (Alessia, 2026-09-22).
- **In basso, il piede:** il marchio a sinistra e il numero di pagina a destra.
- **L'aforisma segue la regola di [`fym-offerta`](../fym-offerta/SKILL.md)** (Alessia,
  2026-09-22, perche' le due skill dicano la stessa cosa): si usa solo quando dice qualcosa
  sulla slide, non per riempire l'angolo, e mai su ogni slide. Nella brochure erano
  quindici, e ripetuti smettono di dire qualcosa.
- **In mezzo, i blocchi.** Titolo, testo e blocchi partono tutti dallo stesso margine
  sinistro, e i blocchi di una griglia hanno la stessa larghezza.

**I blocchi.**

- **Un blocco e' un riquadro pieno con gli angoli arrotondati, senza bordo.** La tinta
  chiara e' il blocco normale; il pieno scuro e' **quello da guardare per primo**, e ce
  n'e' uno per slide: l'87% fra i quattro numeri, la Coaching Week fra i due modi di
  provare, l'ultima scheda delle domande, il riquadro delle associazioni.
- **Dentro un blocco l'ordine e' sempre lo stesso:** titolo in neretto; se serve, un
  motto in corsivo; due o tre righe di testo; in fondo o a destra il dato di servizio
  (la durata con l'orologio, l'esito con la freccia, «Guarda il video» col tasto play).
  Un blocco non supera le tre righe di testo.
- **Le griglie sono da 2, 3 o 4 colonne**, e i blocchi stanno su una o piu' righe
  uguali: 3×2 per sei profili o sei passi, 4×2 per otto testimonianze, 4×3 per dodici
  domande, 2×2 per quattro docenti. Un blocco che conta di piu' o che e' diverso dagli
  altri **prende lo spazio di due** (il corso in cammino in fondo alla griglia della
  formazione).
- **Una fascia scura larga quanto la slide chiude la griglia** quando c'e' un messaggio
  che vale per tutti i blocchi sopra (sotto i sei profili: «Sei gia' coach ma non hai mai
  praticato davvero?» con la freccia verso il dato del 40%).
- **I numeri `01`, `02`… vanno sopra il blocco, fuori**, e solo se i blocchi sono una
  sequenza (i sei passi della supervisione).
- **Una frase da mettere in rilievo prende un filetto verticale a sinistra** e sta fuori
  dai blocchi: la domanda giusta da fare a una scuola, i partner, «la Scuola e'
  selettiva».
- **Negli elenchi, la voce comincia col suo nome in neretto, poi i due punti** e la
  spiegazione: «**Corsi affollati**: numero chiuso, in ogni edizione».
- **I nomi dei clienti sono etichette di testo** tutte uguali, non loghi.

**Gli schemi per tipo di contenuto.** Sono quelli che la brochure usa, e si riusano per
lo stesso tipo di informazione:

| L'informazione | Lo schema |
|---|---|
| **un contesto da spiegare**, con le fonti | a sinistra il testo, la domanda col filetto e l'impegno in neretto; a destra quattro riquadri impilati, uno per fonte |
| **a chi si rivolge** | griglia 3×2 di profili: chi sei (titolo), cosa cerchi, «→ Diventi…»; sotto, la fascia scura |
| **livelli di un'offerta** | tre colonne affiancate di intensita' crescente (chiara, scura, gialla): nome, a cosa serve in una riga, l'elenco; ogni livello comincia con «quanto presente nel livello prima +». Poi, piu' avanti, la tabella completa a confronto |
| **un programma di moduli** | griglia 3 colonne: titolo, motto, contenuti, durata a destra; il modulo diverso prende due colonne e la sua tinta |
| **numeri che provano qualcosa** | una riga di quattro numeri grandi con l'etichetta, uno scuro, la nota con l'asterisco sotto; poi due colonne che spiegano da dove vengono |
| **due cose parallele** | due colonne con la stessa struttura: titolo, testo o elenco, e in fondo un riquadro col dato riassuntivo («oltre 300 ore l'anno») |
| **un processo** | sei blocchi numerati 3×2; sotto, la regola che li tiene insieme e una riga di riepilogo per livello («Starter · 5 ore \| Professional · 20 ore \| Premium · 40 ore») |
| **cosa c'e' e cosa non c'e'** | due slide gemelle, stessa disposizione e segno opposto: dieci voci su due colonne con la x, poi dieci con la spunta; sotto ciascuna, una riga che rovescia la prospettiva |
| **le persone** | 2×2 con la foto quadrata a sinistra: nome, contatto · ruolo, cinque righe di storia che finiscono con «Apprezzato per…» |
| **chi siamo e le prove** | a sinistra storia, partner col filetto e clienti a etichette; a destra le norme una per riga (norma a sinistra, ambito a destra) e il riquadro scuro delle associazioni |
| **cosa dicono di noi** | slide scura: otto frasi 4×2 con nome e ruolo, sotto la fascia delle medie recensioni con data |
| **come si entra** | a sinistra requisiti, la frase col filetto e il pulsante; a destra i modi di provare, uno scuro e uno chiaro, ognuno con la sua icona |
| **le domande frequenti** | griglia 4×3, ogni domanda col suo video; l'ultima scheda scura per chi ha altre domande |

**Il ritmo del deck.** Scura la copertina, chiaro il contenuto, **scura una slide nel
mezzo** per cambiare passo (le testimonianze), scura la chiusura. La copertina porta il
marchio in alto a sinistra, il titolo su due righe, due righe di promessa con le parole
chiave evidenziate, a destra un mosaico di foto di persone vere e in fondo le
certificazioni su una riga. La chiusura porta occhiello, la promessa come titolo, i
contatti in tre pulsanti affiancati con l'icona, le associazioni,
e in fondo marchio, dati societari e certificazioni.

## Come si costruisce

1. Si scrive la **scaletta**: una riga per slide, e si fa approvare. Una slide, una idea.
   Se una slide ha due messaggi, sono due slide.
2. Si legge [`impianto.md`](impianto.md) e si scrive il `.json` del deck, scegliendo per
   ogni slide uno dei tipi che il motore conosce. **Dentro un deck non si scrive CSS:**
   se serve una forma che non c'e', si aggiunge un tipo al motore, cosi' ce l'hanno tutti.
   Prima di scrivere i testi si legge il [nucleo della voce](../../commerciale/tone-of-voice.md),
   piu' la scheda [lezioni e video](../../commerciale/voce/lezioni-e-video.md) se il deck e' per
   una lezione o un webinar. Prima di montare si fa il
   [controllo del nucleo](../../commerciale/tone-of-voice.md#il-controllo-prima-di-consegnare).
3. Si monta e **si guarda**:
   `python3 costruisci.py deck.json` poi si apre `deck.html` e si scorre fino in fondo.
4. Si monta la forma per Claude, `python3 costruisci.py deck.json --artifact`, e si
   pubblica dichiarando `capabilities: {"db": {}}`: e' l'archivio in cui finiscono le
   correzioni. Senza, i testi si correggono ma il salvataggio non c'e'.
   ⚠️ Un deck che dichiara `db` **resta dentro l'organizzazione**: a un cliente si manda
   il PDF o il file, non il link.
5. Si fa il PDF: `bash esporta-pdf.sh deck.html`
6. Solo per le slide d'aula, mai per un'offerta: si fa la Presentazione Google, con
   l'uscita dentro la cartella del corso sul Drive montato:
   `node esporta-pptx.mjs deck.json "<cartella del corso>/deck.pptx"`
   Scrive un `.pptx` e, appena Drive l'ha caricato, stampa il link che lo apre in
   Presentazioni Google. Ci si scrive subito; per farla diventare una Presentazione Google a
   tutti gli effetti: File, Salva come Presentazioni Google.
7. **Si apre il PDF e si guarda anche quello**, e la Presentazione Google se c'e'. Non e'
   una formalita': i difetti di questo impianto si vedono li' e nel browser no. La lista di
   cosa guardare sta in fondo a `impianto.md`.

I file montati non stanno su questo Drive: sono roba derivata, e qui resta solo il `.json`
di esempio. Il PDF e la Presentazione Google vanno nella cartella del cliente o del corso,
accanto al `.json` da cui sono nati.
[`esempio-deck.json`](esempio-deck.json) e' un deck vero da cui copiare la forma.

## Le regole che non si negoziano

- **La tela e' 1920x1080, sempre.** Ogni misura si scrive in pixel su quella tela. Niente
  `vw`, niente `rem`, niente `clamp`, niente punti di rottura per telefono: il palco
  rimpicciolisce tutto insieme e le slide restano 16:9 ovunque. Le larghezze di lettura
  sono l'unica eccezione e si scrivono in `em`.
- **Il pavimento del contenuto e' 24px sulla tela.** Sotto ci va solo la cornice (numero
  di slide, piede), mai qualcosa che si deve leggere.
- **Il testo lungo sta entro 68 caratteri per riga.** Una slide da 1920 non si riempie di
  testo da bordo a bordo, anche se lo spazio ci sarebbe. L'eccezione sono le note sotto
  una tabella e il testo di chiusura: li' **si va a capo dopo il punto, mai a meta' frase**
  (Samu, 2026-09-10). Lo fa il motore; se una frase non ci sta in una riga, si accorcia.
- **Se il contenuto non ci sta, si divide in due slide.** Non si rimpicciolisce il corpo,
  non si stringono i margini. Quello e' il momento in cui un deck comincia a sembrare un
  documento fotocopiato.
- **Sul giallo si scrive in Navy.** Bianco su Dandelion sta a 1,73:1 e non passa mai.
  Le altre due che si sbagliano: Sky non e' un colore di testo, e Blu FYM su Navy sparisce.
- **Il marchio si prende dai file veri** in `REBRANDING FYM/FYM LOGO assets/`, non si
  ridisegna e non si ricolora. Il negativo e' un file diverso, non il logo scuro con un
  altro colore.
- **Sulla slide non finisce mai il lavoro che c'e' dietro.** Niente «opzione A», niente
  nomi di file, niente note della richiesta («pubblico: dirigenti», «tono provocatorio»),
  niente etichette di processo. Se una slide ha bisogno di cornice, si usa quella vera:
  il nome del deck, la sezione, la data, chi parla, il numero di pagina. E' una regola che
  serve proprio qui, perche' il deck lo costruisce una macchina a partire da una scaletta,
  e la scaletta e' piena di parole che non devono arrivare in sala.

## Cosa manca, dichiarato

- **La Presentazione Google e' vicina, non identica.** Presentazioni Google non ha la
  spaziatura fra le lettere: gli occhielli in maiuscolo escono piu' stretti, e
  un'etichetta che nel deck andava su due righe li' ne fa una. I trattini degli elenchi
  sono forme disegnate, non punti elenco: una riga aggiunta in aula non ha il trattino.
  E scrive piu' largo di Chrome: dal 2026-09-25 le caselle che non devono andare a capo
  escono col 18% di larghezza in piu' e tengono, ma una casella che **nel deck occupa gia'
  due righe o piu'** li' puo' prenderne una in piu', che finisce sopra quello che c'e'
  sotto. E due o tre numeri grandi per presentazione escono al 96% del corpo, perche'
  altrimenti uscirebbero dal loro riquadro: e' l'unico punto in cui il `.pptx` non e' il
  PDF, e lo script lo dice quando gira. Controllata il 2026-09-24 e il 2026-09-25 su 36
  presentazioni vere, 660 slide, ma mai in un'aula vera.
- **La Presentazione Google si fa solo da Mac**, come il PDF: cerca Chrome in
  `/Applications`, e il link lo ricava dal Drive montato. Su Windows (Gian, Valentina) non
  e' mai stata provata: Chrome va indicato con `CHROME_PATH` e il link non esce.
- **I caratteri arrivano da Google Fonts, quindi al primo caricamento serve internet.**
  Per un deck che deve funzionare offline in aula i `woff2` vanno messi accanto al file.
  Non e' ancora stato fatto.
- **Le immagini sono provate come foto nelle schede e nel mosaico della copertina.** Il
  2026-09-14: quattro ritratti nel programma didattico della Scuola, e nella brochure della
  Scuola di Alessia i ritratti a lato del testo e tre foto dello shoot MilordStudio in
  copertina, guardati nel PDF. Un'immagine a tutta slide non ancora. Le icone a linea nella
  Presentazione Google dal 2026-09-24 ci sono: escono come immagini, non come glifi.
- **Si correggono i testi, non la struttura.** Si cambia una parola, si toglie e si
  aggiunge una riga di elenco. Non si aggiunge, non si toglie e non si sposta una slide,
  e non si cambia il tipo di una slide: quello si fa nel `.json` e si rimonta.
- **La correzione fatta nella pagina non torna nel `.json` da sola**, ma si va a
  prendere: l'archivio del deck si legge da una sessione di Claude e dentro c'e' il `.json`
  aggiornato. Come, sta in [`impianto.md`](impianto.md). Automatico non e'.
- ~~Il salvataggio nell'archivio non e' ancora stato provato.~~ **Provato il 2026-09-09**
  da Samuele sull'offerta Bonfiglioli: la correzione e' arrivata nell'archivio
  (`deck/corrente`, letto da una sessione di Claude). Nello stesso giro e' saltato fuori che
  l'archivio vinceva sempre sulla pagina, anche su una ripubblicazione piu' recente:
  corretto con l'ora di montaggio, vedi impianto.md.
- **La pagina pubblicata e i file sul Drive vanno fuori sincrono in silenzio.** Successo
  subito, la prima sera: una correzione al foglio di stile fatta dopo la pubblicazione e'
  rimasta sul Drive, e la pagina e' andata avanti senza. Chi ritocca il motore o il tema
  deve rimontare e ripubblicare i deck vivi.
- **L'esportazione da un `.pptx` esistente non e' fatta.** Serve `python-pptx`, che su
  questo Mac non c'e'.

## Da dove viene, e cosa si e' buttato

L'impianto tecnico viene da **[frontend-slides](https://github.com/zarazhangrui/frontend-slides)**
di Zara Zhang, licenza MIT, Copyright (c) 2025 Zara Zhang. Preso il 2026-09-08.

**Preso:** l'idea della tela fissa 1920x1080 scalata tutta insieme, e il `viewport-base.css`
che la realizza, che qui si chiama `palco.css`; lo scheletro HTML e il regista in
JavaScript, riscritti e ridotti; e l'idea di correggere i testi dentro la pagina, che li'
salva nella memoria del browser e qui invece finisce in un archivio, cioe' dura davvero e
la rivedono anche gli altri.

**Buttato:** i 34 sistemi di design del `bold-template-pack` (1,8 MB) e i 12 preset di
`STYLE_PRESETS.md`, cioe' meta' del repo, perche' il brand di FYM e' uno; la fase delle tre
anteprime da scegliere; l'installazione come plugin da marketplace, che vive su un computer
solo mentre qui le skill stanno sul Drive e si collegano con
[`installa-fym.command`](../../installa-fym.command); la pubblicazione su Vercel, che a FYM
non serve; e tutta la parte che chiede font distintivi e aspetti sorprendenti, che e'
esattamente il modo di finire fuori brand.

**Ripreso dopo, il 2026-09-08**, perche' il primo giro aveva buttato via troppo insieme
agli stili: le due densita' con i loro numeri (qui sopra); la regola che sulla slide non
finisce il testo di servizio; il fatto che la verifica va fatta **guardando** e non
misurando, perche' due pannelli possono coprirsi senza traboccare; e le durate delle
animazioni per un registro professionale, 200-300ms contro l'1-1,5s di quello
cinematografico, che hanno accorciato la comparsa da 600 a 350ms. Sono in
[`impianto.md`](impianto.md) e in `tema-fym.css`, ognuna dove serve.

**Cambiato:** il PDF. Il repo fotografa ogni slide e mette insieme le immagini, con
Playwright da scaricare e un deck da 18 slide che diventa un PDF da 20 MB. `esporta-pdf.sh`
invece **stampa** il deck con il Chrome che c'e' gia' sul Mac: niente da installare, il
testo nel PDF resta testo, e le 5 slide di prova pesano 116 KB.

## Ancora da verificare

- Usato su un deck vero il 2026-09-09, l'offerta 107/2026 di [fym-offerta](../fym-offerta/SKILL.md): undici slide, quattro tipi nuovi, una giornata di correzioni in tre dalla pagina. Su un deck da proiettare in sala, con immagini, non ancora.
- Non e' stato provato su un proiettore, ne' su uno schermo 16:10 o 4:3: la tela dovrebbe
  incorniciarsi da sola, ma non lo si e' visto.
- Il numero delle slide oltre le quindici non e' stato provato: non si sa se un file solo
  con cinquanta slide resti maneggevole.
- Il PDF e' stato guardato su questo Mac. Non e' stato aperto su Windows ne' dentro Google
  Drive, dove i caratteri incorporati potrebbero rendersi diversamente.
