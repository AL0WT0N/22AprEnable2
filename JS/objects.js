'use strict';

// JS Object Literal Notation
let anoush = { firstName: "Anoush", lastName: "Lowton", age: 28, jobTitle: "Developer" };

let richard = new Object();
richard["firstName"] = "Richard";
richard["lastName"] = "de Young";
richard["age"] = 28;
richard["jobTitle"] = "Developer";

let jehad = new Object();
jehad.firstName = "Jehad";
jehad.lastName = "AbdelBaqi";
jehad.age = 28;
jehad.jobTitle = "Developer";

console.log(`${anoush.firstName}'s job is: ${anoush["jobTitle"]}`);
console.log(`${richard.firstName}'s job is: ${richard["jobTitle"]}`);
console.log(`${jehad.firstName}'s job is: ${jehad["jobTitle"]}`);

// Expando property
jehad.isAwesome = true;
console.log(jehad);

// for in loop
// this will loop through the properties of an object
for (let key in jehad) {
    console.log(`${key}: ${jehad[key]}`);
}

// for of loop
// this will loop through the values of an object
for (let value of Object.values(anoush)) {
    console.log(value);
}

// // Javascript arrays
let myArray = ["Anoush", "Richard", "Jehad"];

// Creates an empty array
let myEmptyArray = Array();

// Create an array with a specific size
let mySpecificSizeArray = Array(10);

// Create an array with values already assigned
let myArrayWithValues = Array("Anoush", "Jehad", "Richard");

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

for (let value of myArray) {
    console.log(value);
}