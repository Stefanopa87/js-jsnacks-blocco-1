// - Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età. Stampare a
// schermo attraverso il for in tutte le proprietà.

function ex1(){

  var student = {
    'nome': 'stefano',
    'cognome': 'patti',
    'età': '34'
  };

  for (var key in student ) {

    var value = student[key];

    console.log(key, value);
  }
}

// -------------------------------------------------------

// - Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome

function ex2(){

 var students = [
   // key senza apici.. è cmq consentito
   // negli object gli apici sono necessari
   {nome: 'stefano',cognome: 'patti'},
   {nome: 'ilaria',cognome: 'ferrigno'},
   {nome: 'marco',cognome: 'della gala'},
   {nome: 'sara',cognome: 'biagini'}];

   for (var i = 0; i < students.length; i++) {
     console.log(students[i]);
   }
}


// ----------------------------------------------------

// - Dare la possibilità all'utente attraverso 3 prompt di
// aggiungere un nuovo oggetto cliente/passeggero inserendo
// nell'ordine: nome, cognome e età.

function ex3(){

  var pax =
   [{nome: 'lucia',cognome: 'tosti', età: 50},
   // i numeri possono essere messi con apici e senza apici
    {nome: 'barbara',cognome: 'campoli', età: '55'}];

  var nome = prompt('dimmi il tuo nome');
  var cognome = prompt('dimmi il tuo cognome');
  var età = parseInt(prompt('dimmi la tua età'));

  pax.push({
    nome: nome,
    cognome: cognome,
    età: età
  });

  for (var i = 0; i < pax.length; i++) {
    console.log(pax[i]);
  }
}

function init(){

  // ex1();

  // ex2();

  ex3();

}


$(document).ready(init);
