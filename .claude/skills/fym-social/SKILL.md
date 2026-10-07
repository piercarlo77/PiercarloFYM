---
name: fym-social
description: "Tutti i contenuti social di FYM, per qualunque progetto o linea: post, caroselli (con le slide già fatte se il progetto ha un tema), caption, testi di locandine e infografiche, CTA, hashtag, commenti, declinazioni da un canale all'altro, revisioni, newsletter nativa di LinkedIn. Prima di tutto chiede su quale progetto si lavora e ne legge voce, canali e dati; parte da come funzionano i social questa settimana e consegna ogni testo con la tabella «Controllo per canale». Attiva su 'fym-social', 'post', 'carosello', 'caption', 'hashtag', 'CTA', 'adatta per LinkedIn', 'declina', 'newsletter LinkedIn', 'locandina', 'infografica', 'testo per Instagram', 'commenti per il post'. Non per script video, email o articoli del blog."
metadata:
  creata: '2026-09-25'
  creata-da: Samuele
  nata-da: "le skill social di Gianluca: copywriting-social di Sport Coaching Strategico (la base), post, carosello, newsletter-linkedin e trend-algoritmo di Negoziazione.eu"
---

# fym-social: i contenuti social di FYM

Una skill sola per ogni testo che esce su un social, per tutti i progetti (decisione di Samuele,
2026-09-25, in [convenzioni-drive.md](../../convenzioni-drive.md), «Dove vivono le istruzioni per
gli strumenti»). Qui c'è **come si lavora**; chi è il progetto, come scrive e dove parla sta nei
suoi file. Se un testo esce scritto male, si corregge la voce del progetto, tranne le parti che
il progetto dichiara intoccabili (una guida d'autore ricopiata parola per parola): lì si segnala
a chi la tiene. Se esce con la procedura saltata, si corregge questo file.

**La procedura si esegue tutta, ogni volta, per ogni testo che esce su un social.** Non si aspetta
che qualcuno chieda "l'hai ottimizzato per la piattaforma?": se la domanda arriva, la procedura è
stata saltata.

**Stato: in uso dal 2026-09-25**, dopo due giri di collaudo su SCS e su Negoziazione.eu. Le skill
che sostituisce sono state tolte dai progetti lo stesso giorno.

## Le fonti, sempre dal file e mai a memoria

| Cosa | Dove |
|---|---|
| La voce di FYM, **sempre e per prima** | [commerciale/tone-of-voice.md](../../commerciale/tone-of-voice.md), il nucleo, letto per intero prima di scrivere; per le linee senza progetto anche le schede di [commerciale/voce/](../../commerciale/voce/funzioni.md) |
| Chi è il progetto, come scrive, dove parla, dove stanno le cose, cosa è aperto | `progetti/<nome>/`: `CLAUDE.md`, `voce.md`, `canali.md`, `dati.md`, `aperto.md`, e se ci sono `mercato.md` e `tema/` |
| Il mestiere del copy | [progetti/copywriting.md](../../progetti/copywriting.md) |
| Cosa premia ogni piattaforma questa settimana | [strumenti/algoritmi-social/](../algoritmi-social/SKILL.md), un file per canale |
| Freschezza, affidabilità, niente invenzioni | [reference/regole-dati.md](reference/regole-dati.md) |
| Il dettaglio per formato | [reference/formati.md](reference/formati.md) |
| Gli errori già fatti | [reference/errori-gia-fatti.md](reference/errori-gia-fatti.md), da rileggere prima di consegnare |

**Quando le regole urtano.** La voce di FYM sta sopra tutto. `voce.md` del progetto lavora dentro
di lei e può essere più stretta (lo dice il file del progetto, e vince la versione più stretta).
`copywriting.md` sta sotto `voce.md`. I fatti di piattaforma **non prevalgono mai sulla voce**: se
una tattica che porta copertura chiede un registro che la voce vieta, vince la voce e il conflitto
si presenta a chi decide sui contenuti del progetto, non si risolve da soli.

## 0. Il progetto, prima di tutto

1. **Chiedi su quale progetto si lavora.** Proponi quello ovvio (la sessione è aperta dentro
   `progetti/<nome>/`, o la richiesta lo nomina), ma **aspetta la conferma** prima di leggere e
   scrivere. Le scelte sono le cartelle di [progetti/](../../progetti/) (si leggono lì, non si
   ricordano), più le linee di FYM che una cartella non ce l'hanno: Scuola, corporate, COACHING.it.
2. **Per un progetto con la cartella** leggi, dai nomi fissi: `CLAUDE.md`, `voce.md`, `canali.md`,
   `dati.md`, `aperto.md`; se ci sono, `mercato.md` e `tema/` (sia `tema.md`, le regole a parole,
   sia `tema.json`). Se manca un file obbligatorio o è vuoto, **fermati e dillo**: un file da zero
   byte è quasi sempre Drive che non l'ha scaricato. **Apri anche i materiali di riferimento che
   `canali.md` nomina** (un carosello modello, un PDF): sono il modello del formato, e se non si
   raggiungono lo dici.
3. **Per una linea senza cartella** la voce è `commerciale/tone-of-voice.md` con la scheda del
   punto di contatto in `commerciale/voce/` (la [mappa delle funzioni](../../commerciale/voce/funzioni.md)
   dice cosa deve ottenere ogni canale). Canali, destinatari, CTA ammesse, link e dove si consegna
   **si chiedono**, e nella consegna si dice che non stavano scritti da nessuna parte.
4. Da qui in avanti "il progetto" vuol dire i suoi file. Nella procedura non ci sono regole di un
   brand: dove un progetto ha una regola sua (niente link, un formato di slide, chi decide), sta
   nel suo `canali.md` o `tema/`, e vale quella.

## 1. Contesto e destinatario

- Leggi `aperto.md` e `dati.md` e, se il contenuto è una riga del piano editoriale, la riga intera
  (formato, canali, CTA, KPI, note). Un piano in xlsx senza `openpyxl` sul computer:
  [regole-dati](reference/regole-dati.md), «Leggere un piano in xlsx».
- Controlla nel piano editoriale o nell'archivio dei contenuti **cosa è già uscito sullo stesso
  tema**: niente hook identico con un messaggio diverso, niente messaggio identico con un hook
  diverso senza motivo. Contenuti sullo stesso tema nella stessa settimana hanno angoli che non si
  sovrappongono (il carosello dà il quadro intero, il post fa lo zoom su un elemento).
- Se il contenuto accompagna una grafica già fatta, **guarda la grafica**: la caption non ripete
  il testo che c'è sopra e parla allo stesso destinatario.
- **Un solo destinatario per contenuto, su tutti i canali.** Se le slide parlano a uno, anche la
  caption di un altro canale parla a lui. Se il canale ha un pubblico prevalente diverso
  (`canali.md`), dillo in chat prima di consegnare. Se il destinatario non è chiaro, chiedi prima
  di scrivere.
- Ogni fatto su un evento o un'offerta (data, ora, gratuità, relatori, attestato, prezzo) viene da
  una fonte letta: la pagina dell'evento, la locandina, `dati.md`, `CLAUDE.md`. Se non è
  verificabile non si scrive, si chiede. Se l'offerta del progetto è dichiarata "da definire", non
  si descrive.

## 2. Il mercato e i trend del settore

I punti 1 e 2 solo se il progetto ha `mercato.md` (se non ce l'ha, dillo in una riga); il 3 e
il 4 sempre.

1. **Trend del settore, aggiornati da soli** (Gianluca, 2026-09-23). Se la sezione «Trend del
   settore» ha l'ultimo aggiornamento più vecchio di **7 giorni**, o è vuota, aggiornala adesso con
   ricerca web, su quello che il file stesso dice di cercare. Ogni voce con fonte, data e livello di
   affidabilità; togli quello che ha più di 30 giorni; aggiorna la data in cima.
2. I trend scelgono **l'ingresso, non il tema**: il tema lo decide il piano editoriale. Un evento
   o una notizia si aggancia solo se c'entra davvero con il meccanismo del contenuto, e solo con
   fatti verificati. Se i concorrenti stanno già facendo lo stesso contenuto, cambia angolo.
3. **I vuoti di mercato** del progetto (in `mercato.md` o, se non c'è, nel `CLAUDE.md`): verifica
   su quale si appoggia il contenuto. Se non si appoggia a nessuno, sta competendo dove gli altri
   sono già presenti.
4. In chat, prima dei testi, una riga: quale trend (o nessuno) e quale indicazione di piattaforma
   hai usato, con la data.

## 3. Le piattaforme: leggi, verifica, cerca quello che manca

Per **ogni** canale su cui esce il testo:

1. Leggi il suo file in `strumenti/algoritmi-social/`, partendo da «Come si usa adesso» e «Trend
   del momento» se ci sono, e annota la data di `Ultima verifica:`.
2. Più vecchio di **14 giorni** o incompleto: l'attività del lunedì ha saltato almeno un giro, ed
   esegui `/algoritmi-social` per quel canale prima di scrivere. Senza ricerca web, dichiara che
   stai lavorando su dati scaduti ([regole-dati](reference/regole-dati.md)).
3. **Se il file non copre il caso** (una lunghezza per quel formato, un metodo per gli hashtag,
   dove mettere il link), **cerca prima di scrivere**: l'ultimo rapporto del lunedì se c'è, poi
   fonti aggiornate. "Il file non lo dice" non è una risposta: è il segnale che manca un dato.
   Quello che trovi e regge si propone per il file di piattaforma.
4. Dove le fonti non concordano, scegli dentro l'intervallo più prudente e dichiaralo.
5. Leggi anche le regole di canale del progetto (`canali.md`): sono le scelte che il progetto ha
   derivato da quei fatti, e valgono. Se il file nuovo ne supera una, proponi la modifica senza
   riscriverla ([regole-dati](reference/regole-dati.md), «Quando cambia un file di piattaforma»).

## 4. Cosa dire

Mai partire dalla frase. Prima:

1. **Chi legge** e cosa sta già pensando quando arriva sul testo.
2. **Cosa deve cambiare** nella sua testa perché l'azione finale abbia senso.
3. **Qual è l'obiezione** che gli impedirebbe di compierla. Un copy che non risponde a
   un'obiezione reale è decorazione.
4. **In che condizione è e a che distanza sta** (`copywriting.md` §2 e §3): problema, bisogno o
   desiderio, uno solo; e il passo che il testo può chiedergli da lì.
5. **Quale vuoto colma** il testo e **quale schema** lo ordina (§4 e §6). Il lavoro più fitto va
   dove il lettore decide: hook, prima riga, titoli delle slide, CTA.

- **Un solo meccanismo per contenuto**: mai due spiegazioni diverse dello stesso fenomeno.
- **L'hook può essere netto, non falso.** Controllo: se qualcuno lo contestasse, il resto del testo
  (o l'articolo da cui viene) mi darebbe ragione? Se no, si riformula tenendo la forza. Se la
  versione più efficace è anche imprecisa e non esiste una formulazione che sia tutte e due le cose,
  **presenta le due versioni con il loro costo** e lascia decidere a chi è responsabile dei
  contenuti.
- **Test di riconoscibilità** (quello di `voce.md`): questo testo passerebbe identico sul profilo
  di un concorrente, cambiando solo il nome? Se sì, va riscritto, non ritoccato.

## 5. La CTA

**Una sola azione per contenuto, per canale.** Mai due in competizione ("salva e condividi",
"iscriviti e commenta"), anche se sembrano complementari.

Si sceglie ogni volta, **sui tre criteri insieme**, e non è una formula fissa da ripetere a ogni
post (una formula ripetuta diventa la struttura prevedibile che le piattaforme penalizzano):

1. **Che contenuto è, e quindi quale metrica.** Un contenuto in cui ci si riconosce o su cui
   discutere chiama il commento; un metodo, una checklist, un quadro da riprendere chiama il
   salvataggio; un approfondimento chiama il clic; un evento con una data chiama l'iscrizione. Il
   formato da solo non decide: un carosello può chiedere un commento e un post un salvataggio.
2. **Cosa premia oggi la piattaforma**, dal suo file verificato (passo 3).
3. **Quanto è grande la community, e cosa dicono i dati della pagina** (dove li indica
   `dati.md`). Community piccola: niente CTA di condivisione, perché in pochi vedono il post e in
   pochi possono mandarlo a qualcuno. Dove si commenta poco, la domanda dev'essere vera e facile da
   rispondere subito, senza aprire altro.

Regole fisse:

- **Azione e beneficio insieme, e il costo detto onestamente**: cosa fare, cosa ne ricava chi lo fa,
  quanto tempo chiede (`copywriting.md` §5).
- **L'azione si dice sempre**, su ogni canale ("scrivilo nei commenti", "salvalo", "iscriviti dal
  link in bio"). Una domanda da sola non basta.
- **Mai formule esca o generiche**: "commenta SÌ se sei d'accordo", "agree?", un "che ne pensi?"
  isolato. Una domanda specifica e legata al contenuto resta valida.
- **Parla con la voce di chi pubblica**: una pagina di brand non dice "scrivimi", un profilo
  personale non parla al plurale del brand. Le parole della CTA le fissa il progetto
  (`canali.md`, `voce.md`).
- **Se la CTA chiede un'azione per adesso** (un commento, un'iscrizione), il motivo vale adesso:
  "commentalo dopo la gara" dice che oggi non serve. Non vale per il salvataggio di un contenuto
  che serve proprio dopo (un quadro, una checklist): lì il motivo è l'uso, detto in concreto
  ("riaprilo quando prepari la prossima trattativa"), mai un generico "ti servirà".
- **Il link.** Dove sta lo decide il file di piattaforma, dentro le regole del progetto (c'è chi
  non mette link mai). Il link si mette solo se l'azione chiesta è il clic: con una CTA di commento,
  un link nel primo commento è una seconda azione che compete con la prima. **La CTA dice
  esattamente dove si trova il link**: "nel primo commento", mai "qui sotto".
- **Nello stesso canale, caption e ultima slide chiedono la stessa identica cosa**, con le stesse
  parole se è una domanda. Fra canali diversi la CTA può cambiare.
- **Niente promesse che il progetto non mantiene ancora**: controlla in `dati.md` e `aperto.md`
  che automazione, newsletter o pagina di iscrizione esistano.
- La CTA del piano editoriale è **un punto di partenza, non la decisione**: se i tre criteri
  indicano altro, proponi il cambio e dì che la riga (tipo di CTA e KPI) va aggiornata, con la sua
  ragione. Se un modello della libreria del progetto chiede due azioni, segnalalo senza correggerlo.

## 6. Un testo scritto da capo per ogni canale

Si riusa il **concetto**, mai le parole. Nessuna frase in comune fra i canali, tranne la CTA quando
è identica per necessità. Mai un testo pensato per un canale e poi riadattato togliendo o
aggiungendo pezzi: una caption copiata da un altro canale non è una caption per quel canale.

Chi c'è su ogni canale lo dice `canali.md` del progetto; come si costruisce il testo (lunghezza,
dove taglia, hook, parole chiave) il file di piattaforma. Da lungo a breve non si taglia: si
sceglie il passaggio che regge da solo. Da video a testo serve più sostanza, non meno.

**Per un carosello, prima la caption di ogni canale, poi le slide**: così l'ultima slide nasce
già con la CTA della caption di quel canale, invece di essere aggiustata dopo. Il resto del
formato: [formati.md](reference/formati.md), «Carosello».

## 7. Hashtag e parole chiave

1. Numero dentro il limite del file di piattaforma.
2. Scelti per questo contenuto, mai ricopiati dal post precedente.
3. Mix: un tag generico del settore e il resto specifico del tema o del formato. Nessun tag col
   nome del brand, che nessuno cerca.
4. Gli hashtag classificano, non portano copertura da soli: le parole chiave nel testo contano di
   più.
5. **Il volume si misura dove il progetto ha una banca degli hashtag** in `canali.md`, con il suo
   metodo (Gianluca, 2026-09-23): si sceglie da lì, il numero va nella tabella, e se la banca ha
   più di 14 giorni o manca un hashtag si rimisura come dice lei e la si aggiorna. Il riferimento
   fra canali (per esempio i numeri di Instagram per LinkedIn) vale solo se la banca lo prevede,
   e si scrive "assunzione". **Senza banca** gli hashtag si usano come dice il progetto e dentro il
   limite del file di piattaforma, senza volume; su LinkedIn fanno da etichetta. **Su Instagram
   niente raccolta automatica** (script, estensione Chrome, pagine interne): va contro le sue
   condizioni d'uso (Gianluca, 2026-09-23).

## 8. Voce e revisione

- Scritto come lo direbbe chi l'ha vissuto (voce di FYM, «Detto da chi l'ha vissuto»), nel
  registro di `voce.md`. Tu in comunicazione di massa, un solo registro dall'inizio alla fine.
- **Niente segni del testo generato**: la formula "non è X, è Y" in ogni variante, compresi "non X,
  ma Y" e il "cambia domanda"; chiasmi e parallelismi levigati; triadi decorative; frase a effetto
  in chiusura; trattino lungo. Se `voce.md` è più stretta della voce di FYM (per esempio vieta anche
  il contrasto fra due scene), vale `voce.md`.
- Le parole del modello: il glossario di `CLAUDE.md` del progetto e le parole che `voce.md` vieta.
- **Revisione finale**: prima il [controllo del nucleo](../../commerciale/tone-of-voice.md#il-controllo-prima-di-consegnare),
  con le ricerche fatte davvero, poi **tutta la lista di revisione di `voce.md`**, non solo con gli errori
  corretti l'ultima volta.
- **Su un testo già lavorato** si interviene solo sulle parti richieste: le formulazioni approvate
  hanno un costo di validazione che riscriverle azzera. Una parte non richiesta ma debole si
  segnala, non si cambia.

## 9. La consegna

**Dove va cosa** lo dice `dati.md` del progetto (cartelle, archivio dei contenuti, colonne del
piano editoriale). Se non lo dice, si chiede, e si consegna in chat. Niente segnato come
pubblicato senza conferma.

In chat si consegna sempre, in quest'ordine:

1. **un blocco per canale** con il testo pronto da incollare, e sotto il primo commento se serve;
   per un carosello anche il testo delle slide e, se sono state generate, dove stanno le immagini;
2. la tabella **«Controllo per canale»**, con i valori reali del testo accanto a quelli del file o
   della fonte:

   | Canale | Lunghezza (testo / riferimento) | Hashtag (numero / limite e metodo) | Parole chiave | Formato | Parole per slide (min-max / riferimento) | CTA | Fonti e date |
   |---|---|---|---|---|---|---|---|

3. **nessuna scelta senza dato** (Gianluca, 2026-09-16): dove il file non copre un valore si è
   cercato (passo 3) e il valore ha accanto il dato e il suo livello di affidabilità. Se dopo la
   ricerca il dato non esiste, si scrive cosa si è cercato;
4. quello che serve confermare (un fatto non verificabile, un destinatario dubbio, una decisione
   aperta da cui il testo dipende);
5. **uno o due commenti qualificati per canale** (Gianluca, 2026-09-16), con **come rispondere
   nella prima ora** e un esempio di rilancio. Ognuno parte da un elemento preciso di quel
   contenuto: una domanda che starebbe sotto qualunque post sullo stesso tema è l'errore del
   18/09/2026. **Seguono la CTA**: se il contenuto chiede il salvataggio o un'altra azione, il
   commento non fa una domanda, che sarebbe una seconda azione. Da un profilo personale si
   scrivono solo con il consenso di chi firma. Il resto: [formati.md](reference/formati.md),
   «Commenti».

Un valore fuori dall'intervallo del file **si riscrive**, non si giustifica come preferenza. Si
esce dall'intervallo solo se lo decide chi è responsabile dei contenuti del progetto (lo dice
`canali.md`), e la tabella lo scrive.

## 10. Ultimo passo: verifica la tabella, davvero

Prima di mandare la risposta, rileggila come la rileggerebbe un controllore (fino al 2026-09-25
lo faceva un controllo automatico di SCS; Samuele).

- **Se nella risposta c'è un testo da pubblicare** (una caption o un post: hashtag, "link in bio",
  "nei commenti", "primo commento", "iscriviti" sono i segnali), **c'è la tabella e si chiama
  «Controllo per canale»**. Se i blocchi non sono testi da pubblicare, scrivi "Controllo per canale:
  non applicabile" e il motivo in una riga.
- **Una riga per ogni canale** consegnato, nessuno escluso.
- **Lunghezza**: il numero di caratteri del testo, contato e non stimato (per esempio con
  `python3 -c "print(len('''...'''))"`), accanto all'intervallo del file; dentro l'intervallo.
- **Hashtag**: quanti sono, il limite del file, il metodo (generico più specifici). Il volume di
  ciascuno solo se il progetto ha una banca (passo 7.5), con "assunzione" dove la banca usa il
  riferimento di un altro canale; senza banca, "nessuna banca: volume non misurato".
- **Parole chiave**: quelle che ci sono nel testo, per la ricerca interna della piattaforma.
- **Formato**: quello consegnato (post, carosello di N slide, immagine 4:5...), coerente con il
  file e con il tema del progetto.
- **Parole per slide** (solo caroselli): la slide più corta e la più lunga, contate, accanto al
  valore del progetto (`canali.md`) o, se non ce l'ha, del file di piattaforma. "Non applicabile"
  per gli altri formati.
- **CTA**: una sola, con l'azione detta, e dove sta il link se c'è.
- **Fonti e date**: il file di piattaforma con la sua `Ultima verifica:`, le altre fonti con data e
  livello di affidabilità.
- **In nessuna cella "scelta mia"**, e nessun valore fuori intervallo senza la decisione di chi può
  prenderla.
- Se una riga non passa, **si corregge il testo**, non la tabella. Poi si rilegge
  [errori-gia-fatti.md](reference/errori-gia-fatti.md) e solo allora si consegna.

## Ancora da verificare

- **Il collaudo.** Scritta il 2026-09-25 riunendo le skill vecchie. Collaudata lo stesso giorno
  su SCS e su Negoziazione.eu, due giri su brief già usciti dal piano editoriale: nessun contenuto
  vero ancora pubblicato con lei.
- **I file di piattaforma non hanno ancora «Come si usa adesso» e «Trend del momento».** Al
  2026-09-25 nessuno dei cinque ha le due sezioni che l'attività del lunedì deve riscrivere, e la
  cartella dei rapporti non c'è ancora: l'attività esiste dal 2026-09-23 e il primo lunedì è il
  2026-09-28. Se dopo quella data mancano ancora, l'attività non gira. Finché mancano, si legge il
  file intero.
- **`linkedin.md` non ha una sezione sulla newsletter nativa.** Finché manca, per la newsletter vale
  quello che dice [formati.md](reference/formati.md): dichiararlo, non applicare le regole dei post.
- **Le linee senza cartella** (Scuola, corporate, COACHING.it) non hanno canali, CTA e banca degli
  hashtag scritti da nessuna parte: la skill li chiede ogni volta. Il primo lavoro vero su una di
  loro dice se serve una cartella in `progetti/`.
- **Commenti qualificati e trend del settore** sono nati su SCS. Su Negoziazione.eu i commenti
  non sono mai stati fatti, e manca da quale profilo esce ogni contenuto (`aperto.md` del
  progetto, «Da decidere con Gianluca»).
- **Un nome già usato.** Una prima `fym-social` di Gianluca (audit e piano, 2026-09-16) è stata
  cestinata il 2026-09-21: questa fa un altro lavoro, e se chi la usa si aspetta quello va detto.
