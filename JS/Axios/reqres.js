'use strict';

// Selectors
let resultsDiv = document.querySelector("#results");
let getBtn = document.querySelector("#get");

// HTTP Requests - Request/Response
// Axios uses promises
// We must handle the success, and the failure

// GET - READ
let getRequest = () => {
    axios.get("https://reqres.in/api/users")
        .then((response) => {
            // console.log(response.data.data);
            displayResult(response.data.data);
        })
        .catch((err) => {
            console.error(err);
        });
}


// POST - CREATE

// PUT/PATCH - UPDATE

// DELETE - DELETE

let displayResult = (data) => {
    for (let entry of data) {
        const p = document.createElement("p");
        const text = document.createTextNode(`${entry.first_name} ${entry.last_name} ${entry.email}`);

        const img = document.createElement("img");
        img.setAttribute("src", entry.avatar);
        img.setAttribute("class", "avatars");

        p.appendChild(text);
        resultsDiv.appendChild(p);
        resultsDiv.appendChild(img);
    }
}

// Event Listeners
getBtn.addEventListener("click", getRequest);