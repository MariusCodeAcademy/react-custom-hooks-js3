import { useState } from 'react';
import Card from '../UI/Card';

const UpCounter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <Card>
      <h2>UpCounter</h2>
      <h2>{counter}</h2>
    </Card>
  );
};

export default UpCounter;
