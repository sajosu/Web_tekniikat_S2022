let button = document.querySelector('button')
let body = document.querySelector('body');

function onClick() {
    body.style.backgroundColor = 'lightgreen';
}

button.addEventListener('click', onClick);


function onHover() {
    button.textContent = 'Press this';
}

button.addEventListener('mouseover', onHover);

function hoverOut() {
    button.textContent = 'Paina tätä';
}

button.addEventListener('mouseout', hoverOut);

function growButton() {
    
    let width = button.clientWidth;
    let height = button.clientHeight;
    button.style.width = width + 10 + 'px';
    button.style.height = height + 10 + 'px';
    }

    button.addEventListener('click', growButton);


