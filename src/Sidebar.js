import React, { useState } from 'react';
  import axios from 'axios';
  import './Sidebar.css'; // Asegúrate de crear este archivo CSS

  function Sidebar({ onLocationChange }) {
    const [country, setCountry] = useState('');
    const [province, setProvince] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      const query = `${address}, ${neighborhood}, ${province}, ${country}`.trim();
      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`);
        if (response.data && response.data.length > 0) {
          const { lat, lon } = response.data[0];
          onLocationChange({ lat: parseFloat(lat), lng: parseFloat(lon) }, 15);
        } else {
          alert('No se encontró la ubicación. Por favor, intenta con datos más específicos.');
        }
      } catch (error) {
        console.error('Error al buscar la ubicación:', error);
        alert('Hubo un error al buscar la ubicación. Por favor, inténtalo de nuevo.');
      }
    };

    return (
      <div className="sidebar">
        <h2>Búsqueda de Ubicación</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="country">País:</label>
            <input 
              id="country"
              type="text" 
              value={country} 
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="province">Provincia:</label>
            <input 
              id="province"
              type="text" 
              value={province} 
              onChange={(e) => setProvince(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="neighborhood">Barrio:</label>
            <input 
              id="neighborhood"
              type="text" 
              value={neighborhood} 
              onChange={(e) => setNeighborhood(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Dirección:</label>
            <input 
              id="address"
              type="text" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button type="submit">Buscar</button>
        </form>
      </div>
    );
  }

  export default Sidebar;
  