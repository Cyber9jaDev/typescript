"use strict";
// interface Guitarist {
//   name: string,
//   active: boolean,
//   albums: ( string | number )[];
// }
// Literal types
let myName;
let userName;
userName = 'Amy';
// Functions
const add = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
logMessage('Hello World');
logMessage(add(2, 3));
// logMessage(add('2',3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction{
//   (a: number, b: number): number
// }
let multiply = function (c, d) {
    return c * d;
};
logMessage(multiply(3, 22));
// Optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Default param value
const sumAll = (a = 23, b, c = 2) => {
    return a + b + c;
};
logMessage(addAll(2, 3, 2));
logMessage(addAll(2, 3));
logMessage(sumAll(2, 3));
logMessage(sumAll(undefined, 3));
logMessage(sumAll(undefined, 3, undefined));
// Rest parameters
const total = (a, ...numbers) => {
    return a + numbers.reduce((prev, current) => prev + current);
};
logMessage(total(1, 2, 3, 40));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// Custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// Use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen');
};
