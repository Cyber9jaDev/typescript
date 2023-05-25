"use strict";
const echo = (arg) => arg;
const isObject = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObject(true));
console.log(isObject('John'));
console.log(isObject([1, 2, 3]));
console.log(isObject({ name: 'John' }));
console.log(isObject(null));
const isTrue = (arg) => {
    // Array
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    // Object
    //  Ensure that 'arg' is not a key if 'arg' is an object
    if (isObject(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    // turn 'is' into a true or false value instead of 0 and 1 by flipping
    return { arg, is: !!arg };
};
isTrue({ name: 'John' });
const checkBoolValue = (arg) => {
    // Array
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    // Object
    //  Ensure that 'arg' is not a key if 'arg' is an object
    if (isObject(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    // turn 'is' into a true or false value instead of 0 and 1 by flipping
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: 'Dave' }));
console.log(processUser({ id: 2, f: 'f', name: 'Dave' }));
