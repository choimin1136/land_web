// DataContext.js
import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const TrainContext = createContext();

export const TrainProvider = ({ children }) => {
  const [train_data, setTrainData] = useState([]);

  useEffect(() => {
    // API 요청을 여기서 처리
    axios.get('http://localhost:8000/train')
      .then(response => {
        setTrainData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <TrainContext.Provider value={train_data}>
      {children}
    </TrainContext.Provider>
  );
};

export const useTrainData = () => useContext(TrainContext);
