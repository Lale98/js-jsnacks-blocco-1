// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
// Stampa l'array nella console.

var lista = [];
var numero;


for (i=0; i<6; i++) {
    do {
        numero = parseInt(prompt('inserisci un numero'));
        console.log(numero);

        while (isNaN(numero)) {
            numero = parseInt(prompt('Ho detto un numero !'));
            console.log(numero);
        }

    } while (isNaN(numero) == true);

    DispariPush (numero, lista);
}

console.log(lista);


function DispariPush (num, list) {
    if (num % 2 == 1) {
        return list.push(num);
    }
    return num;
}