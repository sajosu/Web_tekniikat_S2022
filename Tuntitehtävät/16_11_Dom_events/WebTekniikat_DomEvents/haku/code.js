//Suodata hakusanalla näkyviin vain hakusanan sisältävät lista itemit.

let searchInput = document.getElementById('search');
let listItems = document.querySelectorAll('li');
searchInput.addEventListener('search', search); //tapahtumaeventillä 'input' toimii sitä mukaa kun kirjoittaa kenttään

function search() {
    let keyword = searchInput.value;

    for (const li of listItems) {
        if (li.textContent.includes(keyword)) { //sisältääkö teksti haetun sanan?
       li.style.display = 'list-item';  //näyttää sen listaitemin, missä sana on
    }
    else {
        li.style.display = 'none'; // piilottaa ne itemin, missä sitä ei ole
    }
}
}

