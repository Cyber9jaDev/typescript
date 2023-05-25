const echo = <T>(arg: T): T => arg;

const isObject = <T>(arg: T):boolean => {
  return(typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};

console.log(isObject(true));
console.log(isObject('John'));
console.log(isObject([1, 2, 3]));
console.log(isObject({ name: 'John' }));
console.log(isObject(null));


const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
  // Array
  if(Array.isArray(arg) && !arg.length){
    return { arg, is: false }
  }
  // Object
  //  Ensure that 'arg' is not a key if 'arg' is an object
  if(isObject(arg) && !Object.keys(arg as keyof T).length){
    return { arg, is: false }
  }

  // turn 'is' into a true or false value instead of 0 and 1 by flipping
  return { arg, is: !!arg }
}

isTrue({ name: 'John' });


///////////////////////////////////////////////////////////////////////

interface BoolCheck<T>{
  value: T,
  is: boolean
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  // Array
  if(Array.isArray(arg) && !arg.length){
    return { value: arg, is: false }
  }
  // Object
  //  Ensure that 'arg' is not a key if 'arg' is an object
  if(isObject(arg) && !Object.keys(arg as keyof T).length){
    return { value: arg, is: false }
  }

  // turn 'is' into a true or false value instead of 0 and 1 by flipping
  return { value: arg, is: !!arg }
}

///////////////////////////////////////////////////////////////////////
interface HasID{
  id: number
}

const processUser = <T extends HasID>(user: T): T => {
  return user;
}


console.log(processUser({id: 1, name: 'Dave'}));
console.log(processUser({id: 2, f: 'f', name: 'Dave'}));
