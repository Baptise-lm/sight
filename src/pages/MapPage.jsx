// src/pages/MapPage.jsx
import React from 'react';
import Map from '../components/Map';

const MapPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-center text-gray-900">
          Carte des établissements partenaires
        </h1>

        {/* Conteneur pour la carte */}
        <div className="flex justify-center">
          <div className="w-full max-w-[600px] max-h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
