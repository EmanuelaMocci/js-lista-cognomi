// 1. chiedi all’utente il cognome
var tuoCognome = prompt("Inserisci il tuo cognome");
tuoCognome = tuoCognome.charAt(0).toUpperCase() + tuoCognome.slice(1).toLocaleLowerCase();
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
cognomi.push(tuoCognome); 
console.log(cognomi);


// 3. stampa la lista ordinata alfabeticamente
cognomi.sort();
console.log(cognomi); 

for ( var i = 0; i < cognomi.length; i++ ) {
    console.log(cognomi[i]);
}

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var posizione = cognomi.indexOf(tuoCognome) +1;
console.log(posizione);
