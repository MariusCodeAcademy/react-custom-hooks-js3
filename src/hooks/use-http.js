import { useState } from 'react';
import { dbUrl } from '../config';

const useHttp = (requestConfig, succesCallback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method,
        body: JSON.stringify(requestConfig.body),
        headers: requestConfig.headers,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      succesCallback(data);
      console.log(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };
};

export default useHttp;
