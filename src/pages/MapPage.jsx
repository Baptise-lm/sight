import React from 'react';
import Map from '../components/Map.jsx';

const MapPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Carte des objets trouvés</h1>
      <Map />
    </div>
  );
};

export default MapPage;
