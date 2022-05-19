'use strict';

// Switch Case Statements

// Prompt is used for user input (only works in browser)
let value = parseInt(prompt("Please enter a value"));

// alert can be used to pop a message up into a webpage
switch(value) {
    case 5:
    case 10:
    case 15:
        console.log("Value is 5, 10 or 15");
        // alert("Value is 5, 10 or 15");
        break;
    case 20:
        console.log("Value is 20");
        // alert("Value is 20");
        break;
    default:
        console.log("This case is the fallback - if no previous case matches");
        // alert("This case is the fallback - if no previous case matches");
}

