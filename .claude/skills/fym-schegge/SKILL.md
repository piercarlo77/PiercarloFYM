---
name: fym-schegge
description: L'archivio interrogabile di Schegge di Coaching, le dirette di FYM su YouTube. Tiene una scheda per puntata (ospite, ruolo, settore, momento di carriera, temi, a chi consigliarla) con le citazioni migliori e il loro timecode, costruita dai sottotitoli e non dalle descrizioni. Serve a tre cose, cioè trovare le puntate da mandare a un lead e le frasi da citare in chiamata, dare spunti ai social e ricavare clip. Scarica e scheda le puntate nuove. Attiva su 'fym-schegge', 'schegge', 'Schegge di Coaching', 'quale puntata mando', 'una puntata per questo lead', 'chi ha detto che', 'una testimonianza su', 'citazione di un ospite', 'aggiorna l'archivio delle schegge', 'scheda la puntata'.
---

# fym-schegge: l'archivio di Schegge di Coaching

Schegge di Coaching è la diretta di FYM su YouTube, sul canale «FYM Formazione in Azione»: «il
coaching visto da più occhi e raccontato da più voci». Ogni puntata è un ospite che racconta come
usa il coaching nel suo lavoro. Questa skill ne fa un archivio in cui si cerca.

**La fonte è quello che si è detto, non la descrizione della puntata.** Le descrizioni perdono le
sfumature, ed è nelle sfumature che sta il valore. Il caso che ha fatto nascere la skill: Giulia
Giacometti (2026-09-28) dice di usare le competenze di coaching più con i pari e con i capi che con
il suo team, cioè il contrario di quello che la comunicazione FYM dà per scontato.

## Dove stanno le cose

- **Il metodo sta qui**, in questa cartella: la procedura, il [formato della scheda](formato-scheda.md)
  e lo script [scarica-sottotitoli.py](scarica-sottotitoli.py).
- **L'archivio sta nel Drive della Scuola**, perché nomina persone reali e riporta le loro parole
  (regola 1 di [../../CLAUDE.md](../../CLAUDE.md)):
  `SCUOLA COACHING STRATEGICO/02_Marketing e comunicazione/02.2_Social media/Schegge di Coaching/`.
  Dentro ci sono:
  - `elenco-puntate.csv`: tutte le puntate note, con la colonna `entra` (`sì`, `no` per i doppioni,
    `da decidere`) e una nota;
  - `sottotitoli/`: un file di testo per puntata, `<titolo> [<id YouTube>].txt`, con il link nelle
    prime righe;
  - `schede/`: un JSON per puntata con lo stesso nome.

**A che punto è una puntata non sta scritto da nessuna parte: lo dicono i file.** Senza sottotitoli
è da scaricare, con i sottotitoli e senza scheda è da schedare, con la scheda è fatta. Un registro
dello stato che ogni sessione riscrive si perderebbe le righe alla prima scrittura in parallelo (vedi
[../../CLAUDE.md](../../CLAUDE.md), «Come si scrive un file qui»). L'elenco lo tocca solo chi aggiunge
una puntata o decide se entra.

## Prima di cominciare

Lo script ha bisogno di due librerie, che stanno sul computer e non sul Drive:

    mkdir -p ~/.claude/fym-strumenti/schegge && python3 -m venv ~/.claude/fym-strumenti/schegge/venv
    ~/.claude/fym-strumenti/schegge/venv/bin/pip install youtube-transcript-api yt-dlp

Si controlla con `~/.claude/fym-strumenti/schegge/venv/bin/python -c "import youtube_transcript_api"`.
Sul Mac di Alberto l'ambiente c'è dal 2026-09-29.

## 1. Aggiornare l'archivio

    ~/.claude/fym-strumenti/schegge/venv/bin/python scarica-sottotitoli.py --quante 15 --novita

- **Mai più di una quindicina al giorno.** YouTube blocca l'indirizzo dopo circa 25 download di
  fila (misurato il 2026-09-29) e per qualche ora non dà più niente. Lo script si ferma da solo e
  lo dice: si riprova il giorno dopo, non subito.
- **`--novita` trova le puntate nuove dalla sigla, non dal titolo.** Guarda le ultime dieci dirette
  del canale e tiene quelle che nei primi due minuti dicono «schegge di coaching». La puntata del
  2026-09-28 non aveva «Schegge» nel titolo, e non tutte stanno nelle due playlist.
- **I doppioni restano nell'elenco con `entra` = `no`**: le versioni verticali con 📱, la versione
  inglese di «Il mio ruolo strategico». Le due serie affini, «Schegge di (Sport) Coaching» e
  «schegge di formazione» sulla negoziazione, sono `da decidere`: lo decide chi cura la serie.

## 2. Schedare una puntata

Si legge **tutto** il file dei sottotitoli, non l'inizio, e si scrive la scheda nel
[formato della scheda](formato-scheda.md). Tre cose da sapere sul testo di partenza:

- **I sottotitoli sbagliano i nomi propri.** Quelli già visti: FYM diventa «Film» o «FIM»,
  Schegge diventa «Scheggio» o «scheggia», Culligan diventa «Calligan», «pari grado» diventa
  «parigo». Dalla serie numerata (2026-09-30): FYM anche «fil», «Fim», «fin», «fimma», «filmm»;
  coachee diventa «coc», «cooc», «cocci», «Coci», «cci»; HR diventa «Cher», «Chair», «char»,
  «tchr»; tutor diventa «tutto»; LAB diventa «Labor»; Centanni diventa «100anni», Ziantoni «zia
  Antoni»; von Foerster diventa «Ein bor firster», Watzlawick «Paul vaslav», Gallwey «Galway»,
  Fisher e Ury «fiser» e «Yuri». Dal giro del 2026-10-02: FYM anche «FM»; Schegge anche «Sketcch»,
  «segge», «scheggio»; coach anche «coccio», «coccia», coaching «con cinghia»; career coaching
  «carrier coaching»; one down / one up «on down», «app»; counselor «cansolo»; Russ Harris «rose
  Harris»; Roberta Milanese «Roberto Milanese»; Watzlawick anche «Vazlavic»; disfunzionali «di
  funzionali»; imagery «majery», «maeri»; Germana «German» o «Germania»; Rowling «Rowing»;
  LinkedIn «link ring». Dalle puntate con Samuele (2026-10-02): FYM anche «Fi», «F»; Spitaleri
  «spiler»; acroyoga «a Croga», «crooga»; laboratori «lavoratori»; INPS «IMPS»; Ramacharaka
  «Ramaciaraka». Quando se ne trova uno nuovo, lo si aggiunge qui. Un nome che non si riconosce con
  certezza va in `da_verificare`, non si indovina: «Calligan» era Culligan, e l'ha detto Alberto.
- **Non dicono chi parla.** Il segno `>>` segna i cambi di voce solo a volte, e a volte mette la
  domanda e la risposta nello stesso blocco. Chi parla si capisce dal senso. Se non è sicuro, la
  citazione non si attribuisce.
- **Chi conduce e chi è ospite si stabilisce per ogni puntata** (Alberto, 2026-09-29): le stesse
  persone hanno fatto l'una e l'altra cosa. Le regole sono nel formato.

Se una sessione ne scheda molte, una puntata per volta, e la scheda si scrive subito: se la
sessione si interrompe, le schede fatte restano.

## 3. Cercare

**Per tema** («chi ha parlato di resistenze al cambiamento?»): si leggono le schede e si
restituiscono le citazioni con il tema, con chi parla, il minuto e il link.

**Per un lead** («ho al telefono una responsabile HR di una multinazionale che dice di non avere
tempo»): si chiede, se mancano, ruolo, tipo di organizzazione, momento di carriera, bisogno e
obiezione. Poi si confrontano con `profilo_lead`, `da_consigliare_a` e i temi. Si restituiscono:

- **uno o due esempi da raccontare**, dai `ganci` delle schede (vedi il
  [formato](formato-scheda.md)): la storia in terza persona e senza nome, chi è in poche parole,
  cosa sentirà il lead al passaggio;
- **per ognuno, i due link da mandare dopo la call**: dal passaggio, con il minuto, e dall'inizio.
  Il messaggio che li accompagna segue la scheda
  [uno-a-uno](../../commerciale/voce/uno-a-uno.md) e il controllo del
  [nucleo](../../commerciale/tone-of-voice.md): parla della storia raccontata e non nomina l'ospite
  (il nome si usa solo dopo il suo permesso), porta i link corti `youtu.be/<id>?t=<secondi>`, regge
  da solo se lo si rilegge il giorno dopo, e chiude con una domanda sulla persona. Il modello:
  «Ciao [nome], come promesso ti mando la puntata di Schegge di Coaching con la storia che ti ho
  raccontato. La parte di cui ti parlavo comincia al minuto 09:56: [link]. Se vuoi sentirla
  dall'inizio: [link]. Quando l'hai ascoltata, mi dici se ti ci ritrovi?»

Le citazioni non si leggono al lead: servono ai social e alle clip. Una citazione con `consenso: no`
non si propone mai.

## 4. Prima che una citazione esca

In vendita per iscritto, sui social, in una landing, in una clip. Tre passi, in quest'ordine.

1. **Le parole esatte.** Si ritrascrive con Whisper solo quel passaggio, dall'audio, e si
   correggono `testo` e `verificata_su_audio`. **Bloccato sul Mac di Alberto dal 2026-09-29:** c'è
   solo Python 3.9, lo yt-dlp che ci gira è troppo vecchio e YouTube gli rifiuta l'audio. Serve
   Homebrew, che porta un Python recente e ffmpeg, e va installato da chi ha la password del Mac.
   Whisper invece c'è già, in `~/.claude/fym-strumenti/trascrizione/`. Chiama ffmpeg anche su un
   WAV già pronto, quindi senza ffmpeg il WAV si legge in Python e si converte con `afconvert`.
2. **Il consenso dell'ospite**, se la citazione porta il suo nome. Si prepara un messaggio di
   cortesia: che cosa vogliamo usare, dove, per quanto tempo, con la frase e il link al minuto.
   Si scrive con la voce di [../../commerciale/voce/uno-a-uno.md](../../commerciale/voce/uno-a-uno.md),
   e **lo manda la persona, non Claude**. La risposta va nel campo `consenso` della scheda. Per chi
   conduce, se è dello staff o della rete FYM, basta un avviso.
3. **Quello che non si usa.** Si ricontrolla `da_non_usare`: vita privata, salute, famiglia.
   Anche se è stato detto in diretta pubblica.

**Uno spunto anonimo** (`attribuzione: no`), usato come tema senza nome né volto, non chiede il
consenso: chiede solo di non far riconoscere chi l'ha detto.

## 5. Social e clip

- **Per i social** la skill dà la materia: la citazione, chi l'ha detta, il tema. Il post lo
  scrive `fym-social`, che legge anche come funzionano le piattaforme questa settimana. Due forme:
  lo storytelling con l'ospite in primo piano, che chiede il consenso, e lo spunto tematico anonimo.
- **Per le clip** i timecode delle citazioni con `uso: clip` sono il taglio già fatto. Il montaggio
  lo fa `fym-video`, di Samuele: si chiama quella skill e non la si modifica senza di lui. Serve il
  video sul disco, quindi vale lo stesso blocco del punto 4.

## Cosa non fa ancora

- **La pagina per Daniela e Germana.** Non hanno Claude, quindi la ricerca per lead durante la
  telefonata sarà una pagina riservata su fym.it (decisione di Alberto del 2026-09-29), come l'area
  clienti. Durante la call si clicca e non si scrive (Germana, 2026-09-30): quattro righe di
  pulsanti con il vocabolario dei `ganci`, e sotto uno o due esempi con i loro link e il messaggio
  da mandare dopo, dando del tu. L'anteprima, con le 16 puntate del 2026-09-30, è
  https://claude.ai/artifact/MM3UtPPgvwGcVMahZYBnzV. Si costruisce con `fym-siti` e `fym-design`.
- **La landing ad personam per lead**, con clip e argomenti emersi in chiamata, pubblicata con
  Bitly. È un'altra skill, che pescherà da questo archivio come da una libreria.

## Ancora da verificare

- Le puntate note sono 62, e 49 entrano (2026-09-29). La numerata #13 sul canale non c'è: privata,
  tolta o mai uscita, non si sa.
- Le date delle puntate: l'elenco del canale non le dà, e lo yt-dlp di questo Mac non riesce a
  leggerle. Per ora si prendono dalla puntata stessa quando le dice, altrimenti restano da verificare.
- Il formato della scheda è nato su una puntata sola: vedi le sue lacune in fondo al
  [formato](formato-scheda.md).
- Chi cura la serie e decide se entrano le due serie affini.
