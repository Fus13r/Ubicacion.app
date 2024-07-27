import React, { useState } from 'react';
import Mapa from './Mapa';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  const [mapCenter, setMapCenter] = useState({ lat: -34.6037, lng: -58.3816 }); // Buenos Aires como centro inicial
  const [mapZoom, setMapZoom] = useState(10);

  const handleLocationChange = (newCenter, newZoom) => {
    setMapCenter(newCenter);
    setMapZoom(newZoom);
  };

  return (
    <div className="App" style={{ display: 'flex', height: '100vh' }}>
      <Sidebar onLocationChange={handleLocationChange} />
      <div style={{ flex: 1, position: 'relative' }}>
        <Mapa center={mapCenter} zoom={mapZoom} />
      </div>
    </div>
  );
}

export default App;