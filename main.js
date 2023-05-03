// definisco gli array delle email possibili
const email = ["ninotroia96@gmail.com" , "simoneicardi80@yahoo.com" , "pincopallino123@hotmail.it" ]

// chiedo l'email all'utente
let emailUtente = prompt("Inserisci la tua Email")

// definisco il messaggio
let message = "Hai accesso al drive"

// definisco la condizione per cui l'input inserito deve essere uguale ad almeno uno degli elementi
if (emailUtente == email[0] || emailUtente == email[1] || emailUtente == email[2] || emailUtente == email[3]) {
    console.log(message);
}

else {
    message = "Non hai accesso al drive"
    console.log(message);
}



