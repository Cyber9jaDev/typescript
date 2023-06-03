import React, { useContext } from 'react';
import LaserShot from './LaserShot';
import { AwesomeContext } from '../context/AwesomeProvider';

const TieFighter = () => {
  const awesomeContext = useContext(AwesomeContext);

  return (
    <>
      <h2>React Context</h2>
      <p>TieFighter React</p>
      <p>{ awesomeContext?.awesomeState}</p>
      <LaserShot />
      <button onClick={() =>awesomeContext?.setAwesomeState(Math.random()) }>Click me!</button>
    </>
  )
}

export default TieFighter;
