import { useAnotherContext } from '../context/AnotherContext';

const LaserShot = () => {
  const anotherContext = useAnotherContext();

  console.log(anotherContext);

  return (
    <div>LaserShot</div>
  )
}

export default LaserShot;