import React, { useState, useRef } from 'react';
import Map from '../components/Map';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { pinsData, citiesData, categoriesData } from '../utils/MapData';
import { useNavigate } from 'react-router';

const MapPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredPins, setFilteredPins] = useState(pinsData);
  const [mapCenter, setMapCenter] = useState([48.05, -0.5]);
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

    const selectedCityData = citiesData.find(city => city.name === cityName);

    if (selectedCityData && mapRef.current) {
      setMapCenter([selectedCityData.lat, selectedCityData.lng]);
      setMapZoom(selectedCityData.zoom);

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

  const handleFoundItemClick = () => {
    navigate('/sortable-items');
  };

  const handleLostItemClick = () => {
    navigate('/lost-item-form');
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="flex flex-col gap-7 max-w-[1100px] mx-auto">
        <h1 className="text-[36px] font-bold text-center text-[#4A4A4A] font-baloo">
          Nos établissements partenaires
        </h1>

        <p className="text-center text-[#4A4A4A] text-[18px] font-nunito">
          Repérez en un clin d’œil les établissements partenaires qui stockent des objets trouvés. Chaque point sur la carte correspond à un lieu où vous pouvez potentiellement retrouver ce que vous avez perdu.
        </p>

        {/* Barre de recherche */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Rechercher un lieu..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-[#FBF7F2] rounded-full p-5 pl-10 w-full text-[16px] text-[#4A4A4A] font-nunito font-normal italic focus:outline-none focus:ring-1 focus:ring-[#FFBC33] placeholder-gray-300"
          />
        </div>

        <div className='flex flex-row gap-4 mb-4'>
          {/* Filtre par ville */}
          <div className="flex-1">
            <div className="relative">
              <select
                value={selectedCity}
                onChange={handleCityChange}
                className="bg-[#FBF7F2] rounded-full p-5 w-full border border-[#FFBC33] text-[16px] text-[#4A4A4A] font-nunito font-normal italic focus:outline-none focus:ring-1 focus:ring-[#FFBC33]"
              >
                <option value="">Toutes les villes</option>
                {citiesData.map(city => (
                  <option key={city.name} value={city.name}>{city.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Filtre par catégorie */}
          <div className="flex-1">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="bg-[#FBF7F2] rounded-full p-5 w-full border border-[#FFBC33] text-[16px] text-[#4A4A4A] font-nunito font-normal italic focus:outline-none focus:ring-1 focus:ring-[#FFBC33]"
              >
                <option value="">Toutes les catégories</option>
                {categoriesData.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Bouton de réinitialisation */}
          <div className="flex items-center">
            <button
              onClick={resetFilters}
              className="flex px-[36px] py-[20px] justify-center items-center gap-[10px] rounded-full text-[18px] font-bold bg-[#FFBC33] text-[#4A4A4A] font-nunito focus:outline-none focus:ring-1 focus:ring-[#FFBC33]"
            >
              Réinitialiser
            </button>
          </div>

          {/* Bouton d'application des filtres */}
          <div className="flex justify-center">
            <button
              onClick={applyFilters}
              className="flex px-[36px] py-[20px] justify-center items-center gap-[10px] rounded-full text-[18px] font-bold bg-[#FFBC33] text-[#4A4A4A] font-nunito focus:outline-none focus:ring-1 focus:ring-[#FFBC33]"
            >
              Appliquer les filtres
            </button>
          </div>
        </div>


        {/* Conteneur pour la carte */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-[1100px] h-[900px] bg-white rounded-[20px] shadow-lg overflow-hidden">
            <Map
              pins={filteredPins}
              center={mapCenter}
              zoom={mapZoom}
              mapRef={mapRef}
            />
          </div>
        </div>

        <div className="mx-auto text-center mb-16 mt-8">
          {/* Titre principal */}
          <h1 className="text-[36px] font-baloo font-bold mb-8 text-[#4A4A4A]">
            Vous avez perdu un objet ?
          </h1>

          {/* Texte explicatif */}
          <p className="text-[18px] text-[#4A4A4A] mb-12 mx-auto max-w-[1100px]">
            Indiquez-le ici pour lancer votre recherche. Que ce soit dans un lieu public, une entreprise ou un établissement partenaire, notre service centralise les objets trouvés pour vous aider à les retrouver plus rapidement. Commencez par signaler ce que vous avez perdu ou parcourez les objets déjà enregistrés.
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row justify-center gap-12">
            <button
              onClick={handleLostItemClick}
              className="flex px-[30px] py-[15px] justify-center items-center gap-[10px] rounded-full text-[18px] font-bold bg-[#FFBC33] transition-colors text-[#4A4A4A] font-nunito"
            >
              Objet perdu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
