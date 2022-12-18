
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
const NOTES = document.querySelector('#notes');

function print() {


    // Read the input fields:

    let user = NAME_INPUT.value;
    let input = TEXT_INPUT.value;

    //contents of note:
    
    let heading = date + ' ' + '(' + user + ')';
    let newDiv = document.createElement('div');
    newDiv.innerHTML = '<h4>' + heading +'</h4>' + input;

    //check if note is important, class according to it

    if (document.getElementById('important').checked == true) {
        newDiv.classList.add('importantNote');
    }
      else { newDiv.classList.add('newnote');  
    
    }

    //Empty the input fields, bring focus to the fist field:

    NAME_INPUT.value = '';
    NAME_INPUT.focus();
    TEXT_INPUT.value = '';
    
    //create note div on page:

    NOTES.appendChild(newDiv);

  
}

SUBMIT_BUTTON.addEventListener('click', print);