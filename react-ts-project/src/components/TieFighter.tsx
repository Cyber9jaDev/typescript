import LaserShot from './LaserShot';
import { useAwesomeContext } from '../context/AwesomeContext';

const TieFighter = () => {
  const awesomeContext = useAwesomeContext();

  return (
    <>
      <p>TieFighter React</p>
      <p>{ awesomeContext.awesomeState}</p>
      <LaserShot />
      <button onClick={() =>awesomeContext.setAwesomeState(Math.random()) }>Click me!</button>
    </>
  )
}

export default TieFighter;
