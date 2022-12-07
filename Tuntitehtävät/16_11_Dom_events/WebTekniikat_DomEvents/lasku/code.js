
/**
 * 
 * @param {Event} event 
 */

function count(event) {
    event.preventDefault();
let number1 = Number(document.getElementById('num1').value);
let number2 = Number(document.getElementById('num2').value);
let result = document.getElementById('result');

if (document.getElementById('sum').checked == true) {
    let summa = number1 + number2;
    document.getElementById('result').innerHTML = summa;
}
if (document.getElementById('sub').checked == true) {
    let summa = number1 - number2;
    document.getElementById('result').innerHTML = summa;
}

if (summa < 0) {
    result.style.color = 'red';
}

else if (summa <= 10) {
    result.style.color = 'green';
}

else if (summa <= 50) {
    result.style.color = 'orange';
}

else {
    result.style.color = 'pink';
}
}

let button = document.querySelector('button');
button.addEventListener('click', count);

//Opettajan esimerkki samasta asiasta:
let form = document.querySelector('form');
form.addEventListener('submit', calculate)

function calculate(e){
    e.preventDefault();
    let fData = new FormData(form);
    let num1 = Number(fData.get('num1')); //huom, pitää vastata inputin namea! Name viittaa aina formin tietoon
    let num2 = Number(fData.get('num2')); 
    let sum = num1 + num2
}

//Radio buttonin käsittelyä

let arit = fData.get('arit'); //kummankin buttonin nimi on arit. Palauttaa tiedon, kumpi on valittu.

let res;
if (arit === 'sum') { //jos palauttaa 'sum'.
    res = num1 + num2;
}
else {
    res = num1 - num2;
}

//IF lauseen voi myös tiivistää näin: let res = arit === 'sum' ? num1+num2 : num1-num2;

result.textContent = 'Tulos on' + res;