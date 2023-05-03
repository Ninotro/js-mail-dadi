// genero un numero casuale all'utente
let numberUtente = Math.round(Math.random()*5)+1;

console.log("Il numero scelto per l'utente è:" + numberUtente);
// Genero un numero casuale dal pc

let numberPc =  Math.round(Math.random()*5)+1;

console.log("Il numero scelto dal pc è:" + numberPc);

// definisco il messaggio
let message

// definisco la condizione

if (numberUtente > numberPc ) {

    message = "Per questa volta hai vinto tu"

    console.log(message);
    
}

else if (numberUtente == numberPc) {
    message = "C'eri quasi! Pareggio"
    console.log(message);


}

else {
    message = "buahahah hai perso"
    console.log(message);
}

