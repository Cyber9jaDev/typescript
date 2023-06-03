import React from 'react';
import TieFighter from './components/TieFighter'
import { AwesomeContextProvider } from './context/AwesomeContext';
import { UserContextProvider } from './context/UserContext';
import User from './components/User';

function App() {
  return (
    <>
      <AwesomeContextProvider>
        <h2>React Context</h2>
        <TieFighter />
      </AwesomeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </>
  )
}

export default App;