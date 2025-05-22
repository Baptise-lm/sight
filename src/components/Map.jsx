// src/components/Map.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Custom pin icon
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // Remplacez par l'URL de votre icône personnalisée
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function Map() { // Définir le composant comme une fonction
  // Coordonnées de Paris pour centrer la carte
  const position = [47.24553423852102, -1.6198661926216569];

  // Exemple de données pour les épingles
  const pins = [
    { id: 1, position: [47.24553423852102, -1.6198661926216569], name: "My Digital School", description: "Ecole du digital" },
    { id: 2, position: [47.24733183338385, -1.6051613089796004], name: "Auchan", description: "Supermarché" },
    { id: 3, position: [47.245575884962356, -1.6023566041455273], name: "Burger King", description: "Fast Food" },
  ];

  return (
    <div className="h-screen w-full">
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pins.map(pin => (
          <Marker key={pin.id} position={pin.position} icon={customIcon}>
            <Popup>
              <div>
                <h3>{pin.name}</h3>
                <p>{pin.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
