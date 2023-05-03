// definisco gli array delle email possibili
const email = ["ninotroia96@gmail.com" , "simoneicardi80@yahoo.com" , "pincopallino123@hotmail.it" ]

// chiedo l'email all'utente
let emailUtente = prompt("Inserisci la tua Email")

// definisco il messaggio
let message 

let entrance = 0



for (i=0; i< email.length; i++ ) {



// definisco la condizione per cui l'input inserito deve essere uguale ad almeno uno degli elementi
if (emailUtente === email[i]) {
    entrance = 1
  
}




}

if (entrance != 1) {
    message = "Tu non puoi accedere al drive"
    console.log(message);
}

else {
    message= " Tu puoi accedere al drive"
    console.log(message);
}