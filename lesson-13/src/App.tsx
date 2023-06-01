import { KeyboardEvent, MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface User{
  id: number,
  username: string
}

type fibFunc = (n: number) => number;

const myNum = 11;

const fib: fibFunc = (n: number) => n < 2 ? n  : fib(n-1) + fib(n-2);


function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);


  useEffect(() => {
    console.log('Mounting');
    console.log('Users: ', users);

    return () => console.log('Unmounting');

  }, [users]);
  

  const addTwo = useCallback((e:MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>):void => { 
    setCount(prev => prev + 1)}, 
  []);  

  const result = useMemo<number>(() => fib(myNum), []);
  
  return(
    <div className='App'>
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default App
