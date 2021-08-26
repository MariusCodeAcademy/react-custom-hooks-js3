import { useState, useEffect } from 'react';

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const int1 = setInterval(() => {
      setCounter((prevState) => prevState + 1);
    }, 1000);
    return () => {
      clearInterval(int1);
    };
  }, []);
  return counter;
};

export default useCounter;
