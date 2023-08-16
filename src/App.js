import React, { useState } from 'react';
import Map_com from './Map';
import Sidebar from './Sidebar';
import './App.css';
import './App1.css';
import './App2.css';
import './App3.css';
import { AptProvider } from './Context/apt_context';
import { ClusterContextProvider } from './Context/Cluster_set';
import { BusProvider } from './Context/BusContext';
import { MartProvider } from './Context/MartContext';
import { TrainProvider } from './Context/TrainContext';
import { AdminProvider } from './Context/AdminContext';
import { RoadProvider } from './Context/RoadContext';
import { EschoolProvider } from './Context/EschoolContext';
import { MapCenterContextProvider } from './Context/Map_center';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };

  return (
    <ClusterContextProvider>
      <AptProvider>
        <BusProvider>
          <MartProvider>
            <TrainProvider>
              <AdminProvider>
                <RoadProvider>
                  <EschoolProvider>
                    <MapCenterContextProvider>
                      <div className="App">
                        <Sidebar/>
                        <Map_com />
                      </div>
                    </MapCenterContextProvider>
                  </EschoolProvider>
                </RoadProvider>
              </AdminProvider>
            </TrainProvider>
          </MartProvider>
        </BusProvider>
      </AptProvider>
    </ClusterContextProvider>
  );
}

export default App;
