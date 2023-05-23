"use strict";
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'The Dark Side of the Moon', 'The Wall']
};
let jp = {
    name: 'Jimmy',
    // active: true,
    albums: ['The Wall', 'The Dark Side of the Rain', 1984, 5150]
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(jp));
