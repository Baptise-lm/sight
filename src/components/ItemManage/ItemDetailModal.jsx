// src/components/ItemDetailModal.jsx
import React from 'react';
import { FaTimes, FaBox, FaCalendar, FaTag, FaBuilding, FaMapMarker } from 'react-icons/fa';

const ItemDetailModal = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes className="h-6 w-6" />
        </button>

        <div className="flex flex-col items-center">
          <div className="mb-4">
            <FaBox className="h-12 w-12 text-gray-500" />
          </div>

          <h2 className="text-2xl font-bold mb-2 text-center">{item.name}</h2>

          <div className="w-full mb-4">
            <div className="flex items-center mb-2">
              <FaTag className="h-5 w-5 text-gray-500 mr-2" />
              <span className="font-medium">Catégorie:</span>
              <span className="ml-2">{item.categories?.nom || 'Catégorie inconnue'}</span>
            </div>

            <div className="flex items-center mb-2">
              <FaCalendar className="h-5 w-5 text-gray-500 mr-2" />
              <span className="font-medium">Date de découverte:</span>
              <span className="ml-2">{item.found_date}</span>
            </div>

            <div className="flex items-center mb-2">
              <FaBuilding className="h-5 w-5 text-gray-500 mr-2" />
              <span className="font-medium">Établissement:</span>
              <span className="ml-2">{item.etablissements?.nom || 'Établissement inconnu'}</span>
            </div>

            <div className="flex items-center mb-2">
              <FaMapMarker className="h-5 w-5 text-gray-500 mr-2" />
              <span className="font-medium">Ville:</span>
              <span className="ml-2">{item.etablissements?.villes?.nom || 'Ville inconnue'}</span>
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-lg font-medium mb-2">Description:</h3>
            <p className="text-gray-700">{item.description || 'Aucune description disponible'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailModal;
