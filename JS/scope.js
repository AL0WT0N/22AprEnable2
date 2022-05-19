'use strict';

// let and const are something called: Block scope
// Only available in the block they're defined in

// This is in global scope
let age = 10;

// Function Scope
let myFunction = () => {
    // This variable is only in scope in this function
    let adjustment = 5;
    age += adjustment;

    // If I want adjustment to be available outside of this function
    // Then I should return it:
    // return adjustment;
}

let adjustment = myFunction();
console.log(age);
// The variable adjustment is out of scope here
// console.log(adjustment);

// Loop Scope
for (let i = 0; i < 5; i++) {
    // This is only in scope in this loop
    let myVariable = 10;
}

console.log(myVariable);