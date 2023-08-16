// DataContext.js
import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const RoadContext = createContext();

export const RoadProvider = ({ children }) => {
  const [road_data, setRoadData] = useState([]);

  useEffect(() => {
    // API 요청을 여기서 처리
    axios.get('http://localhost:8000/road')
      .then(response => {
        setRoadData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <RoadContext.Provider value={road_data}>
      {children}
    </RoadContext.Provider>
  );
};

export const useRoadData = () => useContext(RoadContext);
