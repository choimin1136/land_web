import React, { createContext, useContext, useState } from 'react';

const ClusterContext = createContext();

export function ClusterContextProvider({ children }) {
  const [cluster_val, setCluster] = useState(-1);

  return (
    <ClusterContext.Provider value={{ cluster_val, setCluster }}>
      {children}
    </ClusterContext.Provider>
  );
}

export function useClusterContext() {
  return useContext(ClusterContext);
}
