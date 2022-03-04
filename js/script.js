// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. (Cioè lasciate i numeri visibili per 30 secondi allo scadere dei quali li nascondete)
// Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const h1numeri = document.querySelector('#numeri');
const tempo = 5000;

let numeroRandom;

const arrayNumeriRandom = [];
const arrayNumeriUser = [];
const arrayRisultato = [];


for (let index = 0; index < 5; index++) {

    numeroRandom = Math.floor(Math.random() * 100) + 1;

    while (arrayNumeriRandom.includes(numeroRandom)) {
        numeroRandom = Math.floor(Math.random() * 100) + 1;
    }

    arrayNumeriRandom.push(numeroRandom);
    h1numeri.innerHTML += ' ' + numeroRandom;
}

console.log(arrayNumeriRandom);

setTimeout(funzioneSparizioneNumeri, tempo);
setTimeout(funzioneGioco, tempo);

function funzioneSparizioneNumeri() {
    h1numeri.innerHTML = '';
}

function funzioneGioco() {
    for (let index = 0; index < 5; index++) {

        let numeroUser = parseInt(prompt('dimmi un numero di quelli che hai visto'));

        while (arrayNumeriUser.includes(numeroUser)) {
            numeroUser = parseInt(prompt('devi dirmi un numero diverso da quelli che hai già scritto'))
        }

        arrayNumeriUser.push(numeroUser);
    }
    console.log(arrayNumeriUser);




    for (let indexNumeriUser = 0; indexNumeriUser < arrayNumeriUser.length; indexNumeriUser++) {
        for (let indexNumeriRandom = 0; indexNumeriRandom < arrayNumeriRandom.length; indexNumeriRandom++) {

            if (arrayNumeriUser[indexNumeriUser] == arrayNumeriRandom[indexNumeriRandom]) {

                arrayRisultato.push(arrayNumeriUser[indexNumeriUser]);
            }
        }
    }

    h1numeri.innerHTML += `hai indovinato:  ${arrayRisultato.length} numeri <br> i numeri che hai ricordato  sono: ${arrayRisultato}`;



}