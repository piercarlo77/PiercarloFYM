---
name: fym-lead-recap
description: La scheda da leggere prima di risentire un lead o un cliente di FYM. Un sottoagente ripercorre tutto quello che ci siamo detti (Delera con i pagamenti, casella info@ con le fatture, calendario, Drive del cliente con offerte e listino, riunioni registrate, Blue, attestati, Leadinfo) e cerca i ganci attuali sul web e, se chi è alla tastiera lo permette, su LinkedIn; in chat torna solo la scheda, con le fonti che non ha potuto vedere e le cose che non tornano. Dopo la chiamata prepara la nota da incollare in Delera. Attiva su 'fym-lead-recap', 'devo risentire', 'devo ricontattare', 'prima di chiamare', 'preparami la chiamata con', 'riassunto di tutto quello che ci siamo detti con', 'non voglio arrivare impreparato'.
---

# fym-lead-recap: la scheda prima di risentire qualcuno

> Creata da Samuele il 2026-09-22, sulle schede di due casi veri fatte a mano quel giorno: un
> lead della Scuola e l'HR di un cliente corporate. Prima di cambiarla si sente lui
> (regola in [../../CLAUDE.md](../../CLAUDE.md)). Prima di scrivere i testi che prepara (la frase
> d'apertura, la nota per Delera) si leggono il nucleo della voce di FYM
> ([../../commerciale/tone-of-voice.md](../../commerciale/tone-of-voice.md)) e la scheda
> [uno-a-uno](../../commerciale/voce/uno-a-uno.md). Prima di consegnarli si fa il
> [controllo del nucleo](../../commerciale/tone-of-voice.md#il-controllo-prima-di-consegnare), poi quello del Passo 3.

Chi sta per richiamare qualcuno non ha tempo di aprire sei posti. Questa skill li apre al posto
suo e restituisce una pagina sola: chi è, cosa è successo, a che punto siamo, cosa non torna,
cosa dire per primo.

**Non è [fym-lead](../fym-lead/SKILL.md).** Quella lavora prima del primo contatto, su liste
di persone che non ci conoscono. Questa lavora su **una** persona o azienda che ha già una storia
con noi. Il metodo per verificare un profilo LinkedIn sta là e qui si richiama, non si ricopia.

## Le regole che vengono prima di tutto

1. **Di un coachee si sa che ha fatto un percorso, mai cosa si è detto.** Date, coach, numero di
   sessioni sì. Trascrizioni, recap, note di sessione, questionari di feedback: non si aprono,
   nemmeno per "capire meglio". È la regola 1 di questo Drive, e vale anche quando il coachee
   oggi è un lead commerciale.
2. **Solo fonti di lavoro.** LinkedIn, sito e notizie dell'azienda, i nostri sistemi. I profili
   personali (Instagram, Facebook privato, Pinterest) si saltano anche quando la ricerca li
   trova: una scheda per preparare una chiamata non è una schedatura della persona.
3. **Una persona si riconosce da mail, telefono o azienda, mai dal nome soltanto.** Le omonimie
   sono la norma: il 2026-09-22 un solo cognome ha dato quattro persone diverse, e un seminario è
   stato quasi attribuito alla persona sbagliata perché lei aveva messo "mi piace" al post di
   una collega. Tutto quello che non è agganciato con certezza si scrive come incerto.
4. **Le contraddizioni si mostrano, non si risolvono.** Se l'SMS dice una data e la mail
   un'altra, la scheda riporta tutte e due con la fonte. Scegliere quella che sembra giusta è
   il modo più rapido di mandare qualcuno in chiamata a dire una cosa sbagliata.
5. **Davanti a una pagina di accesso ci si ferma.** Niente ricerca di password, sul Drive o
   altrove: si dice a chi è alla tastiera che serve il suo accesso, e si va avanti senza quella
   fonte.
6. **Si legge e basta.** Niente messaggi, niente etichette, niente note scritte in Delera,
   niente "mi piace" o collegamenti su LinkedIn. La nota di fine chiamata la incolla chi ha
   chiamato.
7. **La scheda resta in chat.** Mai salvata in Claude FYM, che non ospita dati di persone reali.
   Se va tenuta, il suo posto è la nota in Delera o la cartella del cliente nel Drive della linea.

## Passo 1: chi, e quale delle due strade

Serve un aggancio certo: nome **più** mail, telefono o azienda. Se c'è solo il nome, si cerca in
Delera e, se escono più persone, si chiede quale.

Poi si capisce la strada, perché le fonti che contano sono diverse:

- **Persona** (Scuola, corsi a catalogo, coaching privato): conta Delera, con note, etichette,
  opportunità, SMS e WhatsApp; poi la casella info@ e il calendario dei LAB.
- **Azienda** (corporate): contano il Drive del cliente in FYM CORPORATE, i preventivi, i
  contratti, le fatture, le riunioni registrate; poi l'azienda online.

Una mail con dominio aziendale di solito vuol dire azienda, ma non sempre: un dipendente può
iscriversi alla Scuola a titolo personale. Nel dubbio si chiede.

**LinkedIn si chiede prima di lanciare, sempre.** La visita parte dal Chrome e dall'account di chi
è alla tastiera, e la persona può vederla. Si usa solo il Chrome identificato per `deviceId` nelle
istruzioni del computer (sul Mac di Samu lo dice `~/.claude/CLAUDE.md`). Se per quel computer il
`deviceId` non è scritto da nessuna parte, LinkedIn si salta e la scheda lo dice: non si sceglie un
Chrome dall'elenco per esclusione.

## Passo 2: il sottoagente

La ricerca la fa un sottoagente, non questa conversazione. Una sola conversazione Delera può
superare gli 80.000 caratteri di email automatiche, e ogni risposta successiva della sessione li
rileggerebbe tutti. Il sottoagente legge tutto e restituisce solo la scheda.

Si lancia con lo strumento Agent, tipo `general-purpose`, **non in background** (il passo dopo
dipende dal risultato). Il testo da passargli è [agente.md](agente.md), con in testa i dati del
Passo 1: chi, gli agganci certi, la strada, se LinkedIn è permesso e con quale `deviceId`, e
l'eventuale domanda specifica di chi chiama ("vuole sapere se lo sconto vale ancora").

Mentre lavora si dice a chi aspetta, in una riga, cosa sta facendo.

**Costa, e va saputo.** La prova del 2026-09-22 su un cliente con tre anni di storia ha preso
circa 7 minuti, 63 passaggi e **244.000 token**. Restano fuori da questa conversazione, ma si
pagano lo stesso: è quasi quanto una sessione di lavoro intera. Si lancia prima di una chiamata
che conta, non per curiosità, e non su dieci contatti di fila.

## Passo 3: prima di mostrare la scheda

La scheda che torna si controlla, non si inoltra:

- ogni fatto ha la sua fonte e la sua data, e le date sono assolute (`2026-09-03`, mai "martedì");
- la sezione **Fonti non viste** c'è e non è vuota per finta: se una casella personale o un
  sistema non era raggiungibile, deve esserci scritto;
- niente contenuti da coachee, niente profili personali (regole 1 e 2);
- la voce di FYM, senza trattino lungo;
- se la persona o l'azienda risulta **già in lavorazione da un collega** (un'attività su Blue, un
  cantiere aperto, una mail di pochi giorni prima), va detto in apertura: magari la chiamata
  la deve fare lui.

## La scheda

Sempre questo ordine, che è l'ordine in cui serve durante la chiamata. Corta: chi la legge ha il
telefono in mano.

1. **Chi è.** Ruolo, azienda, come ci conosce, recapiti buoni e recapiti da non usare.
2. **La storia, in date.** Dal primo contatto a oggi, una riga per passaggio, con chi di FYM c'era,
   compresi i corsi conclusi con attestato.
3. **A che punto siamo.** Cosa gli è stato proposto, a che prezzo, con quali scadenze, e se le
   tariffe riservate si possono ancora proporre; stato in Delera (etichette, opportunità, valore,
   attività aperte); pagamenti fatti, in sospeso o contestati.
4. **Cose da chiarire prima di chiamare.** Contraddizioni, scadenze passate, promesse non
   mantenute da noi, automatismi che gli stanno scrivendo cose fuori tempo.
5. **Ganci attuali.** Cosa sta succedendo a lui o alla sua azienda adesso (assunzioni,
   acquisizioni, progetti, cosa ha pubblicato o apprezzato di recente), ciascuno con la fonte.
   Si segnalano soprattutto i ganci che toccano qualcosa che abbiamo già fatto con loro.
6. **Come aprirei.** Una frase d'apertura che parte da un gancio suo, non dalla nostra offerta, e
   due o tre domande da fare.
7. **Fonti non viste.** Cosa non si è potuto leggere e perché.
8. **Fonti.** L'elenco dei link usati.

## Passo 4: dopo la chiamata

Se chi ha chiamato racconta com'è andata, la skill prepara **la nota per Delera**: data, chi ha
chiamato, cosa ha detto la persona con le sue parole dove contano, cosa si è concordato, prossimo
passo con una data. Cinque righe al massimo, da incollare a mano: il connettore Delera è in sola
lettura. Se serve un seguito, si propone [/blue](../blue/SKILL.md) per la task.

## Ancora da verificare

- Provata con il sottoagente due volte, il 2026-09-22. Su un cliente corporate ha trovato più di
  quanto trovato a mano, ma ha mancato il cellulare lasciato in un modulo e ha dato un fatto
  senza fonte. Su un corsista della Scuola con sei anni di storia ha tenuto il perimetro e ha
  trovato un contatto Delera sovrascritto, ma è costata di più (circa 8 minuti e 355.000 token),
  soprattutto per una chat Delera lunghissima e per le ricerche in casella fatte per nome. Le
  correzioni di entrambe le prove sono in [agente.md](agente.md), non ancora riprovate.
- Le caselle personali (`piercarlo@`, `alberto@`, `daniela@` e le altre) non si leggono: i
  connettori Google girano su `info@fym.it`. Si vedono solo i messaggi che passano da lì.
  Da decidere se e come allargare.
- **Valentina ha un account Claude suo**, senza i connettori di `info@fym.it`: per lei la skill
  vede molto meno. Non provato.
- **Crustdata** è senza crediti dal 2026-09-17: per LinkedIn resta solo il Chrome di chi chiama.
- **Gli attestati di virtualbadge** si leggono solo dal Mac di Samu, dove sta la chiave. Sugli
  altri computer la fonte si salta; una chiave per ciascuno va chiesta, non copiata.
- **Leadinfo** è installato su fym.it (dal Tag Manager) ma al 2026-09-22 nessuno sapeva con quale
  account entrarci. Quando si ritrova l'accesso, per le aziende è la fonte che dice chi ci sta
  guardando in questi giorni.
- Le riunioni registrate su Zoom possono contenere sessioni di coaching accanto alle chiamate
  commerciali. Il sottoagente legge solo le seconde, ma se il titolo non basta a distinguerle non
  è stato stabilito come fare. Read AI è escluso per scelta di Samuele (2026-09-22).
