let elem = document.querySelector('.special');

let x = elem.nextSibling //palauttaa <p> -elementin


let elem1 = document.querySelector('#test');

elem1.innerHTML = "<p>Tekstiä2</p>"; //lisätään 2. divin sisään tekstiä, innerHTML ei kuitenkaan suositeltu tapa

let elemP = document.createElement('p');
elemP.textContent = "Tässä uusi teksti";

elem.appendChild(elemP); //lisää sivulle tämän uuden elementin HUOM toimii vain kerran

elemP = document.createElement('p'); //Seuraava samanlainen elementti pitää luoda uudella komentoketjulla
elemP.textContent = 'Vielä uusi teksti';
elem.appendChild(elemP);

let elem2 = document.querySelector('body');


//luodaan array nimet, käydään se läpi for of -lauseella ja tulostetaan sivulle
let nimet = ['Sari', 'Tarja', 'Kaisa', 'Olli'];

for (const nimi of nimet) {
    let n = document.createElement('p');
    n.textContent = nimi;
    elem.appendChild(n)
}

//Seuraavana muutama esimerkkifunktio, joita olisi voinut myös ed. tehtävissä käyttää

/**
 * 
 * @param {*} selector  
 * @returns {element}
 */

function qs(selector) {
    return(document.querySelector(selector));
}

function ce(name) {
    return(document.createElement(name));
}

//lisätään elementti ennen special -diviä
let spes = document.querySelector('.special');

let p = document.createElement('p');
p.textContent = "Jotain tekstiä taas";

spes.parentElement.insertBefore(p, spes);

// JÄLKEEN, huom ei ole olemassa insertAfter komentoa niin pitää miettiä aina tuon insertBefore:n kautta
let elem3 = document.querySelector('.special').nextElementSibling;
elem3.parentElement.insertBefore(p, elem);


//lisätään attribuutti
let body = document.querySelector('body');
let elem4 = document.createElement('div');


/**
 * @type {HTMLElement} //Määritetty html -elementiksi, jotta style -muokkaukset toimii
 */
 let elem5 = document.querySelector(".special");

 elem5.style.color = "red";

 let h = document.querySelector('h1');

 h.classList.add('colorful'); // lisää h1 classiksi colorful, ja sen määrityksen erillisessä css -tiedostossa. html -tiedostossa classia ei ole.
 h.classList.remove('colorful'); // poistetaan class elementiltä h1

 //vaihdetaan buttonin painalluksella h1 classia

 function changeStyle(){
    h.classList.toggle('colorful')
 }
