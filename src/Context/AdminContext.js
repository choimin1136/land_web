// DataContext.js
import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin_data, setAdminData] = useState([]);

  useEffect(() => {
    // API 요청을 여기서 처리
    axios.get('http://localhost:8000/admin')
      .then(response => {
        setAdminData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <AdminContext.Provider value={admin_data}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminData = () => useContext(AdminContext);
