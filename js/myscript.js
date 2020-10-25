// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione “umana” della lista in cui il nuovo utente si trova
// Consigli del giorno:
// 1. consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili;
// 2. anche perchè appunto parte dell’ex sarà cercare qualcosa.PS:: OCIO!!!! :octagonal_sign:
// solo su questo EX usiamo while e non for (poi dal prox in poi farete come volete )



// INPUT BOTTONE
var bottoneInvia = document.getElementById("invia");

// EVENTO BOTTONE
bottoneInvia.addEventListener("click",
function() {

  // ARRAY COGNOMI
  var cognomi = ["Bianchi", "Rossi", "Duzioni", "Blasano", "Verdi"];

  // VAR RICHIESTA COGNOME
  var richiestaInput = document.getElementById("input");

  // PUSH PER L'INPUT
  cognomi.push(richiestaInput.value);

  // ORDINE ALFABETICO
  cognomi.sort();

  // OUTPUT
  var lista = "";
  var i = 0;
  while (i < cognomi.length) {
    lista = lista + "<li>" + cognomi[i] + "</li>";
    i++;
  }

  // VARIABILE LISTA
  document.getElementById("lista").innerHTML = lista;

} );
