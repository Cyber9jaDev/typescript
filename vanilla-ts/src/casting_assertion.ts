type One = string;
type Two = string | number
type Three = string;

// convert to more or less specific
let a: One = 'Hello';
let b = a as Two // less specific
let c = a as Three // more specific

let d = <One>'World'   // Not available in react
let e = <string | number>'World'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if(c === 'add') return a + b;
  return '' + a + b;
}

let myVal: string = addOrConcat(2, 2, 'concat') as string;

// Be careful: TS sees no problem - but a string is returned;
let nextVal: number = addOrConcat(2, 2, 'concat') as number;

// Double casting or forced casting // Not recommended

(10 as unknown) as string;

// The Dom

const img = document.querySelector('img')!;
const myImg = document.getElementById('#img') as HTMLImageElement;

img.src
myImg.src


