---
name: fym-offerta
description: "L'offerta commerciale corporate di FYM: da una richiesta di formazione o coaching a un deck di dieci o undici slide pronto da mandare, montato con fym-slide, con i prezzi presi dal listino e archiviato come JSON più PDF nella cartella del cliente. Attiva su 'fym-offerta', 'offerta', 'preventivo', 'facciamo un'offerta', 'rispondiamo a questa richiesta', 'quotiamo'."
metadata:
  creata: '2026-09-09'
  nata-su: "l'offerta 107/2026 a un cliente industriale, costruita in diretta da Samu, Valentina e Alberto"
  monta-con: "../fym-slide/SKILL.md"
  prezzi-da: "il listino FYM v9.0, foglio 1K5iSYuQfb3oTPE8srYwZ6oib7uukFJRw_l2r4v3qKoc in FYM CORPORATE 01.02"
---

# fym-offerta: l'offerta corporate di FYM

Un'offerta e' **un deck corto**, dieci o undici slide, con una struttura fissa: copertina
con cartiglio, le richieste del cliente, obiettivi, proposta, contenuti, metodologia,
prezzo, sconti per le edizioni (solo se le edizioni sono piu' di una), perimetro,
condizioni, accettazione. Questa skill decide **cosa c'e'
scritto**; a disegnarlo e' [fym-slide](../fym-slide/SKILL.md), che ha i tipi di slide
fatti apposta (`cartiglio`, `tabella`, `prezzi`, `accetta`) e non va toccato per fare
un'offerta. L'originale di un'offerta e' il suo `.json`; [esempio-offerta.json](esempio-offerta.json)
e' l'offerta 107/2026 con i dati del cliente sostituiti da segnaposto, e si copia da li'.

## Prima di scrivere una riga: la ricognizione

1. **Chi c'e' gia'.** I fogli in `cantieri-aperti/` e la tabella dei passaggi, come per
   ogni lavoro su questo Drive.
2. **Cosa ha detto il cliente.** La fonte migliore e' la **registrazione della call** di
   intake; la mail e' quello che ha scritto, la call e' quello che ha detto. Se c'e' solo
   la mail, si parte da quella e si dichiara.
3. **Cosa abbiamo gia' fatto con lui.** La cartella del cliente in `FYM CORPORATE /
   03.01_Clienti e Prospect Corporate`: offerte precedenti, progettazioni, un logo
   vettoriale gia' salvato. Se il cliente e' della Scuola, o e' stato in una demo, e'
   un fatto che entra nell'offerta. Se la cartella non c'e', si crea, col nome corto
   con cui il cliente si chiama davvero, non con la ragione sociale.
4. **Il repertorio.** Le offerte passate sono la miniera dei testi standard, degli
   aforismi e delle «caratteristiche degli interventi FYM». Non si riscrive quello che
   Piercarlo ha gia' scritto bene.
5. **Il listino v9.0.** L'unica fonte dei prezzi. Si legge prima, non dopo.
6. **La voce.** Prima di scrivere si legge il [nucleo](../../commerciale/tone-of-voice.md). Prima
   di dire che l'offerta e' pronta si fa il suo
   [controllo](../../commerciale/tone-of-voice.md#il-controllo-prima-di-consegnare), poi le regole
   che non si negoziano, qui sotto.

## Le sette decisioni di chi vende

Si mettono davanti **tutte insieme**, ognuna con una proposta, e si aspetta la risposta
prima di montare. Poi si mostra la forma: non si chiede «come la vuoi?», si fa vedere.

| | La decisione | La proposta di partenza |
|---|---|---|
| 1 | Modalita' | quella che il cliente ha chiesto; se ha lasciato aperto, in presenza |
| 2 | Chi va in aula, e a che livello | il trainer del tema; il livello e' quello vero della persona |
| 3 | Chi redige | chi sta costruendo l'offerta; sull'ultima slide non si firma, si scrive una mail |
| 4 | La progettazione | FA00: 800 € di base piu' il 20% del costo delle ore di una singola edizione (in prova dal 2026-09-09; a listino e' 1.500) |
| 5 | Gli sconti | sul volume: 2 edizioni −5%, 3 −10%, da 4 −15%; pagamento anticipato −5% (codice PA). La scala per edizioni entra nell'offerta **solo se in progettazione emerge piu' di un'edizione** (Samu, 2026-09-10): con una edizione sola la slide degli scenari non c'e', e l'anticipato sta nella nota della slide del prezzo |
| 6 | La forma | il deck; la versione a pagina sola e' stata provata e scartata il 2026-09-09 |
| 7 | Il numero di preventivo | progressivo dell'anno, «nnn/aaaa», e l'ID «FYM-aaaa-nnn» |

## Le slide: cosa e' fisso, cosa e' standard, cosa si compila

Tre livelli, e la differenza conta. **Fisso** sta scritto qui e nell'esempio e non si
tocca: se deve cambiare, si cambia qui, per tutte le offerte successive. **Standard** ha
un testo di partenza nell'esempio e cambia solo se il progetto lo cambia. **Compilato**
si scrive ogni volta dalle fonti, e la skill dice da quale.

| # | Slide (tipo) | Fisso | Standard | Compilato, e da dove |
|---|---|---|---|---|
| 1 | Copertina (`cartiglio`) | il marchio di linea FYM; le sei caselle e le etichette; «Approvata RQ/D» con la stessa data di «Redatta il»; «Valida fino al» = redazione + 60 giorni | | titolo (il tema), sottotitolo (per chi, quando), destinatari («Alla cortese attenzione di ...», senza il nome dell'azienda: c'e' gia' il logo), logo del cliente, numero e date |
| 2 | Le vostre richieste (`tabella`) | il titolo, che parla di loro e non di noi; le righe: Tema, Chi quanto quando, Dove, Obiettivi, Da confermare con voi | | i testi, dalla call o dalla mail, con le parole del cliente. Sul feedback il tema dice **quale lato**: «focus specifico su come chiedere e ricevere feedback» oppure «su come dare feedback in modo efficace». Sono due formazioni diverse, e la 107/2026 e' stata rifatta il 2026-09-10 perche' era partita dal lato sbagliato |
| 3 | Obiettivi (`punti`, con `aforisma` a lato) | titolo «Obiettivi», occhiello «Cosa vogliamo ottenere»; **strategici, mai di contenuto**: dicono cosa cambia nell'organizzazione, non cosa si impara; un aforisma sul tema a lato dell'elenco, perche' cinque punti lasciano vuota la meta' destra: per il feedback, Bill Gates («Abbiamo tutti bisogno di qualcuno che ci dia un feedback. E' cosi' che possiamo migliorare», dall'offerta Greenpeace 104/2025); per altri temi si pesca dalle offerte passate | per il feedback, due declinazioni. **Chiedere e ricevere**: qualita' delle relazioni nel team; accogliere il punto di vista dell'altro senza mettersi sulla difensiva; rendere normale chiedere feedback ai colleghi invece di aspettare la valutazione; condividere gli errori senza cercare colpevoli; trasformare i feedback ricevuti in azioni. **Dare**: qualita' delle relazioni; condividere gli errori senza cercare colpevoli; feedback come pratica quotidiana e non momento di valutazione; meno non detti; un linguaggio comune per dire le cose difficili. Non rigidi: si adattano alla call | per altri temi, cinque righe dalla call |
| 4 | La nostra proposta (`schede`) | titolo; occhiello «un percorso personalizzato per la vostra azienda»; tre schede numerate: prima, durante, dopo la formazione, con i nove punti | «Questionario di pre-engagement ai partecipanti (facoltativo)» | niente |
| 5 | I contenuti della formazione (`schede`) | titolo; occhiello «n ore di formazione», in cifra; quattro schede **senza numeri**, due o tre punti corti l'una | per il feedback, le prime due schede sono uguali nelle due declinazioni: «Il feedback nel team» (cos'e' e a cosa serve, il ciclo, le 4 direzioni) e «Le quattro tipologie» (la matrice). Poi, **chiedere e ricevere**: «Chiedere feedback» (la caccia al feedback, le domande di feedback) e «Ricevere un feedback» (gli errori nel riceverlo, il modello SAGRA, esercitazione e piano d'azione); **dare**: «Il feedback correttivo» (il modello FA SPESA, esercitazione) e «Errori e piano d'azione». Le voci vengono dal catalogo «Cultura del Feedback» (Presentazione Google `1tdLNzvOwaZ-2lQdrkKaM-C1TqFWAzhQm88NtGPDTzog`), che ha il programma dei corsi | per altri temi, i blocchi dalle fonti di casa (libro, progettazioni passate); in ogni caso **validati da chi va in aula** |
| 6 | Metodologia (`schede`, `disposizione: righe`) | tutto: «FormAZIONE: poca forma, molta azione», le tre schede «Si parte dai casi reali», «Si passa all'azione», «Si porta a casa un piano» | | niente |
| 7 | Offerta economica (`prezzi`) | occhiello «Il prezzo · importi IVA esclusa»; tre righe: progettazione, edizione, trasferta «a parte»; la nota sul tariffario, che rimanda alla slide degli scenari se c'e' e altrimenti dice solo «Con il pagamento anticipato, un ulteriore 5% sul totale» | | i numeri, dal listino: **il barrato e' il listino del livello vero del trainer**; se il prezzo offerto e' di un livello inferiore, la nota lo dice («Master Trainer FYM, alla tariffa Senior») |
| 8 | Lo sconto cresce con le edizioni (`prezzi` a 4 colonne), **solo se le edizioni sono piu' di una** | titolo; scala 1, 2, 3, 4 o piu'; colonna «Con pagamento anticipato»; nessuna riga «totale» | la scala 5, 10, 15%; l'anticipato 5% | i numeri, calcolati; la nota «circa n € a persona» |
| 9 | Cosa e' incluso, cosa no (`colonne`) | i titoli «Incluso nell'offerta» e «Extra, solo se richiesti»; gli extra col `tono: tenue`; il libro solo se il tema e' il feedback | gli inclusi (progettazione, questionario, conduzione, materiali stampati in presenza, attestato, report); gli extra (registrazione 50 € l'ora, libro 9,90 € a copia, coaching con «vantaggio cliente FYM» senza percentuale) | la riga «Conduzione con ...»: livello e numero dei trainer da chi va davvero in aula |
| 10 | Condizioni (`punti`, due colonne) | IVA 22%; trasferte solo in presenza, senza vitto e alloggio per la mezza giornata; fatturazione a fine erogazione sull'ordine d'acquisto, con fattura di cortesia anticipata se richiesta; pagamento a 60 gg d.f.f.m., in ritardo decade lo sconto; validita' 60 giorni dalla redazione | «Le date si fissano insieme entro il ...» | le due date |
| 11 | Per accettare l'offerta (`accetta`) | il testo, tre frasi corte («Inviate una mail a corporate@fym.it con il numero di preventivo e le edizioni scelte. Va bene anche il vostro ordine d'acquisto. Da li' fissiamo insieme le date di ...»); la **chiamata** in neretto («Scriveteci entro il ...: la proposta vale fino a quel giorno»); **niente spazio per la firma**, tolto il 2026-09-10 perche' non diceva cosa si firmava (Alberto); le cinque certificazioni; l'anagrafica FYM in coda; in alto a destra l'aforisma sul valore della formazione: Julian Barnes, «Piu' impari, meno temi», che ricorre nelle offerte di Piercarlo (ha preso il posto di Senna il 2026-09-10) | | il mese delle date e la scadenza |

Il **piede** di ogni slide: «FYM s.r.l. · Preventivo nnn/aaaa · [Cliente] · valido fino
al [data] · bozza». La parola «bozza» si toglie al momento dell'invio.

## Le regole che non si negoziano

- **Si dice «la formazione», mai «l'aula».** Prima della formazione, durante, dopo.
- **Il cliente si chiama col nome corto** che si usa davvero; la ragione sociale sta nel
  contratto. Il logo del cliente si mette in copertina e basta.
- **Il logo del cliente va inserito bene**, e la procedura e' questa, nell'ordine: la
  cartella del cliente sul Drive; il codice della home del suo sito, dove il marchio e'
  quasi sempre un SVG in linea o un `.svg` linkato (si estrae, si tolgono `width`,
  `height` e `<title>`, se e' in `currentColor` gli si da' il colore del marchio); solo
  dopo si chiede al cliente. **Un PNG piccolo non si ingrandisce mai.** Il vettoriale
  trovato si salva nella cartella del cliente. Si verifica guardando la copertina resa
  dal PDF: i due marchi devono avere la stessa altezza.
- **Il marchio FYM in copertina e' quello di linea**, orizzontale, dai file in
  `REBRANDING FYM / FYM LOGO assets / FYM + loghi secondari`, ritagliato al contenuto.
- **Il listino barrato e' quello del livello vero** di chi va in aula, e lo sconto
  dichiarato e' la differenza vera. Il **tetto del 40%** si controlla sul totale di ogni
  scenario contro quel listino: se lo si supera, la skill lo dice con la tabella degli
  sconti e lascia decidere a chi vende. Un'eccezione si dichiara, non si nasconde
  abbassando il barrato.
- **Nessuna domanda in chiusura**: l'ultima slide dice cosa fare per accettare, ed entro quando.
- **Niente paragrafo «chi siamo»**: la prova e' il lavoro fatto insieme; la presentazione
  aziendale, se serve, viaggia a parte.
- **Due slide vicine non ripetono la stessa forma**: se due usano lo stesso tipo, la
  seconda cambia disposizione. Le schede si numerano solo se l'ordine conta.
- **L'aforisma** si usa quando dice qualcosa sulla slide, non per riempire l'angolo, e
  si pesca prima dal repertorio delle offerte passate. **Mai firmato FYM**: una frase che
  ci citiamo da soli non e' un aforisma (Samu, 2026-09-10).
- **Il titolo del libro va fra virgolette**: «La cultura del feedback», non in corsivo e non
  nudo.
- **Se una slide non ci sta, si accorciano i punti**, non i margini: la slide standard
  deve reggere anche con i titoli lunghi.
- **Niente trattino lungo** nei testi, e le date in forma assoluta.
- **Prima il prezzo, poi il perimetro.** La slide «Cosa e' incluso, cosa no» sta dopo le
  due tabelle dei prezzi: quotare gli extra prima di aver dato il prezzo suona storto
  (Alberto, 2026-09-09).
- **Nei testi di piu' frasi si va a capo dopo il punto**, mai a meta' frase: lo fa il
  motore sulle note e sul testo di chiusura. Se una frase non ci sta in una riga, si
  accorcia la frase.

## I prezzi

Dal listino v9.0, per codice: `FA00` progettazione; `FA1x`, `FA2x`, `FA4x`, `FA8x`
formazione per 1, 2, 3-4, 6-8 ore, con l'ultima cifra 1 Master, 2 Senior, 3 Professional;
`AR01`-`AR03` trasferta a ora per livello; `exFR` registrazione; gli sconti `PA` e il
tetto nel secondo foglio. Le trasferte si quotano **a parte** e non entrano negli scenari, come **forfait
fisso per sede e per giornata**: le ore di viaggio andata e ritorno, stimate su Google Maps
in auto dalla citta' di chi va in aula e arrotondate alla mezz'ora, per la tariffa oraria
del livello; il forfait che ne esce si arrotonda ai 5 € (Samu, 2026-09-11, sull'offerta
Bonfiglioli: 4 ore e mezza × 75 = 337,50, scritto 335). Con due edizioni nella stessa
giornata la trasferta si conta una volta. La tariffa oraria da sola non si scrive mai al
cliente senza le cifre chiuse per sede: e' la frase che il 2026-09-10 ha fatto scattare
quattro domande. Online il prezzo non cambia, cade solo la trasferta.

Gli scenari si calcolano cosi': progettazione una volta sola + (n edizioni × prezzo
edizione − sconto volume); l'anticipato e' un −5% sul totale. Si scrive la formula nella
nota di ogni riga, cosi' il cliente rifa' il conto.

## Come si monta e come si archivia

1. Si scrive il `.json` copiando l'esempio, e si monta con fym-slide:
   `python3 costruisci.py offerta.json` e poi `--artifact`, pubblicando con
   `capabilities: {"db": {}}`. Nella pagina si correggono i testi, anche in tre.
2. **Prima di ogni rimontaggio si legge l'archivio della pagina** e si riportano nel
   JSON le correzioni fatte li'; dopo ogni pubblicazione si riallinea l'archivio. Come,
   sta in [../fym-slide/impianto.md](../fym-slide/impianto.md).
3. Si guarda il PDF, slide per slide, prima di dire che e' pronto.
4. **Al cliente va il PDF**, senza «bozza» nel piede. Mai il link alla pagina, che
   dichiara `db` e resta dentro l'organizzazione.
5. **Si archiviano JSON e PDF nella cartella del cliente**, con il numero di preventivo
   nel nome. L'originale e' il JSON: senza, fra sei mesi il PDF c'e' ma l'offerta non si
   rimonta. Se l'offerta cambia, si rimonta e si archivia una versione accanto, non sopra.
6. **La Presentazione Google non e' l'archivio.** E' un'esportazione di comodo, da fare
   solo se un cliente la chiede o se una slide deve entrare in un altro deck, e non si
   corregge li'. Deciso da Samu il 2026-09-09. Il motore che la genera non e' scritto.

## La pagina online: il cliente sceglie e accetta

Dal 2026-09-22 (Samuele) l'offerta ha anche una **pagina riservata** su
`fym.it/offerte/<cliente>/<numero>/`, con lo stesso aspetto e la stessa password del contratto
che ne nascerà. Il deck resta, e il PDF viaggia come allegato per chi deve girarlo agli acquisti;
la pagina è il posto dove il cliente **sceglie quante edizioni**, se paga in anticipo e quali
extra gli interessano, e **accetta**. Accettare non è firmare: la richiesta va ad
amministrazione@, e il contratto si prepara su quelle scelte con [fym-contratto](../fym-contratto/SKILL.md),
si rivede in FYM e solo dopo arriva al cliente, nella stessa pagina.

**Si scrive una volta sola.** La pagina si monta dallo stesso JSON del deck, con un blocco in più,
`online` (lo schema è in fondo a [esempio-offerta.json](esempio-offerta.json)):

- `id` e `percorso` come per il contratto (`bonfiglioli-107-2026`, `bonfiglioli/107-2026`): offerta e
  contratto hanno **lo stesso id**, quindi la stessa password e la stessa sessione;
- `domini_email`: solo chi scrive da quei domini riceve il codice per accettare;
- `calcolo`: progettazione ed edizione, a prezzo offerto e a listino, la scala degli sconti,
  l'anticipato, e le edizioni fra cui si sceglie (`da`, `a`, `proposta`). I conti li fa
  [pagina.py](pagina.py) per ogni numero di edizioni, con la formula della sezione «I prezzi»:
  la pagina sceglie fra righe già calcolate, e il server rilegge la stessa tabella;
- `trasferte`: una frase, perché le sedi non si scelgono qui ma si concordano.

In alto a destra c'è **«Scarica in PDF»** (Samuele, 2026-09-23), per chi preferisce la carta: apre la
stampa del browser, dove si salva in PDF. Non c'è un file a parte da tenere allineato, e il PDF porta
anche la scelta fatta in quel momento; nella stampa spariscono il modulo, le spunte e il codice, e
restano testo, prezzi e il promemoria della scelta.

La pagina mostra le slide come sezioni, tranne tre: la copertina diventa la testata, lo scenario
dei prezzi a quattro colonne diventa la scelta delle edizioni, e «Per accettare l'offerta» diventa
il modulo. Se l'offerta va online, sull'ultima slide del deck si scrive che si accetta dalla pagina,
con il link e la password mandati a parte.

    python3 strumenti/fym-offerta/pagina.py "<cartella cliente>/offerta-nnn-aaaa-tema.json"
    automazioni/contratti/pubblica.command
    automazioni/contratti/password.command <id>

Prima si pubblica, poi si dà la password: il server la genera e la mostra una volta, e chi la
chiede la salva nel Gestore password di Google di info@. Si pubblica da qualunque computer con la
chiave personale (`automazioni/portinaio-fym/portinaio.md`; da Windows `fym.ps1`).

**Prima di pubblicare si guarda in locale** (voce `contratti` di `.claude/launch.json`, indirizzo
`/offerte/<percorso>/`), anche a 375 pixel, e si confrontano i totali con quelli del deck. Link e
password al cliente li manda chi segue il cliente, in due messaggi.

Quando il cliente accetta, arrivano ad amministrazione@ le scelte e chi le ha fatte. Da lì si
passa a fym-contratto, che le legge con `automazioni/contratti/accettazione.command <id>`.
Un'offerta accettata non si rimonta: il segno è `automazioni/contratti/offerte/<id>.accettata`.

## Dove chiama cos'altro

- **fym-slide** per tutto il disegno, la pagina, il PDF. Questa skill non disegna.
- **rams** per l'aspetto, attraverso fym-slide.
- **Il listino v9.0** per ogni numero.
- **Il connettore Drive** per cercare cliente e offerte passate, creare la cartella,
  caricare JSON e PDF. Gira come `info@fym.it`: chi ha un account suo carica dal disco.
- **Il sito del cliente** per il logo, prima di chiederlo.
- **La skill di progettazione**, quando esistera': oggi brief e contenuti li scrive
  questa skill dalle fonti; domani li riceve da una progettazione gia' fatta.

## Cosa non fa

Non inventa contenuti d'aula. Non decide sconti fuori listino da sola. Non manda niente
al cliente. Non esporta in Presentazioni Google.

## Ancora da verificare

- Usata una volta sola, il 2026-09-09, su un'offerta di formazione sul feedback. Su un
  progetto di coaching, o in cammino, i tipi di slide tengono ma i testi standard no:
  la proposta «prima, durante, dopo la formazione» e la metodologia sono di formazione.
- La formula della progettazione (800 + 20%) e' in prova, non a listino.
- Se il sistema qualita' richiede davvero la casella «Approvata RQ/D» lo conferma
  Piercarlo; intanto resta.
- La skill non sa leggere il Drive dal computer di Valentina, che ha un account suo.
- La storia del cliente (cosa abbiamo gia' fatto con lui, negli anni) oggi si cerca a
  mano nella cartella; Alberto ha proposto una skill che la tenga e la usi in
  progettazione. Da discutere a parte.
- **La pagina online** è stata provata il 2026-09-22 solo su una copia dell'offerta 107/2026
  (`prova-107-2026`, accettata da Samu sulla pagina pubblicata e poi tolta), mai mandata: il primo
  cliente vero sarà la prossima offerta. Sa mostrare i
  tipi di slide `tabella`, `punti`, `schede`, `prezzi` e `colonne`; con un tipo nuovo si ferma.
- La scelta vale per le offerte **a edizioni**. Un'offerta di coaching, o a pacchetti, ha bisogno
  di un altro `calcolo`: da scrivere quando capita.
