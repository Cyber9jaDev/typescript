/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-empty-function */
import { ChangeEvent, createContext, useReducer, ReactElement, useContext } from "react";

type StateType = { count: number, text: string }

export const initState: StateType = { count: 0, text: '' };

// const enum REDUCER_ACTION_TYPE { INCREMENT, DECREMENT, NEW_INPUT }
type REDUCER_ACTION_TYPE = 'INCREMENT' | 'DECREMENT' | 'NEW_INPUT'; // We can also use enum above
type REDUCER_ACTION = { type: REDUCER_ACTION_TYPE, payload?: string }

const reducer = (state: StateType, { type, payload }: REDUCER_ACTION): StateType => {
  if(type === 'INCREMENT') {
    return{ ...state, count: state.count + 1 }
  }
  else if(type === 'DECREMENT'){
    return { ...state, count : state.count - 1 }
  }
  else if(type === 'NEW_INPUT'){
    return { ...state, text : payload ?? '' }
  }
  return { ...state } // default
}

const useCounterContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = () => dispatch({type: 'INCREMENT'});
  const decrement = () => dispatch({type: 'DECREMENT'});
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'NEW_INPUT', payload: e.target.value});
  }
  return { state, increment, decrement, handleTextInput }
}

type UseCounterContextType = ReturnType<typeof useCounterContext>

const initContextState: UseCounterContextType = {
  state: initState,
  increment: () => {},
  decrement: () => {},
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => {}
}

export const CounterContext = createContext<UseCounterContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement | undefined
}

export const CounterProvider = ({ children, ...initState }: ChildrenType & StateType): ReactElement => {
  return (
    <CounterContext.Provider value={ useCounterContext(initState) }>
      { children }
    </CounterContext.Provider>
  )
}

type UseCounterHookType = {
  count: number,
  increment: () => void,
  decrement: () => void,
}

export const useCounter = (): UseCounterHookType => {
  const { state: { count }, increment, decrement } = useContext(CounterContext);
  return { count, increment, decrement }
}

type UseCounterTextHookType = {
  text: string,
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void
}

export const useCounterText = (): UseCounterTextHookType => {
  const { state: { text }, handleTextInput,  } = useContext(CounterContext);
  return { text, handleTextInput }
}