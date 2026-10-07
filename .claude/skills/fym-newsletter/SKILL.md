---
name: fym-newsletter
description: "Le newsletter di FYM: la corporate firmata da Piercarlo (con due schemi, la storia della settimana o dal problema alla soluzione con l'aforisma in fondo), la Scuola firmata da Alberto, e le altre serie. Chiede prima per quale serie, per chi e con quale scopo; porta dal materiale al testo pronto da incollare in Delera, con quattro coppie di oggetto e preheader, il controllo della voce e i promemoria di invio; su richiesta archivia l'uscita nel documento delle newsletter. Non carica niente su Delera, perché l'API non crea campagne. Attiva su 'fym-newsletter', 'newsletter', 'newsletter corporate', 'newsletter di Piercarlo', 'newsletter di Pierre', 'newsletter della Scuola', 'newsletter problema-soluzione', 'newsletter alla Beltrami', 'scriviamo la newsletter', 'newsletter B2B', 'la newsletter di questa settimana'."
metadata:
  creata: '2026-09-15'
  da: "Samuele; lo schema dal problema alla soluzione, l'aforisma e le rese vengono da pier-newsletter, la skill di Piercarlo del 2026-09-22, riunita qui il 2026-09-26"
  voce-da: "../../commerciale/tone-of-voice.md"
  serie-da: "../../commerciale/voce/"
---

# fym-newsletter: le newsletter di FYM

Questa skill è un guscio. Le regole di scrittura stanno nel [nucleo della voce](../../commerciale/tone-of-voice.md) e nella scheda della serie: qui si **caricano**, non si ricopiano. In questo file c'è solo la procedura, con le trappole di Delera e dell'archivio. Se la newsletter esce scritta male, si corregge la scheda o il nucleo; se esce montata male, si corregge questo file.

**Stato: in prova.** Uscite fatte così: la 19 (2026-09-16) e la 20 (2026-09-24), tutte e due della serie corporate con lo schema 1. Lo schema 2 e la serie Scuola non sono mai usciti con la skill.

**Una skill sola per tutte le newsletter** (Samuele, 2026-09-26, d'accordo con Piercarlo). Fino a quel giorno la corporate aveva anche `pier-newsletter`, la skill di Piercarlo: il suo schema è diventato lo schema 2 della [scheda corporate](../../commerciale/voce/newsletter-corporate.md), l'aforisma e le rese sono qui.

## 0. Per quale serie, per chi, con quale scopo

Prima di tutto, **chiedi** (proponi quello che è ovvio, ma aspetta la conferma):

1. **La serie**, che decide la scheda da caricare:
   - **corporate**, firmata da Piercarlo, per manager, HR e imprenditori: [newsletter-corporate.md](../../commerciale/voce/newsletter-corporate.md);
   - **Scuola**, firmata da Alberto, per chi valuta se formarsi come coach: [newsletter-scuola.md](../../commerciale/voce/newsletter-scuola.md). È una fotografia mai messa alla prova: dillo;
   - **istituzionale mensile**, o un'altra serie: non ha una scheda. Si parte dalla sua riga in [funzioni.md](../../commerciale/voce/funzioni.md), e dopo l'uscita si propone a Samuele la scheda nuova;
   - la newsletter nativa di **LinkedIn** non è di questa skill: è di `fym-social`.
2. **Per la corporate, lo schema**: la storia della settimana (1) o dal problema alla soluzione (2). Sceglie chi firma.
3. **Lo scopo dell'uscita**: la funzione della serie in `funzioni.md` e l'**azione attesa** (risposta diretta, click, prenotazione), che si dichiara prima dell'invio (§ 8).

## 1. Prima di scrivere

1. **Chi c'è già**: i fogli in [`cantieri-aperti/`](../../cantieri-aperti/INDICE.md) e la tabella dei [passaggi](../../passaggi-di-consegna-claude/INDICE.md), come per ogni lavoro su questo Drive.
2. **Carica interi** il nucleo e la scheda della serie, più il [glossario](../../contenuti-didattici/glossario-concetti.md) come chiede il nucleo. La bozza deve rispettare quello che c'è scritto oggi, non il ricordo che se ne ha.
3. **Guarda le uscite già inviate.** Per la corporate è il Documento Google «Content Marketing Corporate FYM» (id `1eH1oOfXN6Yz8ast-oDV-gjB1fC8Zacw4W4Mw9LD-Iv0`): il connettore Drive lo legge intero con `read_file_content`. Serve a non ripetere un tema, un oggetto o un aforisma già usato, a sapere che numero ha l'uscita nuova (la scheda INVIATE, in fondo), e a vedere se in DA INVIARE c'è già un'uscita sullo stesso tema. Se c'è, dillo prima di scrivere. Per le altre serie, chiedi dove stanno le uscite.
4. **Chiedi quello che sa solo chi scrive**, non dedurlo:
   - per lo schema 1, la **storia reale** della settimana, raccontata come la direbbe a voce (chi, anonimo; cosa è successo; cosa ne è uscito);
   - per lo schema 2, il **problema** come lo direbbe a un cliente al telefono, una **scena reale** se c'è, e il **servizio FYM** che lo risolve, con il suo ID nel listino (foglio `1K5iSYuQfb3oTPE8srYwZ6oib7uukFJRw_l2r4v3qKoc`, scheda *FYM listino*);
   - **cosa deve fare chi legge** alla fine, e i **link già pronti**: nelle email di Delera i link sono tracciati e non si ricostruiscono;
   - se c'è un **evento con una data**: è l'unico caso in cui una scadenza entra nel testo.
5. **Verifica i fatti** su un contenuto di FYM (un percorso, un video, un corso): quante sessioni, chi è il coach, cosa c'è dentro. Si cerca su Gmail e sul Drive. Il 2026-09-15 il percorso «su YouTube» sembrava L0059, ed era B0242. Quando il testo racconta come lavoriamo, le parole sono quelle di `contenuti-didattici/`.

Non inventare episodi, frasi di clienti o numeri. Se la frase esatta del cliente non c'è, parafrasa e dillo.

## 2. La bozza

Scrivi seguendo la scheda e lo schema. Consegna **il testo in chat**, pronto da incollare: grassetti in Markdown, `{{contact.first_name}}` nel saluto, i link per esteso.

Prima di consegnare fai **il controllo del nucleo** (la sezione «Il controllo, prima di consegnare», con le ricerche fatte davvero), poi questi, che sono della newsletter:

| Controllo | Dove sta la regola |
|---|---|
| Racconto al passato prossimo, problema al presente | scheda della serie, *Regole* |
| Righe corte, grassetti sui passaggi che reggono il pezzo | scheda della serie |
| CTA: per lo schema 1 i link se ci sono, altrimenti rispondere; per lo schema 2 una sola, e il P.S. è la seconda porta | scheda corporate |
| Schema 2: sotto le 400 parole, sei grassetti al massimo, un aforisma solo, in fondo, non già usato | scheda corporate, schema 2 |
| Link di YouTube senza `&t=`, salvo che chi scrive lo chieda | questa skill (Samu, 2026-09-15) |

Quando chi firma corregge, vale il nucleo («Quando qualcuno corregge il testo»). E se segnali un errore, dagli il nome giusto: «avessi sbagliato» è congiuntivo, non imperfetto (2026-09-15).

## 3. Oggetto e preheader

Proponi **quattro coppie**, con l'oggetto sotto i 50 caratteri perché sul telefono non venga tagliato, mai il nome del servizio. Costruiscile su chi riceve la mail, come dice la scheda della serie. Per ciascuna una riga sul perché, e una consigliata. Controlla che nessuna ricalchi un oggetto già uscito e che il preheader aggiunga un'informazione invece di ripetere.

## 4. L'aforisma, per lo schema 2

Il foglio è «Master Contenuti FYM», id `1KM-kn7Rrc9lUJdp4M6in8AzrbL_m4JKNDGTn48fb4zs`. La prima scheda ha **1.473 aforismi** (contati il 2026-09-22) con le colonne Contenuto, Autore, Argomento e ventitré colonne di tema segnate con una X. Solo 145 righe hanno un tema e 301 un argomento: **si cerca per parole chiave nel testo**, i tag da soli non bastano.

Come si legge, verificato il 2026-09-22 sul Mac di Pierre:

1. Il foglio **non è pubblico** (l'esportazione risponde 401, niente `curl`), e `read_file_content` del connettore Drive lo **tronca** dopo poche decine di righe.
2. Si usa `download_file_content` del connettore Drive con `exportMimeType` = `text/csv`. Il risultato supera la soglia del client e **viene salvato in un file** (il messaggio di risposta dice il percorso): dentro c'è un JSON con il CSV in base64.
3. Si lancia lo script con quel percorso e le parole chiave del tema:

   ```
   python3 "<Drive>/strumenti/fym-newsletter/scripts/aforismi.py" <file-risultato> errore sbagli colpa
   ```

   Stampa fino a quindici aforismi che contengono almeno una parola, con autore, argomento e temi. Accetta anche `--tema Leadership`. È testo puro, senza librerie.
4. Si propongono **tre** aforismi con una riga su perché chiudono il pezzo, e sceglie chi firma. Prima si controlla nelle uscite inviate che non sia già stato usato. Testo e autore si copiano **come stanno nel foglio**: un refuso si corregge nel foglio.

Se il risultato non viene salvato in un file, lo si dice e si chiede a chi firma di incollare l'aforisma: non si inventa e non si pesca a memoria.

## 5. Quando serve un altro testo

La newsletter porta quasi sempre da qualche parte. Se la destinazione non c'è o va riscritta, non la si scrive qui:

- una **pagina** o una landing a cui punta la CTA: `fym-copy`, e la newsletter aspetta il link;
- un **post** che accompagna l'uscita, o la newsletter nativa di LinkedIn: `fym-social`;
- una **conferma o un promemoria** per chi risponde o si iscrive: la scheda [messaggi-di-servizio.md](../../commerciale/voce/messaggi-di-servizio.md).

Tutte leggono lo stesso nucleo e gli stessi fatti, così i testi non si contraddicono.

## 6. Il montaggio in Delera, che fa una persona

La skill **non carica e non invia niente**. Verificato il 2026-09-15: l'API di Delera crea e aggiorna modelli di email, ma **non crea, programma né invia campagne**. Insieme al testo consegna questi promemoria:

- **Invio per batch** (per esempio 200 contatti ogni 20 minuti): serve a non finire nello spam, e non si cambia.
- **Niente test A/B**: in Delera funziona solo con «Invia adesso» o «Programma», non con il batch.
- **Il campo «Invia su»** con i giorni è obbligatorio: va controllato che sia acceso.
- **Giorno e ora**: per la corporate la pagina di iscrizione promette **ogni mercoledì alle 10:00**.
- **Il numero nel nome della campagna** deve essere quello dell'uscita. Il 2026-09-15 in Delera era finito 17 al posto di 18.
- **Email di test a chi firma**, che la legge e la approva prima dell'invio. Sempre.
- Il footer «Non rappresenti un'azienda?» della corporate resta.
- Se incollando nell'editor si perdono i grassetti, vanno rimessi a mano.

## 7. L'archivio nel documento, solo se richiesto

Ogni uscita corporate inviata va nel documento «Content Marketing Corporate FYM» come **sottoscheda di INVIATE**, in fondo, col nome `N - oggetto` (per esempio «18 - Come valuti un coach prima di sceglierlo?»). Dentro, lo stesso formato delle altre: **Oggetto:**, **Preheader:**, **Corpo:**, poi il testo con i grassetti.

**Il connettore Drive non può farlo**: cambia solo titolo e cartella di un file, non scrive dentro un documento. Si fa dall'estensione Chrome, **sul Chrome di chi sta lavorando** e mai su quello di un collega (come riconoscerlo sta in [installazione.md](../../installazione.md), sezione sull'estensione Chrome). Si chiede prima di iniziare.

1. Il menu ⋮ della scheda INVIATE compare passandoci sopra col mouse. Da lì, **Aggiungi sottoscheda**: nasce in fondo e si apre vuota.
2. Clic nella pagina, poi si scrive. Gli a capo funzionano e `cmd+b` accende e spegne il grassetto. `* ` a inizio riga fa l'elenco puntato; l'a capo su un punto vuoto lo chiude ma non lascia la riga vuota, che prima di «Buon lavoro» va rimessa a mano.
3. **Rinominare è il passo pericoloso.** Il riquadro delle schede si sposta mentre il documento carica: il 2026-09-15 il doppio clic è finito sulla scheda 16 e l'ha rinominata. E Google dà da solo alla sottoscheda nuova il nome della prima riga del testo («Oggetto: …»), quindi il doppio clic apre quel nome e non «Scheda 36» (2026-09-24). Perciò: doppio clic sulla scheda, **poi uno screenshot per controllare che il campo del nome aperto sia quello giusto**, e solo dopo `cmd+a`, il nome e Invio. Se il campo non si è aperto, `cmd+a` seleziona il testo della pagina e lo sovrascrive.
4. Alla fine si controllano i nomi delle schede vicine e che lo stato del documento sia «Salvato in Drive». Poi si chiude la scheda del browser.

## 8. Cosa si misura

Ogni uscita dichiara prima dell'invio la sua **azione attesa** e cambia **una cosa sola** rispetto alla precedente: lo schema, il tipo di CTA (link o risposta), lo stile dell'oggetto (immagine o domanda), la presenza del P.S. Dopo l'invio si annota nella sottoscheda dell'uscita, sotto il testo, una riga «Rese:» con aperture, click, risposte ricevute e prenotazioni, dal CSV all-stats di Delera e dalla casella. Senza test A/B è l'unico confronto che abbiamo: un'uscita contro l'altra, sapendo che cambia anche il tema.

## Ancora da verificare

- **La validazione di Piercarlo** sulla scheda corporate: la skill applica regole che lui non ha ancora visto tutte, compreso il modo in cui il suo schema è stato riunito qui.
- **Le rese**: nessun dato. Le prime uscite con lo schema 2 dicono se «rispondi a questa email» porta più risposte del link.
- **Il ramo Scuola** e l'istituzionale mensile, mai provati.
- **La numerazione nel documento**: il 2026-09-15 un'uscita già inviata stava ancora in DA INVIARE col numero 18. Se capita di nuovo, va chiesto a chi gestisce il documento.
- **La lettura del Master Contenuti dipende dal client**: il salvataggio su file scatta perché il risultato è grande. Se il client cambia soglia, il § 4 va rifatto. Da provare anche su Windows.
- **I collegamenti a `pier-newsletter`** sui computer dove era installata (il Mac di Pierre, e il PC dove è girato `installa-fym.ps1` il 2026-09-22) puntano nel vuoto dal 2026-09-26: vanno tolti a mano da `~/.claude/skills/`.
