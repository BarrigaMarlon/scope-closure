//variables
var a; //declaranndo 
var b = 'b'; //desclaramos / asignamos
b = 'bb' //reasugnacion
var a = 'aa'; //redeclaracion


//Globla scope
var fruit = 'Apple';
function bestFruit() {
    console.log(fruit);
}

bestFruit();

function contries(){
    country  = 'Colombia';
    console.log(country);
}

contries();
console.log(country);