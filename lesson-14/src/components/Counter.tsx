import { ReactNode, useReducer, ChangeEvent } from 'react';

const initialState = { count: 0, text: '' };

// const enum REDUCER_ACTION_TYPE { INCREMENT, DECREMENT, NEW_INPUT }
type REDUCER_ACTION_TYPE = 'INCREMENT' | 'DECREMENT' | 'NEW_INPUT'; // We can also use enum above
type REDUCER_ACTION = { type: REDUCER_ACTION_TYPE, payload?: string }

const reducer = (state: typeof initialState, { type, payload }: REDUCER_ACTION): typeof initialState => {
  if(type === 'INCREMENT') {
    return{ ...state, count: state.count + 1 }
  }
  else if(type === 'DECREMENT'){
    return { ...state, count : state.count - 1 }
  }
  else if(type === 'NEW_INPUT'){
    // Nullish coalescing operator (??) 
    // It's a short-hand for the ternary operator (condition ? true : false)
    // It's used to check if a value is null or undefined, and return a default value if it is
    return { ...state, text : payload ?? '' }
  }
  throw new Error("Error"); // return { ...state }
}

type ChildrenType = {
  children: (num: number) => ReactNode;
}

function Counter({ children }: ChildrenType) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: 'INCREMENT'});
  const decrement = () => dispatch({ type: 'DECREMENT'});
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'NEW_INPUT', payload: e.target.value});
  }

  return (
    <>
      <h1>{children(state.count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <input type="text" onChange={handleTextInput} />
      <h2>{state.text}</h2>
    </>
  )
}

export default Counter;
