import React, { createContext, useContext, useState } from 'react';

const MapCenterContext = createContext();

export function MapCenterContextProvider({ children }) {
  const [map_center, setCenter] = useState(
    {
        center : { lat: 37.566535, lng: 126.9779692 },
        level : 8,
    }
  );
  const [circle_on, setCircle_on] = useState(false);

  return (
    <MapCenterContext.Provider value={{ map_center, setCenter, circle_on, setCircle_on }}>
      {children}
    </MapCenterContext.Provider>
  );
}

export function useMapCenterContext() {
  return useContext(MapCenterContext);
}
