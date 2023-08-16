// DataContext.js
import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const MartContext = createContext();

export const MartProvider = ({ children }) => {
  const [mart_data, setMartData] = useState([]);

  useEffect(() => {
    // API 요청을 여기서 처리
    axios.get('http://localhost:8000/mart')
      .then(response => {
        setMartData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <MartContext.Provider value={mart_data}>
      {children}
    </MartContext.Provider>
  );
};

export const useMartData = () => useContext(MartContext);
