'use strict';

let myJSONObj = {
    "propertyOne" : "Value one",
    "propertyTwo" : "Value two"
}

console.log(myJSONObj.propertyOne);

let objString = '{"name" : "Anoush"}';
let myObject = JSON.parse(objString);
console.log(myObject.name);

let myJSObject = {
    name : "Rowan"
}

let myObjectString = JSON.stringify(myJSObject);
console.log(myObjectString);