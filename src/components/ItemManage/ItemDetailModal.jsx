import React from 'react';
import { useNavigate } from 'react-router';
import { FaTimes, FaBox, FaCalendar, FaTag, FaBuilding, FaMapMarker } from 'react-icons/fa';

const ItemDetailModal = ({ item, onClose }) => {
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate('/reservation', { state: { item } });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#FBF7F2] rounded-[20px] shadow-xl w-full max-w-md p-6 relative border border-[#FFBC33]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#4A4A4A] hover:text-gray-700"
        >
          <FaTimes className="h-6 w-6" />
        </button>

        <div className="flex flex-col items-center">
          <div className="mb-4">
            <FaBox className="h-12 w-12 text-[#4A4A4A]" />
          </div>

          <h2 className="text-[24px] font-bold mb-2 text-center text-[#4A4A4A] font-baloo">{item.name}</h2>

          <div className="w-full mb-4">
            <div className="flex items-center mb-2">
              <FaTag className="h-5 w-5 text-[#4A4A4A] mr-2" />
              <span className="font-medium text-[#4A4A4A] font-nunito">Catégorie:</span>
              <span className="ml-2 text-[#4A4A4A] font-nunito">{item.categories?.nom || 'Catégorie inconnue'}</span>
            </div>

            <div className="flex items-center mb-2">
              <FaCalendar className="h-5 w-5 text-[#4A4A4A] mr-2" />
              <span className="font-medium text-[#4A4A4A] font-nunito">Date de découverte:</span>
              <span className="ml-2 text-[#4A4A4A] font-nunito">{item.found_date}</span>
            </div>

            <div className="flex items-center mb-2">
              <FaBuilding className="h-5 w-5 text-[#4A4A4A] mr-2" />
              <span className="font-medium text-[#4A4A4A] font-nunito">Établissement:</span>
              <span className="ml-2 text-[#4A4A4A] font-nunito">{item.etablissements?.nom || 'Établissement inconnu'}</span>
            </div>

            <div className="flex items-center mb-2">
              <FaMapMarker className="h-5 w-5 text-[#4A4A4A] mr-2" />
              <span className="font-medium text-[#4A4A4A] font-nunito">Ville:</span>
              <span className="ml-2 text-[#4A4A4A] font-nunito">{item.etablissements?.villes?.nom || 'Ville inconnue'}</span>
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-[18px] font-medium mb-2 text-[#4A4A4A] font-nunito">Description:</h3>
            <p className="text-[#4A4A4A] font-nunito">{item.description || 'Aucune description disponible'}</p>
          </div>

          {/* Bouton de réservation */}
          <div className="mt-6 w-full">
            <button
              onClick={handleReservationClick}
              className="w-full px-4 py-2 bg-[#FFBC33] text-[#4A4A4A] rounded-full hover:bg-[#e0a82e] transition-colors font-bold font-nunito"
            >
              Cet objet m'appartient
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailModal;
