import { useState, useEffect } from 'react';

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch currency data');
        }
        return response.json();
      })
      .then((response) => {
        // Log the response to understand its structure
        console.log(response);
        // Assuming the response is an object with currency as a key
        setData(response[currency]);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [currency]);

  return { data, error };
};

export default useCurrencyInfo;
