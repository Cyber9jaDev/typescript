import React from 'react';
import TieFighter from './components/TieFighter'
import AwesomeProvider from './context/AwesomeProvider';

function App() {
  return (
    <AwesomeProvider>
      <TieFighter />
    </AwesomeProvider>
  )
}

export default App