import Card from '../UI/Card';
import useCounter from '../../hooks/use-counter';

const UpCounter = () => {
  const counter = useCounter();

  return (
    <Card>
      <h2>UpCounter</h2>
      <h2>{counter}</h2>
    </Card>
  );
};

export default UpCounter;
