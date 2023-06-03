import React, { createContext, Dispatch, ReactElement, SetStateAction, useState } from 'react';
import TieFighter from '../components/TieFighter';

type AwesomeContextType = {
  awesomeState: number,
  setAwesomeState: Dispatch<SetStateAction<number>>
}

type ChildrenType = { 
  children: ReactElement | ReactElement[]
}

export const AwesomeContext = createContext<null | AwesomeContextType>(null);

const AwesomeProvider = ({ children }: ChildrenType): ReactElement => {
  const [awesomeState, setAwesomeState] = useState(434);

  return (
    <AwesomeContext.Provider value={{ awesomeState, setAwesomeState }}>
      { children }
    </AwesomeContext.Provider>
  )
}

export default AwesomeProvider;