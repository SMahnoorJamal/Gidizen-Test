
import React, { useState, useEffect } from 'react';

function ApiService ()  {
  const [baseURL, setBaseURL] = useState('');

  useEffect(() => {
    setBaseURL('https://fakestoreapi.com/products/1');
  }, []);

  const get = async (endpoint) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log("item", response)
      return data;
    } catch (error) {
      console.error('GET Error:', error);
      return null;
    }
  };

  const post = async (endpoint, data) => {
    try {
      const response = await fetch(`${baseURL}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('POST Error:', error);
      return null;
    }
  };

  return { get, post };
};

export default ApiService;