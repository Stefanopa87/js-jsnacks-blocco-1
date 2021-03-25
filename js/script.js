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


//  ---------------------------------------------

// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri ("a" più piccolo di "b" e "b" grande al
// massimo quanto il numero di elementi dell'array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra "a" e "b"

// BONUS: controlla che che 'a' e 'b' rispettino i parametri

function ex4(){

  var a = 2;
  var b = 6;
  //           0  1  2   3   4   5   6  7   8
  var array = [1, 2, 56, 77, 33, 6, 20, 8, 22];

  result(a, b, array);

  function result(min, max, arr){

    var maxAddmitted = arr.length;
    var minAddmitted = 0;

    if (min > max){
      var pippo = min;
      var pluto = max;
      min = pluto;
      max = pippo;

    } if (max > arr.length){
      max = maxAddmitted-1;

    } if (min < 0){
      min = minAddmitted;
    }

    var mix = [];

    for (var i = min; i <= max; i++) {

      mix.push(arr[i])
    }
    console.log(mix);
  }
}
ex4();




function init(){

  // ex1();

  // ex2();

  // ex3();

  ex4();

}


$(document).ready(init);
