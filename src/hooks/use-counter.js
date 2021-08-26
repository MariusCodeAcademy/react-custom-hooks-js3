import { useState, useEffect } from 'react';

const useCounter = (direction = false) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const int1 = setInterval(() => {
      if (direction === 'down') {
        setCounter((prevState) => prevState - 1);
      } else {
        setCounter((prevState) => prevState + 1);
      }
    }, 1000);
    return () => {
      clearInterval(int1);
    };
  }, [direction]);
  return counter;
};

export default useCounter;
