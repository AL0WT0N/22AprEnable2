'use strict';

// Selectors
// Inputs
let inputOne = document.querySelector("#inputOne");
let inputTwo = document.querySelector("#inputTwo");

// Buttons
let addBtn = document.querySelector("#addBtn");
let clearBtn = document.querySelector("#clearBtn");

// Divs
let mainDiv = document.querySelector("#mainDiv");

// Functionality
let add = () => {
    let valueOne = parseInt(inputOne.value);
    let valueTwo = parseInt(inputTwo.value);

    let valueDiv = document.createElement("div");
    let myValue = document.createTextNode(`${valueOne} + ${valueTwo} = ${valueOne + valueTwo}`);

    valueDiv.appendChild(myValue);
    mainDiv.appendChild(valueDiv);
}

let clearResults = () => {
    mainDiv.innerHTML = "";
}

// Event Listeners
addBtn.addEventListener("click", add);
clearBtn.addEventListener("click", clearResults);