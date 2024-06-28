Ciao ragazzi,
Esercizio di oggi:
nome repo: js-mail-dadi

Mail
Chiedi all’utente la sua email (tramite prompt o input, a voi la scelta),
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Vietato utilizzare la funzione includes

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

Buon lavoro e buon divertimento!

<!-- SCOMPOSIZIONE ESERCIZIO 1 - MAIL -->

1 - Creiamo un array che ha come valori delle mail;
2 - Chiediamo all'utente la sua email;
3 - Creiamo un ciclo FOR che fa la verifica di ogni valore dell'array;
4 - Creiamo all'interno del FOR un ciclo IF;
4.1 - ? SE l'email scritta dall'utente è presente nella lista allora stamperà un messaggio;
4.2 - : ALTRIMENTI Stamperà un messaggio diverso.

<!-- SCOMPOSIZIONE ESERCIZIO 2 - DADI -->

1 - Creiamo due variabili, una per il lancio randomico del giocatore e una per il lancio randomico del computer
2 - all'interno di un IF creare la comparazione
3 - ? SE mioDado > dadoComputer 
3.1 - Stampare che il giocatore ha vinto
4 - ALTRIMENTI SE mioDado < dadoComputer
4.1 - Stampare che il computer ha vinto
5 - : ALTRIMENTI
5.1 Stampare che si tratta di un pareggio