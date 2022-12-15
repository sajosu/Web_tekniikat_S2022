//kun painiketta painetaan
let AddButton = document.getElementById('add');

AddButton.onclick = function() {
    //lue syöte
    let user = document.getElementById('name').value;
    //luo uusi li -elementti ja aseta sisällöksi syötetty nimi
    let newLiElement = document.createElement('li');
    newLiElement.innerHTML = user;
    //lisää ul-elementille
    document.getElementById('participantList').appendChild(newLiElement);
    //Tyhjennä kenttä
    document.getElementById('name').innerHTML = "";
    
}