
let form = document.querySelector('form');
document.getElementById('show').addEventListener('click', showAll);
let users = [];
/**
 * 
 * @param {Event} event 
 */

function addUsername(event){
   event.preventDefault();
   let formData = new FormData(form);
   let username = formData.get('username');
   users.push(username); 
}

function showAll(){
    for (const user of users) {
        let h = document.createElement('h3');
        h.textContent = user;
        document.body.appendChild(h);
        
    }

}

let button = document.getElementById('show'); 
button.addEventListener('click', function() { //anonyymi funktio, eli tämä funktio tapahtuu vain kerran, ei tarvi nimetä
console.log('painettu nappia');
} );

let numerot = [1, 2, 3, 4, 5]

//seuraavaksi käsitellään numerot -arraytä eri tavoin(tulostetaan konsoliin):

//lambda -lauseke
numerot.forEach(num=>console.log(num));

//anonyymi funktio
numerot.forEach(function(num) {console.log(num)})

//erillinen funktio
numerot.forEach(printNumber);  

function printNumber(num) {
    console.log(num);
}

//map -toiminto (taulukon muokkaus):

let uusiTaulukko = numerot.map(mapping); //erona ForEachiin, että tämä palauttaa taulukon, johon voimme muokata arvoja

function mapping(num) {
    return 2*num + ' on hieno numero';   //jokainen arvo kerrotaan kahdella, lisätään teksti ja palautetaan samaan taulukkoon
}

console.log(uusiTaulukko);
