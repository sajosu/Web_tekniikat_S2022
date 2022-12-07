
//Määritetään OLIO

let person = {
    fname: 'Sari',
    lname: 'Suomela',
    age: 34
}

//personin sisällä oleviin muuttujiin voidaan viitata pisteoperaatiolla

console.log( person.fname );

//voidaan myös korjata muuttujan arvoja
//lisätään 1 vuosi ikää

person.age = 35;

//voitaisiin luoda persons -taulukko

let persons = [];
persons.push(person);

console.log(persons);

//käydään taulukkoa läpi

for (p of persons) {
    console.log(p.age);   
}

//Luentoesimerkki (powerpoint)
/* 1. Create a car object with plate
number OOP-001.
2. Set car's speed to 120 km/h.
3. Print out the info about the car
(plate number and current
speed). */

let car = {
    plateNr: 'OOP-001',
    speed: 120
}

console.log(car.plateNr, car.speed);

/* 4. Create another instance with
different data.
5. Print out the info.
6. Change the second car's speed.
7. Make sure everything works as
expected. */


let car2 = {
    plateNr: 'FFI-098',
    speed: 150
}

console.log(car2.plateNr, car2.speed);

car2.speed = 160;

console.log(car, car2);

if ( car2.plateNr.includes('FFI')) {
    console.log('syömään');
}