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

/*Creo un array di Email*/
const userEmail = ["salvo@gmail", "franco@gmail", "luigi@gmail"];
/* console.table(userEmail); */

//? RECUPERO I VALORI DEL FOR EMAIL
let emailForm = emailElement.value;
console.log(emailForm);




// ! CONVALIDA DATI CON UN CICLO FOR
for (let i = 0; i < userEmail.length; i++) {
    const emailCurrent = userEmail[i];
    console.log(emailCurrent);

}