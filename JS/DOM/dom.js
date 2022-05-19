'use strict';

// Selectors
let mainDiv = document.querySelector("#addToMe");
let addBtn = document.querySelector("#addBtn");

// Functionality
let addToPage = () => {
    let newDiv = document.createElement("div"); //<div></div>
    let newHeading = document.createElement("h1"); //<h1></h1>
    let newText = document.createTextNode("We LOVEEEE JS!"); // loose text

    newHeading.appendChild(newText); // <h1> We LOVEEEE JS! </h1>
    newDiv.appendChild(newHeading); // <div><h1> We LOVEEEE JS! </h1></div>

    // This step adds our new elements to the existing div on the page
    mainDiv.appendChild(newDiv); // <div id="addToMe"> <div><h1> We LOVEEEE JS! </h1></div> </div>
    addBtn.setAttribute("style", "display:none");
}

// Event listeners
addBtn.addEventListener("click", addToPage);