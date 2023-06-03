import LaserShot from './LaserShot';
import { useAwesomeContext } from '../context/AwesomeContext';
import { AnotherContextProvider } from '../context/AnotherContext';

const TieFighter = () => {
  const awesomeContext = useAwesomeContext();

  return (
    <AnotherContextProvider>
      <p>TieFighter React</p>
      <p>{ awesomeContext.awesomeState}</p>
      <LaserShot />
      <button onClick={() =>awesomeContext.setAwesomeState(Math.random()) }>Click me!</button>
    </AnotherContextProvider>
  )
}

export default TieFighter;
