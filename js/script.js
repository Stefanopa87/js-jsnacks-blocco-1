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
// aggiungere un nuovo oggetto studente inserendo
// nell'ordine: nome, cognome e età.


function init(){

  // ex1();

  ex2();

}


$(document).ready(init);
