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
    // if(isObject(arg) && !Object.keys(arg as keyof T).length){
    //   return { arg, is: false }
    // }
    if (isObject(arg)) {
        Object.keys(arg).forEach(key => console.log(key));
    }
    // turn 'is' into a true or false value instead of 0 and 1 by flipping
    return { arg, is: !!arg };
};
isTrue({ name: 'John' });
