// Snack #4:
// Generatore di “nomi cognomi” casuali: 
// scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.

var nomi = ['Alessandro', 'Dario', 'Daniela', 'Luca', 'Nicola', 'Chiara', 'Maria', 'Davide', 'Martina', 'Laura'];
var cognomi = ['Rossi', 'Brembilla', 'Ubiali', 'Sala', 'Cortinovis', 'Brignoli', 'Zonchi', 'Nava', 'Gervasoni', 'Marchesi'];
var lista=[];

function numeroRandom (min, max) {
    num = Math.floor(Math.random() * (max - min + 1) + min );
    return num;
}

function listaNomi (nome, cognome) {
    
    var nome = nomi[numeroRandom(0,nomi.length - 1)];
    var cognome = cognomi[numeroRandom(0,cognomi.length - 1)];
        
    return nome + ' ' + cognome;
}


for (i=0; i<10; i++) {
    var randomName = listaNomi(nomi,cognomi);
    document.getElementById('lista').innerHTML +="<li>" + randomName + "</li>";

}

    