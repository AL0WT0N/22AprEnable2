'use strict';

// Selectors
let inputOne = document.querySelector("#inputOne");
let buttonOne = document.querySelector("#buttonOne");
let mainDiv = document.querySelector("#mainDiv");

// Functionality
let myFunc = () => {
    let inputOneValue = inputOne.value;

    let valueDiv = document.createElement("div");
    let myValue = document.createTextNode(inputOneValue);

    valueDiv.appendChild(myValue);
    mainDiv.appendChild(valueDiv);
}

// Event Listeners
buttonOne.addEventListener("click", myFunc);