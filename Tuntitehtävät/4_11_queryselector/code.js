
let elem = document.getElementById('content'); //kuten totuttu käyttämään. NOPEAMPI kuin queryselector.
console.log(elem);

let elem2 = document.querySelector('#content'); //queryselector hakee elementtejä samanlaisella syntaksilla, kun css -selektoreissa

let elem3 = document.querySelector('.special'); // hakee ENSIMMÄISEN elementin, jonka class on special
let elemAll = document.querySelectorAll('.special'); //hakee KAIKKI elementit, joiden class on special

let node = document.querySelector('div:first-child'); //hakee taas ekan elementin
console.log(node.nodeName);

console.log(node.textContent) // tulostaa pelkän tekstin

//käydään alla läpi listana kaikki divien sisältö

let divs = document.querySelectorAll('div');

/**
 * @type Element
 */
let div; //määritetty vaan olemaan muuttuja div

for (div of divs) {
    console.log(div.textContent)
}

//halutaan vaihtaa teksti kaikkien listaelementtien sisään

let lis = document.querySelectorAll("ul>li");

for (li of lis) {
    li.textContent = "john doe"; // jos haluttaisiin vanhan tekstin lisäksi, niin
    // li.textContent + "john doe"
}