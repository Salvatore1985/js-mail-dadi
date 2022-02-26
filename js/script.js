/**
* * Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Note: il controllo vorrei che fosse effettuato manualmente con un ciclo for 
e non usando funzionalità built-in degli array in js :)
 */

//* RECUPERO GLI ELEMENTI DEL FORM
const emailElement = document.getElementById("my-email");
/* console.log("emailElement"); */
const buttonEnter = document.getElementById("enter");



//*Creo un array di Email*/
const userEmail = ["salvo@gmail", "franco@gmail", "luigi@gmail"];
console.table(userEmail);



//*LEGO UN EVENTO AL CLICK DI UN BUTTON
buttonEnter.addEventListener("click", function () {
    //*RECUPERO GLI ELEMENTI DAL DOM
    const messageEmailElement = document.getElementById("my-message-email");

    //? RECUPERO I VALORI DEL FOR EMAIL
    let emailForm = emailElement.value;
    let approved = false;
    let messageUser = "";
    // ! CONVALIDA DATI CON UN CICLO FOR
    for (let i = 0; i < userEmail.length; i++) {
        const element = userEmail[i];
        console.log(userEmail[i]);

        if (element !== emailForm) {
            console.log("non puoi entrare");
        } else {
            approved = true;
            console.log("puoi entrare", approved);
            break
        }
    }
    if (approved === true) {
        console.log(approved)
        messageUser = "Puoi accedere, l'email corretta";

    } else {
        console.log(approved)
        messageUser = "Mi dispiace non puoi accedere inserisci l'email corretta";
    }

    messageEmailElement.innerHTML = messageUser;
});


/**
 ** DADI
 * Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */
//*RECUPERO L'ELEMENTO DEL DOM
const cpuNumberOne = document.getElementById("number-cpu1");
const cpuNumberTwo = document.getElementById("number-cpu2");
const messagePlayElement = document.getElementById("my-message-play");
const wrapper = document.getElementById('for-wrapper');
//* RECUPERO GLI ELEMENTI DEL FORM
const buttonResult = document.getElementById("result");


// creo il span di riferimento
/* let newWrapper = document.querySelector('span#for-wrapper');
console.log(newWrapper); */
let newIOne = document.createElement('i');
console.log(newIOne);

let newITwo = document.createElement('i');
console.log(newITwo);

//*LEGO UN EVENTO AL CLICK DI UN BUTTON
buttonResult.addEventListener("click", function () {

    //*GREO VARIABILE PER NUMERI CASUALI DA  1 A 6
    let sumCpu1 = Math.floor(Math.random() * 6) + 1;
    console.log(sumCpu1);
    let sumCpu2 = Math.floor(Math.random() * 6) + 1;
    console.log(sumCpu2);


    //*VARIABILE
    let messagePlay = "";
    // ! CONVALIDA DATI 
    if (sumCpu1 === sumCpu2) {
        messagePlay = "i numeri sono uguali";
        console.log(messagePlay);
    } else if (!(sumCpu1 > sumCpu2)) {
        messagePlay = "Cpu2 vince";
        console.log(messagePlay);
    } else {
        messagePlay = "Cpu1 vince";
        console.log(messagePlay);
    }

    /*   newWrapper.append(newI); */
    cpuNumberOne.append(newIOne);
    cpuNumberTwo.append(newITwo);

    switch (sumCpu1) {
        case 1:
            newIOne.classList.add("fas", "fa-dice-one", "fs-1");
            newIOne.classList.remove("fa-dice-two", "fa-dice-three", "fa-dice-four", "fa-dice-five", "fa-dice-six");
            break;
        case 2:
            newIOne.classList.add("fas", "fa-dice-two", "fs-1");
            newIOne.classList.remove("fa-dice-one", "fa-dice-three", "fa-dice-four", "fa-dice-five", "fa-dice-six");
            break;
        case 3:
            newIOne.classList.add("fas", "fa-dice-three", "fs-1");
            newIOne.classList.remove("fa-dice-two", "fa-dice-one", "fa-dice-four", "fa-dice-five", "fa-dice-six");
            break;
        case 4:
            newIOne.classList.add("fas", "fa-dice-four", "fs-1");
            newIOne.classList.remove("fa-dice-two", "fa-dice-three", "fa-dice-one", "fa-dice-five", "fa-dice-six");
            break;
        case 5:
            newIOne.classList.add("fas", "fa-dice-five", "fs-1");
            newIOne.classList.remove("fa-dice-two", "fa-dice-three", "fa-dice-four", "fa-dice-one", "fa-dice-six");
            break;
        case 6:
            newIOne.classList.add("fas", "fa-dice-six", "fs-1");
            newIOne.classList.remove("fa-dice-two", "fa-dice-three", "fa-dice-four", "fa-dice-five", "fa-dice-one");
            break;
    }


    switch (sumCpu2) {
        case 1:
            newITwo.classList.add("fas", "fa-dice-one", "fs-1");
            newITwo.classList.remove("fa-dice-two", "fa-dice-three", "fa-dice-four", "fa-dice-five", "fa-dice-six");
            break;
        case 2:
            newITwo.classList.add("fas", "fa-dice-two", "fs-1");
            newITwo.classList.remove("fa-dice-one", "fa-dice-three", "fa-dice-four", "fa-dice-five", "fa-dice-six");
            break;
        case 3:
            newITwo.classList.add("fas", "fa-dice-three", "fs-1");
            newITwo.classList.remove("fa-dice-two", "fa-dice-one", "fa-dice-four", "fa-dice-five", "fa-dice-six");
            break;
        case 4:
            newITwo.classList.add("fas", "fa-dice-four", "fs-1");
            newITwo.classList.remove("fa-dice-two", "fa-dice-three", "fa-dice-one", "fa-dice-five", "fa-dice-six");
            break;
        case 5:
            newITwo.classList.add("fas", "fa-dice-five", "fs-1");
            newITwo.classList.remove("fa-dice-two", "fa-dice-three", "fa-dice-four", "fa-dice-one", "fa-dice-six");
            break;
        case 6:
            newITwo.classList.add("fas", "fa-dice-six", "fs-1");
            newITwo.classList.remove("fa-dice-two", "fa-dice-three", "fa-dice-four", "fa-dice-five", "fa-dice-one");
            break;
    }

    //* INSERISCO I DATI DENTRO NEL DOM TRAMITE ID
    /*   cpuNumberOne.innerHTML = sumCpu1;
      cpuNumberTwo.innerHTML = sumCpu2; */
    messagePlayElement.innerHTML = messagePlay;


})

