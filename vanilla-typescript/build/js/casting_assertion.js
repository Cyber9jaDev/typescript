"use strict";
// convert to more or less specific
let a = 'Hello';
let b = a; // less specific
let c = a; // more specific
let d = 'World'; // Not available in react
let e = 'World';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful: TS sees no problem - but a string is returned;
let nextVal = addOrConcat(2, 2, 'concat');
// Double casting or forced casting // Not recommended
10;
// The Dom
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
img.src;
myImg.src;
