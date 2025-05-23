// src/pages/MapPage.jsx
import React, { useState, useRef } from 'react';
import Map from '../components/Map';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { pinsData, citiesData, categoriesData } from '../utils/MapData';

const MapPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredPins, setFilteredPins] = useState(pinsData);
  const [mapCenter, setMapCenter] = useState([48.05, -0.5]); // Centre entre Paris et Nantes
  const [mapZoom, setMapZoom] = useState(7);
  const mapRef = useRef(null);

  const applyFilters = () => {
    let filtered = pinsData;

    if (searchTerm) {
      filtered = filtered.filter(pin =>
        pin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCity) {
      filtered = filtered.filter(pin =>
        pin.found_location === selectedCity
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(pin =>
        pin.category === selectedCategory
      );
    }

    setFilteredPins(filtered);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCityChange = (e) => {
    const cityName = e.target.value;
    setSelectedCity(cityName);

    // Trouver les coordonnées de la ville sélectionnée
    const selectedCityData = citiesData.find(city => city.name === cityName);

    if (selectedCityData && mapRef.current) {
      // Centrer la carte sur la ville sélectionnée
      setMapCenter([selectedCityData.lat, selectedCityData.lng]);
      setMapZoom(selectedCityData.zoom);

      // Appliquer le zoom après un court délai pour laisser le temps à la carte de se recentrer
      setTimeout(() => {
        if (mapRef.current) {
          mapRef.current.setView([selectedCityData.lat, selectedCityData.lng], selectedCityData.zoom);
        }
      }, 100);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCity('');
    setSelectedCategory('');
    setFilteredPins(pinsData);
    setMapCenter([48.05, -0.5]);
    setMapZoom(7);

    if (mapRef.current) {
      mapRef.current.setView([48.05, -0.5], 7);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[38px] font-bold mb-8 text-center text-gray-900">
          Carte des établissements partenaires
        </h1>

        {/* Barre de filtres */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Barre de recherche */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              </div>
              <input
                type="text"
                placeholder="Rechercher un lieu..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
              />
            </div>

            {/* Filtre par ville */}
            <div className="flex-1">
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={handleCityChange}
                  className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
                >
                  <option value="">Toutes les villes</option>
                  {citiesData.map(city => (
                    <option key={city.name} value={city.name}>{city.name}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                </div>
              </div>
            </div>

            {/* Filtre par catégorie */}
            <div className="flex-1">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
                >
                  <option value="">Toutes les catégories</option>
                  {categoriesData.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                </div>
              </div>
            </div>

            {/* Bouton de réinitialisation */}
            <div className="flex items-center">
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                Réinitialiser
              </button>
            </div>
          </div>
        </div>


        {/* Bouton d'application des filtres */}
        <div className="flex justify-center mb-8">
          <button
            onClick={applyFilters}
            className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Appliquer les filtres
          </button>
        </div>
        {/* Conteneur pour la carte */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-[1100px] h-[900px] bg-white rounded-lg shadow-lg overflow-hidden">
            <Map
              pins={filteredPins}
              center={mapCenter}
              zoom={mapZoom}
              mapRef={mapRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
