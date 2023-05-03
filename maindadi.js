// chiedo di inserire un valore qualsiasi all'utente
let numberUtente = prompt("Inserisci un numero da 1 a 6")

// Definisco che sia un numero
let numberUtenteComplete = parseInt(numberUtente)

// Genero un numero casuale dal pc

let numberPc =  Math.round(Math.random()*5)+1;

console.log("Il numero scelto dal pc è:" + numberPc);

// definisco il messaggio
let message

// definisco la condizione

if (numberUtenteComplete > numberPc ) {

    message = "Per questa volta hai vinto tu"

    console.log(message);
    
}

else if (numberUtenteComplete == numberPc) {
    message = "C'eri quasi! Pareggio"
    console.log(message);


}

else {
    message = "buahahah hai perso"
    console.log(message);
}

