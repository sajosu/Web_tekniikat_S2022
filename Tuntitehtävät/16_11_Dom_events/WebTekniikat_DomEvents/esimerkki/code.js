let button = document.querySelector('button');
let button2 = document.getElementById('toka');

button.onclick = OkClicked;

function OkClicked(){
    alert('hello world');
}

/**
 * 
 * @param {WheelEvent} event //parametri pitää määrittää, jotta deltaY toimii (scrollauksen lasku)
 */

function Wheel(event) {
    console.log(event.deltaY) //tulostaa scrollauksen suunnan
    console.log('hello world again');
}

function tokaClicked() {
    button2.style.width = '500px';
}

//Jos halutaankin useampi funktio samaan buttoniin, tämä on parempi tapa:

button.addEventListener('click', OkClicked); //tähän voitaisiin lisätä nyt useampi funktio ->
button.addEventListener('wheel', Wheel); 

button2.addEventListener('click', tokaClicked);

let para = document.querySelector('p');

function Hover() {
   para.style.background = 'red'; 
}

//para.addEventListener('hover',)

//tulostetaan inputin value otsikkona sivulle:
let button3 = document.getElementById('kolmas');
let field = document.getElementById('username');

button3.addEventListener('click', showUsername);

/**
 * 
 * @param {Event} Event 
 */
function showUsername(event) {
    let userName = field.value;
    let h = document.createElement('h3');
    h.textContent = userName;
    document.body.appendChild(h); //lisää bodyn loppuun uuden lapsen
}

/**
 * 
 * @param {Event} event 
 */

function user(event) {
    event.preventDefault(); //Estää sivun päivittämisen nappia painaessa
}

let form = document.getElementById('lomake')

/**
 * 
 * @param {Event} event 
 */
function lomake(event){
let formData = new FormData(form); //formData helppo tapa ottaa haluttu tieto formilta
formData.get('user1'); //ottaa formdatasta user1 -kentän tiedot
console.log(formData);
}

form.addEventListener('submit', lomake); //tässä tapauksessa halutut lomakkeen tiedot saadaan, kun painetaan nappia (huom napin tyyppi oltava submit)
