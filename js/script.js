/* ******************************************** */
/*                     MAIL                     */
/* ******************************************** */
// definisco un array contenente la lista delle email degli invitati
const guestsMail = [
  'mariorossi@mail.com',
  'pieroverdi@mail.com',
  'lucaneri@mail.com',
  'silviorossi@mail.com',
  'bianchiantonio@mail.com',
  'giorgiobianchi@mail.com',
  'giovannimuciaccia@mail.com',
]

// chiedo all'utente di inserire un indirizzo email
let userMail = prompt("Inserisci il tuo indirizzo email");

// se l'utente non ha inserito nessun carattere, stampo un avviso. Altrimenti stampo l'email dell'utente
if(userMail === null || userMail.length === 0){
  console.log("Nessun indirizzo email inserito!")
}
else{
  console.log("Il tuo indirizzo email è ", userMail);
}

let isGuest = false;  // variabile di controllo

// ciclo la lista delle email fino a che non trovo una email uguale a quella inserita dall'utente
for(i=0; userMail != null && isGuest == false && i<guestsMail.length; i++){
  // se trovo una email uguale, assegno true alla variabile di controllo e stampo il rispettivo messaggio
  if(guestsMail[i] === userMail){
    isGuest = true;
    console.log("La tua email è tra gli invitati!");
  }

}
// se non trovo nessuna email uguale, stampo il rispettivo messaggio 
if(userMail != null && isGuest == false && userMail.length != 0){
  console.log("La tua email NON è tra gli invitati.")
}



/* ******************************************** */
/*                     DADI                     */
/* ******************************************** */
console.log("*************** DADI ***************")
// definisco le variabili per il risultato del giocatore e del computer
let userDie = Math.ceil(Math.random() * 6);
let cpuDie = Math.ceil(Math.random() * 6);

//stampo i risultati
console.log("Il dado del giocatore ha fatto:", userDie);
console.log("Il dado del computer ha fatto:", cpuDie);

// stabilisco il vincitore
// l'utente vince 
if(userDie > cpuDie){
  console.log("Il giocatore VINCE!");
}
// il computer vince
else if(cpuDie > userDie){
  console.log("Il computer VINCE!");
}
// pareggio
else{
  console.log("PAREGGIO! Gioca di nuovo.");
}