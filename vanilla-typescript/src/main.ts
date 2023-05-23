// interface Guitarist {
//   name: string,
//   active: boolean,
//   albums: ( string | number )[];
// }

// let evh: Guitarist = {
//   name: 'Eddie',
//   active: false,
//   albums: [ 1984, 5150, 'The Dark Side of the Moon', 'The Wall' ]
// }

// let jp: Guitarist = {
//   name: 'Jimmy',
//   active: true,
//   albums: [ 'The Wall', 'The Dark Side of the Rain', 1984, 5150 ]
// }

// const greetGuitarist = (guitarist: Guitarist) => {
//   return `Hello ${guitarist.name.toUpperCase()}!`
// }

// // console.log(greetGuitarist(jp));

// // Enums
// enum Grade{
//   U, D, C, B, A
// }

// console.log(Grade.D);

// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name: string,
  active: boolean,
  albums: ( string | number )[];
}

type userId = stringOrNumber;

// Literal types
let myName: 'Dave';
let userName: 'Dave' | 'John' | 'Amy'
userName = 'Amy';


// Functions
const add = (a: number, b: number) => {
  return a + b
}

const logMessage = (message: any): void => {
  console.log(message);
}

logMessage('Hello World');
logMessage(add(2,3));
// logMessage(add('2',3));

let subtract = function(c: number, d: number): number{
  return c - d;
}

type mathFunction = (a: number, b: number) => number;
// interface mathFunction{
//   (a: number, b: number): number
// }

let multiply: mathFunction = function (c, d){
  return c * d;
}

logMessage(multiply(3, 22));

// Optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if(typeof c !== 'undefined'){
    return a + b + c;
  }
  return a + b;
}

// Default param value
const sumAll = (a: number = 23, b: number, c: number = 2): number => {
  return a + b + c;
} 

logMessage(addAll(2,3,2));
logMessage(addAll(2,3));
logMessage(sumAll(2,3));
logMessage(sumAll(undefined, 3));
logMessage(sumAll(undefined, 3, undefined));

// Rest parameters
const total = (a: number, ...numbers: number[]): number => {
  return a + numbers.reduce((prev, current) => prev + current);
}

logMessage(total(1, 2, 3, 40));

const createError = (errMsg: string) => {
  throw new Error(errMsg);
}