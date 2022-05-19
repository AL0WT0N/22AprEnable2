'use strict';

// Break down arrays and objects into smaller pieces

// Long form
const myArray = ["a", "b", "c", "d"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2], myArray[3]);

// Using destructuring
const [ele1, ele2, ele3, ele4] = myArray;
console.log(ele1);
console.log(ele2);
console.log(ele3, ele4);

const myNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [a, b, c, ...remaining] = myNumArray;
console.log(a);
console.log(b);
console.log(c);
console.log(remaining);

const myOtherNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [x,,,y,,z, ...theRest] = myOtherNumArray;
console.log(x);
console.log(y);
console.log(z);
console.log(theRest);

// The original arrays remain intact after destructuring
console.log(myOtherNumArray);

const person = {
    firstName : "Anoush",
    lastName : "Lowton",
    age : 28, 
    jobTitle : "Developer" 
}

let {firstName, lastName, age, jobTitle, shoeSize = 11} = person;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(jobTitle);
console.log(shoeSize);


// Objects could also contain other objects and can be destructured
const personAdvanced = {
    firstName : "Anoush",
    lastName : "Lowton",
    age : 28, 
    jobTitle : "Developer",
    hobbies : {
        sport: "football",
        music: "most",
        games: "pc"
    }
}

// Example of accessing a property inside a nested object
console.log(personAdvanced.hobbies.sport);
