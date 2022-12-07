
//async funktio sisältää toimintaa, jota ei jäädä odottamaan! Eli toimii ikään kuin taustalla

async function getData() {
    const RESPONSE = await fetch('https://yesno.wtf/api');
    const OLIO = await RESPONSE.json();

    console.log(OLIO.answer);
    console.log(OLIO.image);
}

getData();

async function getData2() {
    const RESPONSE2 = await fetch('https://random-data-api.com/api/v2/appliances');
    const OLIO2 = await RESPONSE2.json();

    console.log(OLIO2.id);
    console.log(OLIO2.brand);
}

async function getData_array() {
    const RESPONSE3 = await fetch('https://random-data-api.com/api/v2/appliances?size=10');
    const taulu = await RESPONSE3.json();

    for (laite of taulu) {
        let h = document.createElement('h4');
        /* console.log(laite.equipment); */
        h.textContent = laite.equipment;
        document.body.appendChild(h);
    }
}

getData_array();

function fetchData() {
    fetch('https://random-data-api.com/api/v2/appliances?size=10')
    .then( resp => resp.json())
    .then( laitteet =>  {
        for (laite of laitteet) {
            let h = document.createElement('h4');
            /* console.log(laite.equipment); */
            h.textContent = laite.equipment;
            document.body.appendChild(h);
        }
    })
}

fetchData();