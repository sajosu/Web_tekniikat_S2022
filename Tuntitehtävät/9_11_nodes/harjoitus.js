// 1 & 2

let content = document.getElementById('content');

let hr = document.createElement('hr');
let h3 = document.createElement('h3');
h3.textContent = 'Sari Suomela';

content.appendChild(hr);
content.appendChild(h3);
//sama asia -> content.append(hr, h3)

//3

let ul = document.querySelector('ul'); //queryselector etsii aina ensimmäisen ilmentymän
let li = document.createElement('li');
li.textContent='Sunnuntai';
ul.appendChild(li);

//4

let turhake = document.querySelector('ul li:first-child');

turhake.remove();

//haastavammat kohdat, T3

let items = document.querySelectorAll('ul:first-child li');

for (item of items) {
    let text = item.textContent; //otetaan tekstit talteen muuttujaan
    item.textContent = ""; //tyhjennetään tekstit

    let b = document.createElement('b'); //luodaan bold elementti
    b.textContent = text; //syötetään talteen otetut tekstit bold elementteihin
    item.appendChild(b); //tulostetaan sivulle

}

//muuta ensimmäisen listan itemien tausta ja fonttiväri napin painalluksella

function changeColor() {
    let elems = document.querySelectorAll('ul:first-child li');

    for (const elem of elems) {
        elem.classList.toggle('colored');
        
    }

}

//Jos li -itemissä alle 10 merkkiä, vaihda kokoa
function changeSize() {
    let elems2 = document.querySelectorAll('li');

    for (const e of elems2) {
        if(e.textContent.length < 10) {
            e.classList.add('sizeup')
        }
    }
}