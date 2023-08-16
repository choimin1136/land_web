// DataContext.js
import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AptContext = createContext();

export const AptProvider = ({ children }) => {
  const [data, setData] = useState([]);


  useEffect(() => {
    // API 요청을 여기서 처리
    axios.get('http://localhost:8000/apt/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <AptContext.Provider value={data}>
      {children}
    </AptContext.Provider>
  );
};

export const useAptData = () => useContext(AptContext);
