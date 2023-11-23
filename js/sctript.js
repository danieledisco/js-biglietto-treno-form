//console.log("You run?");

/************************************************************************************
REQUEST:

Scrivere un programma che chieda all’utente:

    Il numero di chilometri da percorrere
    Età del passeggero Sulla base di queste informazioni dovrà calcolare 
    il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
        - il prezzo del biglietto è definito in base ai km (0.21 € al km)
        - va applicato uno sconto del 20% per i minorenni
        - va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente 
due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. 
La risposta finale (o output) sarà anch’essa da scrivere in console.


 Tools
 input text
 Const/Let
 if else
 document
 getElementById/querySelector
 value
 back tick
 console.log
 toFixed --> arrotondare le due cifre decimali

Pseudo Code

1 - Utente inserisce chilometri da percorrere
2 - Utente inserise età
3 - Utente clicca pulsante
4 - tramite una istruzione del tipo:    document.querySelector('button').addEventListener('click',function(){ --codice--  }); 
    si effettuano i ragionamenti riportati sotto:
    5.1 Si verifica che la distanza non sia inferiore a 5km e non sia superiore a 5000 km 
    5.2 Si verifica che l'età non sia inferiore ad 8 anni
    5.3 Nei casi precedenti si genera un alert e si comunica all'utente che probabilmente a sbagiato e se può cortesemente ridigitare gli input
6 - Si calcola il prezzo del biglietto (senza sconti)
    7.1 Se età minore di 18anni si applica sconto 20%
    7.2 Se età maggiore 65 anni si applica sconto 40%
8 - Si arrotonda prezzo tramite toFixed
9 - Si stampa in console.

***************************************************************************************/

// Action after clicked button
document.querySelector('.evalPrice').addEventListener('click',function()
{
    const km = Number(document.getElementById("input_km").value);
    const age = Number(document.getElementById("input_age").value);

    // Verifica in console
    //console.log("km = " + km);
    //console.log("age = " + age);

    // Verifica km
    if ( km < 5 || km > 5000 )
    {
        alert("Il percorso non può essere più corto di 5km e più lungo di 5000km. Si prega di reinserire il numero di chilometri");
    }

    // Verifica age
    if ( age < 8 )
    {
        alert("I bambini con età inferiore ad 8 anni non possono viaggiare da soli. Ci dispiace");
    }

    // Calcolo prezzo intero
    let price = 0.21 * km;

    // Verifica per applicare lo sconto
    if ( age < 18 )
    {
        // Sconto 20% 
        price *= 0.8;
    }
    else if ( age > 65 )
    {
        price *= 0.6;
    }

    // Formattiamo il prezzo
    let formattedPrice = price.toFixed(2);

    // Stampiano il console il prezzo
    console.log("Il prezzo del biglietto per km " + km + " con utente di età " + age + " anni è di " + formattedPrice + "€");







}
);