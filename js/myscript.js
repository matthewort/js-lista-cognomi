// chiedo il cognome
var richiesta = prompt("Cognome?");
// array cognomi
var cognomi = ["Bernardi", "Galli", "Gentile", "Lombardi"];
console.log(cognomi);
// lista ordinata alfabeticamente
cognomi.push(richiesta);


var i = 0;
while (i < cognomi.length && emailTrovata === false) {
  console.log(i);
  var compilazione = email[i];
  // condizione mail corretta o errata
  if (compilazione === richiesta) {
    emailTrovata = true;
  }
  i++;
