//Luo tähän taulukko käyttäjiä varten.

let users = new Array();

document.getElementById("submit_button").addEventListener('click', submitUser);

let form = document.querySelector("form");

/**
 * @param {Event} e 
 */
function submitUser(e){
    e.preventDefault(); //estetään sivun päivitys, kun nappia painetaan

    let formData = new FormData(form);

  /*OPETTAJAN ESIMERKKI:
    let uname = formData.get('uname');
    let pw = formData.get('pw'); */

    //Tee tähän koodi, joka tallettaa uuden käyttäjän tiedot oliona taulukkoon

    let username = document.getElementById('uname').value;
    let password = document.getElementById('pw').value;

    let user = {
        uname: username,
        pword: password
    }

  /* VOI MÄÄRITELLÄ LYHYESTI MYÖS NÄIN(huom, samat stringit kuin muuttujilla (formdata muuttujat kommenteissa)):   
  
    let user2 = {
        uname,
        pw
    } */
    
    users.push(user);
    console.log(users);

    //Tulostetaan aina lopuksi kaikki lisätyt käyttäjänimet
    printUsers();
}

function printUsers(){
    //Tulosta tähän kaikkien käyttäjien nimi taulukosta.
    for (u of users) {
        console.log(u.uname);
    }
}