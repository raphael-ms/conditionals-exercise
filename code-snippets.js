// Assignment of primitive types

let notDefinedYet; // undefined
const name = "Raphael"; // string
const spartans = 300;  // number
const persians = 300000n; // bigint
const success = true;  // boolean
const nothing = null;  // null
const sym = Symbol("foo"); // symbol

// Assignment of non-primitive types

const roles = [ "Frontend", "Backend", "UX" ]; // Array
const poem = { roses: "red", violets: "blue" }; // Object
const bhaskara = function (a,b,c) { /* logic goes here*/}; // Function




// Assignment of dynamic type

let dynamic = 123;
console.log(dynamic, typeof dynamic) // 123 'number'
dynamic = "Other";
console.log(dynamic, typeof dynamic) // Other string
dynamic = true
console.log(dynamic, typeof dynamic) // true 'boolean'

dynamic = "Value" + 5 + 3 // Value: ??? Type: ???
dynamic = 5 + 3 + "Value" // Value: ??? Type: ???





GLOBAL SCOPE

// GLOBAL SCOPE

var dogSound = "woof"

const animalSound = function () {
  var dogSound = "meaw"
  console.log(dogSound)
}

animalSound(); // Value: ???
console.log(dogSound) // Value: ???


// BLOCK SCOPE

if (true) {
  var dogSound = "woof"
  const catSound = "meaw"
  let birdSound = "tweet"
}

console.log(dogSound) // Value: woof
console.log(dogSound) // Value: ???
console.log(dogSound) // Value: ???



// VARIABLE HOISTING

varHoisting = "varHoisting"
console.log(varHoisting) // value: ???
var varHoisting;

letHoisting = "letHoisting"
console.log(letHoisting) // value: ???
let letHoist;

constHoisting = "constHoisting"
console.log(constHoisting) // value: ???
const constHoisting;





var variable = 2; 

function call() { 
    
    console.log(variable); // value: ???
    var variable = 3;  
    console.log(variable);  // value: ???
} 

call();



// SWITCH

switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    break;
  case value2:
    //Statements executed when the
    //result of expression matches value2
    break;
  ...
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    break;
  default:
    //Statements executed when none of
    //the values match the value of the expression
}



// FUNCTIONS

// Declaration
function helloWorld() {
  alert(`Hello world 👋`)
}

// Call
helloWorld(); //  Hello world 👋

// FUNCTIONS

// Declaration
function helloWorld(name = "Frontend Academy") {
  alert(`${name} says Hello world 👋`)
}

// Call
helloWorld(); // Frontend Academy says Hello world 👋
helloWorld("Raphael"); // Raphael says Hello world 👋

// FUNCTIONS

function sayHello() {
  return " says Hello world 👋"
}
function helloWorld(name, helloFunction) {
  alert(name + helloFunction())
}
// Pass `sayHello` as an argument to `helloWorld` function
helloWorld("Raphael", sayHello); // Raphael says Hello world 👋


// ARROW FUNCTIONS

// Declaration
const helloWorld = () => {
  alert(`Hello world 👋`)
}

// Call
helloWorld(); //  Hello world 👋

// ARROW FUNCTIONS

const sayHello = () => {
  return " says Hello world 👋"
}
const helloWorld = (name, helloFunction) => {
  alert(name + helloFunction())
}
// Pass `sayHello` as an argument to `helloWorld` function
helloWorld("Raphael", sayHello); // Raphael says Hello world 👋




// THIS KEYWORD

const me = { 
 name: "Raphael", 
 thisInArrow: () => { 
   console.log(`My name is ${this.name}`); // no 'this' binding here 
 }, 
 thisInRegular(){ 
   console.log(`My name is ${this.name}`); // 'this' binding works here 
 } 
};
me.thisInArrow(); // My name is
me.thisInRegular(); // My name is Raphael





