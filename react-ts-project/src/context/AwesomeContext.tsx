/* eslint-disable react-refresh/only-export-components */
import { createContext, Dispatch, ReactElement, SetStateAction, useState, useContext } from 'react';

type AwesomeContextType = {
  awesomeState: number,
  setAwesomeState: Dispatch<SetStateAction<number>>
}

type ChildrenType = { 
  children: ReactElement | ReactElement[]
}

export const AwesomeContext = createContext<null | AwesomeContextType>(null);

export const AwesomeContextProvider = ({ children }: ChildrenType): ReactElement => {
  const [awesomeState, setAwesomeState] = useState<number>(1);

  return (
    <AwesomeContext.Provider value={{ awesomeState, setAwesomeState }}>
      { children }
    </AwesomeContext.Provider>
  )
}

export const useAwesomeContext = () => {
  const  awesomeContext = useContext(AwesomeContext);

  if(!awesomeContext){
    throw new Error('useAwesomeContext must be used within a AwesomeContextProvider');
  }

  return awesomeContext;
}

