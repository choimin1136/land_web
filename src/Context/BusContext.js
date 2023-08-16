// DataContext.js
import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const BusContext = createContext();

export const BusProvider = ({ children }) => {
  const [bus_data, setBusData] = useState([]);

  useEffect(() => {
    // API 요청을 여기서 처리
    axios.get('http://localhost:8000/bus')
      .then(response => {
        setBusData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <BusContext.Provider value={bus_data}>
      {children}
    </BusContext.Provider>
  );
};

export const useBusData = () => useContext(BusContext);
