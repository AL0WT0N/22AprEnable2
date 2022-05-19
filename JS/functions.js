'use strict';

// Function declaration
function myFunc(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}

function myFuncWithReturn(num1, num2, num3) {
    return (num1 + num2 + num3);
}

let result = myFuncWithReturn(7, 9, 10);
console.log(result);

// Function Expressions
let myFuncExpression = function(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}

myFuncExpression(4, 5, 6);

// Function Expressions with Arrow Functions
let myArrowFunction = (num1, num2, num3) => {
    console.log(num1 + num2 + num3);
}

// If you want to return a single statement
// You don't need curly braces OR the return keyword
// In this example - num1 + num2 + num3 will be returned
let myArrowFunctionWithReturn = (num1, num2, num3) => num1 + num2 + num3;

