---
name: fym-diario-di-coaching
description: "Il diario di coaching di FYM: da una trascrizione Scriba di una sessione, il documento strutturato e impaginato col brand FYM, con fase del protocollo, driver emotivi, tecniche, resistenze e il messaggio per il coachee, secondo il metodo della Scuola. Si chiamava Pamu (/recap-sessione). Attiva su 'fym-diario-di-coaching', 'diario di coaching', 'diario della sessione', 'genera il recap', 'fammi il recap della sessione', '/recap-sessione'."
---

# Diario di coaching

Trasforma una trascrizione grezza di una sessione di coaching nel diario di coaching: il documento strutturato e impaginato della sessione, secondo il metodo FYM.

*Fino al 2026-09-26 lo strumento si chiamava **Pamu** e si richiamava con `/recap-sessione`, e il documento si chiamava «recap». Nei file del formato «recap» è rimasto qua e là come nome interno: il documento che si consegna è il **diario di coaching**. Il «recap di apertura» del coach e il «recap per il coachee» restano con il loro nome, perché sono riassunti veri.*

## Fonti — leggile, non ricordarle a memoria

Vivono nel Drive condiviso **Claude FYM**, che è la fonte unica per tutti i coach. Risolvi il percorso all'inizio, senza darlo per scontato — dipende dall'account Google collegato su quel Mac:

```bash
ls -d ~/Library/CloudStorage/GoogleDrive-*/Drive\ condivisi/Claude\ FYM
```

Se il comando non restituisce niente, o i file risultano vuoti, **fermati e dillo**: la cartella non è sincronizzata (va resa "Disponibile offline" da Google Drive Desktop). Le regole di quel Drive stanno nel suo `CLAUDE.md` e valgono anche qui.

| File | Cosa contiene |
|---|---|
| `strumenti/fym-diario-di-coaching/formato-diario.md` | **La specifica**: i 23 campi, in ordine, con la regola su come procurarsi ciascuno. È la fonte di verità: se questa skill e quel file divergono, vince quel file. |
| `contenuti-didattici/` | Terminologia FYM esatta: tecniche, stratagemmi, driver emotivi, resistenze, protocolli. Consultala per nominare le cose correttamente. Parti da `contenuti-didattici/INDICE.md`. |
| `strumenti/fym-diario-di-coaching/template.html` | Il "vestito": stili, loghi, struttura. Non rigenerarlo. |

Se il Drive non è raggiungibile (rete assente, sincronizzazione in corso), **fermati e dillo** — non lavorare a memoria sulle regole FYM.

**Non inventare terminologia FYM.** Se qualcosa emerso in sessione non corrisponde chiaramente a una tecnica/stratagemma/resistenza catalogati, descrivilo in prosa invece di forzarlo in un'etichetta sbagliata.

## Procedura

### 1. Individua la trascrizione
Se l'utente indica un file, usa quello. Altrimenti proponi il più recente in `trascrizioni/` e chiedi conferma. Leggilo per intero prima di procedere — mai lavorare su una lettura parziale.

### 2. Applica `formato-diario.md`
Leggilo e seguilo campo per campo. Riassunto delle regole che sbagliano più spesso:

- **Chiedi, non indovinare** — numero sessione, data, se è l'ultima del percorso. Unica eccezione ammessa: se la trascrizione lo rende certo (es. fissano insieme il prossimo appuntamento → non è l'ultima), non chiedere.
- **Coach**: deducilo se sei sicuro, altrimenti chiedi. Mai una deduzione incerta lasciata scritta.
- **Driver emotivi**: qui SÌ si deduce, con marcatore di confidenza (`forte` / `media` / `dichiarato` / `non rilevato`).
- **Durata**: dalla riga `Durata audio:` in cima alla trascrizione. Se manca, scrivi "non disponibile" — non stimarla dalla lunghezza del testo.
- **Campi condizionali**: recap di apertura del coach, resistenze rilevate, patto di coaching, chiusura percorso — se non ricorrono, la sezione **non compare affatto**.

Raccogli tutte le domande e falle **in un colpo solo** prima di generare, non una alla volta.

### 3. Genera l'HTML
Copia `strumenti/fym-diario-di-coaching/template.html` dal Drive, sostituisci i due segnaposto:
- `<!--DIARIO:CONTENUTO-->` → titolo, sottotitolo, griglia metadati, tutte le sezioni
- `<!--DIARIO:DATA_GENERAZIONE-->` → la data di oggi

Fallo con uno script Python (leggi, sostituisci, scrivi), non riscrivendo il file a mano: il template contiene i loghi incorporati e ricopiarli a mano li corrompe.

### 4. Salva e apri
In `diari-di-coaching/` (crea la cartella se non c'è), con nome `diario-<coachee>-<data sessione>.html`. I diari fatti prima del 2026-09-26 stanno in `trascrizioni-recap/`: non si spostano. Poi aprilo con `open`.

## Classi CSS disponibili nel template

```
Testata
  <h1>Nome Coachee</h1>
  <p class="subtitle">Sessione N &mdash; ...</p>

Metadati (griglia in alto)
  <dl class="meta-grid">
    <div class="meta-item"><dt>Etichetta</dt><dd>valore</dd></div>
    <div class="meta-item"><dt>Etichetta</dt><dd class="tbd">non disponibile</dd></div>
  </dl>

Sezione standard
  <section>
    <div class="section-label"><h2>Titolo</h2><span class="rule"></span></div>
    <ul><li>...</li></ul>
  </section>

Fase del protocollo (mai lineare! vedi formato-diario.md)
  <div class="fase-current"><span class="loop-icon">&#8635;</span> Fase N &mdash; Nome</div>
  <div class="fase-interfaccia">
    <span class="lead">si interfaccia ciclicamente con:</span>
    <span class="fase-pill">Fase X</span><span class="fase-link">&harr;</span><span class="fase-pill">Fase Y</span>
  </div>

Driver emotivi
  <p class="driver-note">Dedotti dal contesto &mdash; ...</p>
  <div class="driver-grid">
    <div class="driver-row">
      <span class="driver-tag paura">PAURA &middot; forte</span>
      <span class="driver-text">evidenza
        <span class="driver-coerenza">Coerente con la tentata soluzione osservata: ...</span>
      </span>
    </div>
  </div>
  Classi tag: paura | dolore | rabbia | piacere

Tecniche e stratagemmi
  <div class="def-list">
    <div class="def-item">
      <span class="def-name">Nome <span class="variant">(variante)</span></span>
      <span class="def-ref">scheda 1.1.05</span>
    </div>
    <div class="def-note">nota di dettaglio</div>
  </div>
  <p class="obs">osservazione trasversale</p>

Resistenze al cambiamento
  <div class="resist-grid">
    <div class="resist-row">
      <span class="resist-tag primary">R2 &middot; Vorrei ma non posso</span>
      <span class="resist-text">evidenza
        <span class="resist-gestione"><strong>Gestita</strong> ...</span>
      </span>
    </div>
  </div>
  Usa `primary` sulla resistenza dominante, la classe nuda sulle secondarie.

Recap per il coachee (ultimo blocco)
  <div class="whatsapp-block">
    <ul><li>...</li></ul>
    <div class="whatsapp-actions">
      <button class="copy-btn" id="copyRecapBtn" type="button">Copia</button>
    </div>
  </div>
```

**Il colore verde** (`--annot`) segnala tutto ciò che è annotazione del sistema e non contenuto della sessione: riferimenti scheda, varianti, note di coerenza. Usalo con quella logica, non decorativamente.

Scrivi accenti e simboli come entità HTML (`&agrave;`, `&mdash;`, `&rarr;`) — il template è già così.

## Dopo la generazione

Chiudi segnalando all'utente:
1. Dove hai salvato il file
2. **Cosa hai dedotto invece di leggere** (driver emotivi, resistenze, coach se dedotto) — deve poter verificare
3. Eventuali campi rimasti vuoti e perché

Se durante il lavoro una regola di `formato-diario.md` si rivela sbagliata o incompleta sulla sessione reale, **dillo** — quel file va corretto, è vivo. Ricorda che ora sta sul Drive condiviso: correggerlo aggiorna il metodo per tutti i coach, quindi vale la pena farlo bene.

**Il diario generato contiene dati reali del coachee.** Salvalo dove stanno le sessioni (locale, oggi), mai dentro il Drive "Claude FYM", che ospita solo il metodo.
