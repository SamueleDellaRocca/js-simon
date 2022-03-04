// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. (Cioè lasciate i numeri visibili per 30 secondi allo scadere dei quali li nascondete)
// Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.





// SELEZIONO GLI ELEMENTI HTML
const h1numeri = document.querySelector('#numeri');



// DICHIARO LE VARIABILI GENERALI
const tempo = 5000;
let numeroRandom;
const arrayNumeriRandom = [];
const arrayNumeriUser = [];
const arrayRisultato = [];


// FACCIO UN CICLO CHE CREA 5 NUMERI RANDOM DIVERSI TRA LORO, LI PUSHA IN UN ARRAY E LI STAMPA IN PAGINA
for (let index = 0; index < 5; index++) {
    numeroRandom = Math.floor(Math.random() * 100) + 1;

    while (arrayNumeriRandom.includes(numeroRandom)) {
        numeroRandom = Math.floor(Math.random() * 100) + 1;
    }
    arrayNumeriRandom.push(numeroRandom);
    h1numeri.innerHTML += ' ' + numeroRandom;
}

console.log(arrayNumeriRandom);





// DICHIARO LE DUE FUNZIONI, LA PRIMA CANCELLA I NUMERI DALLA PAGINA, LA SECONDA CHIEDI ALL USER 5 NUMERI
function funzioneSparizioneNumeri() {
    h1numeri.innerHTML = '';
}


function funzioneGioco() {

    // FACCIO UN CICLO FOR CHE CHIEDE I NUMERI ALL USER, CON IL CICLO WHILE FACCIO SI CHE NON RIPETA GLI STESSI NUMERI E LI PUSHO IN UN ARRAY
    for (let index = 0; index < 5; index++) {
        let numeroUser = parseInt(prompt('dimmi un numero di quelli che hai visto'));

        while (arrayNumeriUser.includes(numeroUser)) {
            numeroUser = parseInt(prompt('devi dirmi un numero diverso da quelli che hai già scritto'))
        }

        arrayNumeriUser.push(numeroUser);
    }
    console.log(arrayNumeriUser);

    // CONFRONTO L ARRAY DEI NUMERI RANDOM E L ARRAY DEI NUMERI DELL UTENTE PER VEDERE QUANTI NE HA INDOVINATI
    for (let indexNumeriUser = 0; indexNumeriUser < arrayNumeriUser.length; indexNumeriUser++) {
        for (let indexNumeriRandom = 0; indexNumeriRandom < arrayNumeriRandom.length; indexNumeriRandom++) {

            if (arrayNumeriUser[indexNumeriUser] == arrayNumeriRandom[indexNumeriRandom]) {
                arrayRisultato.push(arrayNumeriUser[indexNumeriUser]);
            }
        }
    }
    // STAMPO IL RISULTATO IN PAGINA
    h1numeri.innerHTML += `hai indovinato:  ${arrayRisultato.length} numeri <br> l'elenco  dei numeri che hai ricordato è: ${arrayRisultato}`;

}


// UTILIZZO LE DUE FUNZIONI, PRIMA CANCELLO I NUMERI, POI CHIEDO I NUMERI ALL USER
setTimeout(funzioneSparizioneNumeri, tempo);
setTimeout(funzioneGioco, tempo);



