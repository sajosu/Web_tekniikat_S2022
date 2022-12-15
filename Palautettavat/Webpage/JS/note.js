
//Defining date for printing
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() +1).padStart(2, '0');
let yyyy = today.getFullYear();

let date = dd + '.' + mm + '.' + yyyy;


//Constants for processing input fields

const NAME_INPUT = document.getElementById('name');
const TEXT_INPUT = document.getElementById('note_text');
const SUBMIT_BUTTON = document.getElementById('submit_button');

let user="";
let input ="";


function print() {

    user = NAME_INPUT.value;
    input = TEXT_INPUT.value;
    let heading = date + ' ' + '(' + user + ')';
  /*   let h = document.createElement('h3');
    h.textContent = heading; */
    let newDiv = document.createElement('div');
    newDiv.innerHTML = '<h3>' + heading +'</h3>' + input;
    document.body.appendChild(newDiv);
    console.log(h); 
}

SUBMIT_BUTTON.addEventListener('click', print);