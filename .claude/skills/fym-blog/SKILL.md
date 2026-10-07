---
name: fym-blog
description: "Gli articoli del blog di fym.it, scritti nella forma che i motori mostrano come risposta: titolo con le parole di chi cerca, sintesi in apertura, le obiezioni come titoli, la verifica sotto ognuna, tabelle, FAQ con schema. Porta anche il codice pronto da incollare in WordPress, che maltratta l'HTML in tre modi noti. Attiva su 'fym-blog', 'articolo per il blog', 'scriviamo un pezzo', 'rispondiamo a questo articolo', 'riscriviamo l'articolo', 'ci posizioniamo su'."
metadata:
  creata: '2026-09-10'
  nata-su: "la riscrittura dell'articolo sui 4 falsi miti del coaching strategico, 2026-09-09, e l'indagine sulla percezione online che l'ha preceduta"
  voce-da: "../../commerciale/tone-of-voice.md"
  aspetto-da: "../fym-design/SKILL.md"
---

# fym-blog: gli articoli del blog di FYM

**A cosa serve un articolo qui.** Non a piacere a chi ci conosce già: a farsi trovare da chi
sta verificando. L'indagine del 2026-09-09 ha stabilito che FYM non ha un problema di
reputazione ma di **conferma indipendente e di visibilità**: nessuno parla male, quasi
nessuno parla. Chi ci sta valutando cerca conferme dove il mercato insegna a cercarle, non
le trova, e resta con il dubbio. Un articolo del blog è uno dei pochi posti in cui possiamo
mettere una risposta che i motori mostrano e che gli assistenti AI leggono.

Da qui discende tutto il resto: **si scrive per chi dubita, non per chi è già d'accordo.**
Un pezzo che celebra il metodo FYM lo legge chi ha già comprato. Un pezzo che prende
l'obiezione più dura e la verifica davanti al lettore lo legge chi deve ancora decidere.

## Prima di scrivere una riga: la ricognizione

1. **Chi c'è già.** I fogli in [`../../cantieri-aperti/`](../../cantieri-aperti/INDICE.md) e
   la tabella dei [passaggi](../../passaggi-di-consegna-claude/INDICE.md), come per ogni
   lavoro su questo Drive.
2. **Cosa abbiamo già detto su questo tema, e dove.** Quasi sempre la risposta esiste già,
   ma vive in un video. È successo esattamente così con le critiche al modello strategico:
   c'erano un articolo del 2026-07-30, un video di 27 minuti e nove sessioni reali intere
   pubbliche. Non mancava il contenuto, mancava la **forma scritta e indicizzabile**. Si
   cerca prima sul canale YouTube e nel blog: quello che c'è si linka e si cita, non si
   riscrive da capo.
3. **Cosa scrive chi cerca.** Le parole vere della query, non quelle del nostro settore.
   Si guarda cosa esce oggi su quella ricerca e in che posizione siamo.
4. **Cosa dicono gli altri.** Se esiste un articolo di un concorrente su quella ricerca, si
   legge tutto prima di rispondere: serve a sapere su quale terreno ci porta.

## Il formato che si posiziona

Nell'ordine in cui sta in pagina. [`esempio-articolo.html`](esempio-articolo.html) è
l'articolo vero, quello pubblicato il 2026-09-09, e si copia da lì.

1. **Il titolo porta dentro le parole di chi cerca**, e non le nostre. «Coaching strategico:
   4 falsi miti da sfatare» è scritto dal punto di vista di chi sa già la risposta; «Il
   coaching strategico è coaching? Le 4 obiezioni, verificate» è la domanda che qualcuno
   digita davvero. Se il titolo è una domanda, l'articolo deve rispondere nella prima
   schermata.
2. **«In sintesi», in apertura.** Tre o quattro righe che rispondono subito, prima di ogni
   premessa. È il blocco che i motori estraggono e che un assistente AI cita. Se la sintesi
   non regge da sola, staccata dal resto, l'articolo non ha una tesi.
3. **Ogni obiezione è un `<h2>`, scritta come la scriverebbe chi la fa.** Non «Il primo
   mito», ma la contestazione per esteso. Sotto il titolo va la frase di chi obietta, in
   corsivo nel suo riquadro, e poi **La verifica**: cosa dice la norma, cosa dice la logica,
   cosa si può guardare. Un'obiezione, una verifica, un titolo.
4. **Quello che si può verificare va in tabella.** Norme, elenchi, differenze fra modelli:
   una tabella è la forma che i motori mostrano e che il lettore scorre senza leggere.
5. **Una sezione che ammette i limiti.** È la mossa che ai concorrenti riesce e a noi
   mancava: smontare per primi il criterio su cui perderemmo, invece di lasciarlo dire a
   loro. Chi legge una pagina che ammette qualcosa crede anche al resto.
6. **Le domande frequenti in fondo**, come `<dl>`, con lo schema JSON-LD FAQPage a parte.
7. **I link interni e un solo invito finale.** Uno per pagina, non tre.
8. **Un aforisma per documento**, mai due, come da tone of voice. Nell'articolo è la riga
   che chiude, in grande, al centro.

Le citazioni in Fraunces sono **al massimo due per pagina** (regola di rams): oltre quella
soglia smettono di essere uno stacco e diventano il carattere del pezzo.

## Le due regole che ci hanno fermato, e che non si negoziano

**Nessun numero senza una fonte sola.** I casi dell'archivio erano scritti in quattro modi
diversi: 900 casi e 4.000 sessioni nell'articolo di luglio, 800 in homepage, oltre 400 nella
brochure che AICP ospita in PDF, circa 150 l'anno sulla scheda EMCC. Nell'articolo riscritto
**sono stati tolti tutti**. Un numero contestabile dentro un pezzo che chiede al lettore di
verificare i fatti è l'errore che costa di più: gli toglie la ragione per fidarsi di tutto il
resto. I numeri rientrano quando la cifra è una sola e si sa da dove viene.

**Nessun link scritto senza averlo aperto.** Su tre indirizzi controllati quel giorno, tre
erano rotti: `go.fym.it/certificazioni` dà 404, il certificato di `www.scuolacoaching.net`
non è valido, la vecchia scheda EMCC risponde 404 mentre quella nuova esiste ma è fuori
dall'elenco navigabile. Un link rotto dentro un articolo che invita a verificare fa
esattamente il danno che l'articolo voleva evitare. Si aprono tutti, uno per uno, prima di
pubblicare.

Sulla stessa linea: **non si scrivono stati che non esistono.** «In linea con gli standard
ICF» non è uno stato: chi controlla nel registro ICF non ci trova e resta con due frasi che
sembrano contraddirsi. La riga giusta dice cosa è vero adesso, e cioè che non eroghiamo un
programma accreditato ICF e che la via portfolio resta aperta.

E una cosa che vale quando si risponde a un attacco: **alla tesi non si risponde con la
polemica**, che ci porta sul terreno di chi ha cinquecento articoli e più tempo di noi. Si
risponde con la prova che nessun concorrente può produrre. Nel nostro caso è la sessione
reale intera, e sono già pubbliche.

## La voce

Sta nel nucleo, [`../../commerciale/tone-of-voice.md`](../../commerciale/tone-of-voice.md), che si
legge per intero prima di scrivere e non si ricopia qui. Prima di consegnare si fa il suo
[controllo](../../commerciale/tone-of-voice.md#il-controllo-prima-di-consegnare), poi la lista SEO
e AEO qui sotto. Le due cose che in un articolo di risposta si sbagliano:

- **Si bersagliano le scorciatoie, mai le persone.** La prima stesura diceva che chi invoca
  Socrate non l'ha mai letto e parlava di operazione di marketing. Gli argomenti sono
  rimasti identici, il colpo alla persona è stato tolto. Un articolo che colpisce qualcuno
  fa sembrare debole chi lo scrive, anche quando ha ragione.
- **Il perché si spiega.** Nel marketing motivare una scelta persuade, ed è l'opposto della
  regola che vale in conversazione. Un articolo del blog è marketing.

Niente trattino lungo, mai. «Reale» e non «vero».

## Il blog maltratta l'HTML incollato: come si incolla

Tre guasti verificati sul tema di fym.it il 2026-09-09, che sono costati due giri:

1. **L'editor spoglia i `<div>`.** Con loro cadono le variabili CSS definite sul
   contenitore, e fondi, filetti, margini e larghezze spariscono tutti insieme.
2. **I `<blockquote>` sopravvivono** e sono il contenitore da usare, **ma il tema li mette
   in corsivo**: il dritto va riforzato con `font-style: normal !important`.
3. **`position: absolute` non trova ancoraggio**: un segno decorativo posizionato così è
   finito in cima all'articolo, a tutta larghezza, come una riga gialla che non si capiva
   da dove venisse. Si usano bordi, non pseudo-elementi posizionati.

La regola che ne esce, e che va rispettata anche quando sembra brutta: **niente `<div>`,
niente variabili CSS, ogni regola agganciata a una classe sull'elemento stesso, colori
scritti per esteso, `!important` dove il tema sovrascrive.**

Il blocco di stile pronto è [`blocco-stile.html`](blocco-stile.html): si incolla in cima
all'articolo, prima del corpo. Se dopo il salvataggio l'aspetto non è quello dell'anteprima,
il tema ha tolto il blocco: allora lo stesso CSS va in **Aspetto › Personalizza › CSS
aggiuntivo** senza i tag `<style>`, e nel post resta solo il corpo.

Si incolla dalla vista **Codice** dell'editor, o in un blocco «HTML personalizzato».

## L'aspetto

L'aspetto viene da [rams](../fym-design/SKILL.md) e non si reinventa. Le tre cose che qui cambiano
rispetto a una pagina nostra:

- **Il font non si tocca.** Il blog usa già Red Hat Display a 17px per titoli e corpo.
  L'unico carattere aggiunto è **Fraunces**, e solo per le citazioni. Il brand book vorrebbe
  Plus Jakarta Sans per il corpo: imporlo qui farebbe un'isola dentro un blog che va in un
  altro modo.
- **La larghezza della riga sì.** Il tema porta il testo a 729px, che per leggere è troppo:
  si riporta a `34em`, cioè circa 68 caratteri per riga.
- **Il giallo è un segno, mai il fondo di un testo.** Dandelion `#f5bc47` sta bene come
  filetto in cima al riquadro finale; sopra non ci va mai del bianco (1,73:1). Il resto
  della palette è quella primaria FYM: Navy `#112b4d`, Blu FYM `#015174`, bianco `#ffffff`,
  Grigio 8% `#eceef1`, Filetto `#cbd0d8`, Tenue `#4a5f79`.

## SEO e AEO: la lista prima di pubblicare

- **Titolo SEO** con le parole della ricerca, sotto i 60 caratteri se possibile.
- **Descrizione** che porti dentro l'obiezione, non l'elogio.
- **Slug**: si sceglie una volta. Se l'articolo esiste già e ha una storia, cambiarlo costa
  un **redirect 301**, che va messo e provato. Quello dell'articolo del 2026-09-09 è passato
  da `coaching-strategico-4-falsi-miti-da-sfatare` a `coaching-strategico-e-coaching`, il
  301 c'è ed è stato verificato: non si tocca più.
- **Canonical** sulla pagina giusta, **og:image** presente.
- **Gli `<h2>` sono le domande**, non le sezioni di un indice.
- **FAQ con schema**: il JSON-LD FAQPage va incollato a parte. Le domande dello schema
  devono essere **le stesse** che stanno in pagina, parola per parola.
- **Link interni** verso le pagine che devono ricevere autorità, e i link esterni solo verso
  fonti che reggono un controllo (norme, registri, elenchi).
- **Ogni link aperto e provato**, come sopra.

**Yoast.** Il blocco «Domande frequenti» esiste solo nell'editor a blocchi, non con
Elementor né con l'editor classico: in quei casi si scrive il JSON-LD a mano, che è la
strada che abbiamo preso. Samuele ha detto il 2026-09-09 che Yoast non gli piace, e
sostituirlo (Rank Math, SEOPress, The SEO Framework) è un lavoro a sé, con backup e
migrazione dei metadati: **non si fa di corsia dentro la scrittura di un articolo.**

## Dopo la pubblicazione

Un articolo pubblicato non è un articolo finito. Si torna a guardarlo in Search Console dopo
qualche settimana e si guardano due cose: **su quali query esce** (quasi mai quelle che
avevamo in mente) e **la posizione media**. Le query che escono e che non avevamo previsto
sono il titolo del prossimo pezzo.

## Dove chiama cos'altro

- La voce: [`../../commerciale/tone-of-voice.md`](../../commerciale/tone-of-voice.md).
- L'aspetto: [rams](../fym-design/SKILL.md). Se serve cambiare un colore o una misura, si corregge
  lì, non qui.
- Se l'articolo diventa una pagina costruita e non un post nel blog, il metodo è
  [linus](../fym-siti/COME-SI-USA.md), e quando Linus e rams dicono cose diverse vince Linus.
- Il contesto da cui questa skill nasce, con tutti i numeri verificati:
  [`PASSAGGIO-2026-09-09-percezione-online-fym.md`](../../passaggi-di-consegna-claude/PASSAGGIO-2026-09-09-percezione-online-fym.md).

## Cosa non fa

Non pubblica: il testo e il codice si consegnano, a incollare è una persona. Non tocca il
tema di WordPress, non installa plugin, non cambia i permalink. Non fa i social, che sono di [fym-social](../fym-social/SKILL.md): un articolo
e un post non sono lo stesso testo accorciato.

## Ancora da verificare

- **Il formato non ha ancora dati.** L'articolo del 2026-09-09 è il primo scritto così, e
  quando è nata questa skill Search Console non aveva ancora niente da dire. Finché non ci
  sono numeri, quello che c'è scritto qui sopra è una previsione ragionata, non un risultato
  misurato: la prima cosa da correggere qui sono le regole che i dati smentiranno.
- **Il blocco di stile è stato provato su un tema solo**, quello di fym.it al 2026-09-09. Se
  il tema cambia, i tre guasti vanno riprovati prima di fidarsi.
- **La riga su ICF** («non eroghiamo un programma accreditato ICF, la via portfolio resta
  aperta») è da far confermare a chi conosce le regole ICF nel dettaglio.
- **Le FAQ in `<dl>`**: lo schema JSON-LD è quello che i motori leggono, e il `<dl>` in
  pagina serve al lettore. Non è stato verificato se il tema del blog lo impagina bene su
  telefono.
