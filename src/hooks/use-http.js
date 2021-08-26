import { useState } from 'react';

const useHttp = (requestConfig, succesCallback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // { url: `${dbUrl}tasks.json` }
  const sendRequest = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers || {},
        body: requestConfig.body ? JSON.stringify({ text: taskText }) : null,
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

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
