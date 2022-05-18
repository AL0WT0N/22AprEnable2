'use strict';

// For Loop
// Initialise a variable; Set a condition; Choose an iterator
for (let i = 5; i > 0; i--) {
    console.log(i);
}

// While Loop
// Needs only a condition
// Will continue to loop, as long as the condition is true
let flag = true;
let count = 0;

while (flag) {
    console.log(count);
    count++;

    if (count === 10) {
        break;
    }
}

// Do While Loop
let count2 = 0;
let flag2 = false;
do {
    console.log(count2);
    count2++;
} while (flag2)