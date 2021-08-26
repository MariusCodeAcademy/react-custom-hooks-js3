import Card from '../UI/Card';
import useCounter from '../../hooks/use-counter';

const DownCounter = () => {
  const counter = useCounter('down');

  return (
    <Card>
      <h2>Down Counter</h2>
      <h2>{counter}</h2>
    </Card>
  );
};

export default DownCounter;
