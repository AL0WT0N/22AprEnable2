'use strict';
// console.log("This is a console.log");
// console.info("This is a console.info");
// console.warn("This is a console.warn");
// console.error("This is a console.error");

// let myNumber = 10;
// const myConstantNumber = 5;

// // This works
// myNumber = 100;

// // This line won't work, because it's a constant
// // myConstantNumber = 100;

// console.log(myNumber);
// console.log(myConstantNumber);

// let myTxt = "some text";

// console.log("this is a %c a message with some CSS."+myTxt,"color: yellow; font-style: italic; background-color: blue;padding: 2px");

// let age = 28;

// // Variables are case sensitive
// // console.log(Age);

let myNullValue = null;
console.log(myNullValue);
console.log(typeof myNullValue);

// This is currently undefined
let myUndefinedValue;
console.log(typeof myUndefinedValue);
console.log(myUndefinedValue);

// In JS == only checks value
console.log(myNullValue == undefined);

// === checks type AND value
console.log(myNullValue === undefined);

// This is true - we'll look at why later
console.log("10" == 10);

let person = "Rowan";
let myString = "Hello there " + person;
console.log(myString)

let myTemplateLiteral = `Hello there ${person}`
console.log(myTemplateLiteral);

let myTemplateLiteral2 = `My age is ${25 + 3}`;
console.log(myTemplateLiteral2);

let myNonExistentVariable = 100;
console.log(myNonExistentVariable);

console.log(eval('5 * 8 + 4 - 2'));