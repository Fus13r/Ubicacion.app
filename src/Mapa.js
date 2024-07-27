import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Mapa({ center, zoom }) {
  useEffect(() => {
    const map = L.map('map').setView([center.lat, center.lng], zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const marker = L.marker([center.lat, center.lng]).addTo(map);

    return () => {
      map.remove();
    };
  }, [center, zoom]);

  return <div id="map" style={{ height: '100%', width: '100%' }}></div>;
}

export default Mapa;