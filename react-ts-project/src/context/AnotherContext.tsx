/* eslint-disable react-refresh/only-export-components */
import { createContext, Dispatch, ReactElement, SetStateAction, useState, useContext } from 'react';

type AnotherContextType = {
  anotherState: number,
  setAnotherState: Dispatch<SetStateAction<number>>
}

type ChildrenType = { 
  children: ReactElement | ReactElement[]
}

export const AnotherContext = createContext<null | AnotherContextType>(null);

export const AnotherContextProvider = ({ children }: ChildrenType): ReactElement => {
  const [anotherState, setAnotherState] = useState<number>(10);

  return (
    <AnotherContext.Provider value={{ anotherState, setAnotherState }}>
      { children }
    </AnotherContext.Provider>
  )
}

export const useAnotherContext = () => {
  const anotherContext = useContext(AnotherContext);

  if(!anotherContext){
    throw new Error('useAnotherContext must be used within a AnotherContextProvider');
  }

  return anotherContext;
}

