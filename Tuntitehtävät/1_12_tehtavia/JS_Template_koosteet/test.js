let numerot = [3,6,4,7,8];

for (num of numerot) { //tulostaa jokaisen arrayn arvon konsoliin
    console.log(num);
}

numerot.forEach(tool);

function tool(num) {   //tekee saman
    console.log(num); 
}

numerot.forEach(function(num){ //anonyymi funktio, käytetään vain kerran tässä. tekee saman kuin edelliset.
    console.log(num)
})

//sama lambdana:

numerot.forEach( num => console.log(num) );

//jos haluttaisiin useampi funktiorivi:

numerot.forEach( num => {
    console.log(num); 
    console.log('toinen rivi');
});

//kasvatetaan numerot -taulukon arvoja yhdellä ja palautetaan uuteen tauluun
//map -funktion idea on tehdä uusi taulukko, johon vanhan taulun arvoja voi muokata/muuttaa

let uusiTaulu = numerot.map(function(num){
    return num+1;
});

//sama asia lambdana

let uusiTaulu2 = numerot.map( num => num+1 );

//FILTER -työkalun käyttöä eli halutaan taulukosta tietyt arvot:
//->palauttaa boolean arvon (täyttyykö ehto vai ei) ja sitä kautta oikeat arvot

let isotNumerot = numerot.filter(num => num>5 && num<10); //palauttaa isommat kuin 5 mutta pienemmät kuin 10

for (n of isotNumerot) {
    console.log(n);
}