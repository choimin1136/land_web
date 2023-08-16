// DataContext.js
import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const EschoolContext = createContext();

export const EschoolProvider = ({ children }) => {
  const [eschool_data, setEschoolData] = useState([]);

  useEffect(() => {
    // API 요청을 여기서 처리
    axios.get('http://localhost:8000/eschool')
      .then(response => {
        setEschoolData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <EschoolContext.Provider value={eschool_data}>
      {children}
    </EschoolContext.Provider>
  );
};

export const useEschoolData = () => useContext(EschoolContext);
