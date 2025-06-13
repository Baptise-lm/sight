import React, { useState } from 'react';
import { supabase } from '../utils/supabase';
import { FaBox, FaCalendar, FaTag, FaMapMarker, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const LostItemForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    found_date: '',
    found_location: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.category.trim()) newErrors.category = 'La catégorie est requise';
    if (!formData.found_date) newErrors.found_date = 'La date est requise';
    if (!formData.found_location.trim()) newErrors.found_location = 'Le lieu est requis';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('new_items_found')
        .insert([
          {
            name: formData.name,
            category: formData.category,
            description: formData.description,
            found_date: formData.found_date,
            found_location: formData.found_location
          }
        ]);

      if (error) {
        throw error;
      }

      setSuccessMessage('Objet enregistré avec succès !');
      setFormData({
        name: '',
        category: '',
        description: '',
        found_date: '',
        found_location: ''
      });

      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error inserting item:', error);
      setErrors({ submit: "Erreur lors de l'enregistrement de l'objet" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-[36px] font-bold mb-8 text-center text-[#4A4A4A] font-baloo">
          Signaler un objet perdu
        </h1>

        <p className="text-center text-[#4A4A4A] mb-6 text-[18px] font-nunito">
          Veuillez remplir ce formulaire pour nous aider à retrouver votre objet. Plus vous donnez de détails, plus il sera facile de le faire correspondre à un objet trouvé enregistré sur la plateforme.
        </p>

        {/* Messages */}
        <div className="mb-6">
          {successMessage && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 mr-2" />
                <p>{successMessage}</p>
              </div>
            </div>
          )}

          {errors.submit && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
              <div className="flex items-center">
                <FaExclamationTriangle className="h-5 w-5 mr-2" />
                <p>{errors.submit}</p>
              </div>
            </div>
          )}
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Nom */}
            <div className="flex flex-col gap-4">
              <label htmlFor="name" className="text-[20px] text-[#4A4A4A] font-nunito font-normal">
                Nom de l'objet * :
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Insérer le nom de l'objet"
                  className={`bg-[#FBF7F2] rounded-full p-5 w-full border text-[16px] text-[#4A4A4A] font-nunito font-normal italic ${errors.name ? 'border-red-500' : 'border-[#FFBC33]'} focus:outline-none focus:ring-1 focus:ring-[#FFBC33]`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
            </div>

            {/* Lieu */}
            <div className="flex flex-col gap-4">
              <label htmlFor="found_location" className="text-[20px] text-[#4A4A4A] font-nunito font-normal">
                Lieu de la perte * :
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="found_location"
                  name="found_location"
                  value={formData.found_location}
                  onChange={handleChange}
                  placeholder="Insérer le lieu où l'objet a été trouvé"
                  className={`bg-[#FBF7F2] rounded-full p-5 w-full border text-[16px] text-[#4A4A4A] font-nunito font-normal italic ${errors.found_location ? 'border-red-500' : 'border-[#FFBC33]'} focus:outline-none focus:ring-1 focus:ring-[#FFBC33]`}
                />
                {errors.found_location && <p className="mt-1 text-sm text-red-600">{errors.found_location}</p>}
              </div>
            </div>
            
            {/* Date */}
            <div className="flex flex-col gap-4">
              <label htmlFor="found_date" className="text-[20px] text-[#4A4A4A] mb-1 font-nunito font-normal">
                Date de découverte estimé * :
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="found_date"
                  name="found_date"
                  value={formData.found_date}
                  onChange={handleChange}
                  className={`bg-[#FBF7F2] rounded-full p-5 w-full border text-[16px] text-[#4A4A4A] font-nunito font-normal italic ${errors.found_location ? 'border-red-500' : 'border-[#FFBC33]'} focus:outline-none focus:ring-1 focus:ring-[#FFBC33]`}
                />
                {errors.found_date && <p className="mt-1 text-sm text-red-600">{errors.found_date}</p>}
              </div>
            </div>

            {/* Catégorie */}
            <div className="flex flex-col gap-5">
              <label htmlFor="category" className="text-[20px] text-[#4A4A4A] mb-1 font-nunito font-normal">
                Catégorie * :
              </label>
              <div className="relative">
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`bg-[#FBF7F2] rounded-full p-5 w-full border text-[16px] text-[#4A4A4A] font-nunito font-normal italic ${errors.found_location ? 'border-red-500' : 'border-[#FFBC33]'} focus:outline-none focus:ring-1 focus:ring-[#FFBC33]`}
                >
                  <option value="">Sélectionner une catégorie</option>
                  <option value="Téléphone">Téléphone</option>
                  <option value="Portefeuille">Portefeuille</option>
                  <option value="Clés">Clés</option>
                  <option value="Sac">Sac</option>
                  <option value="Lunettes">Lunettes</option>
                  <option value="Autre">Autre</option>
                </select>
                {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-4">
              <label htmlFor="description" className="text-[20px] text-[#4A4A4A] mb-1 font-nunito font-normal">
                Informations additionnelles :
              </label>
              <textarea
                id="description"
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleChange}
                placeholder="Décrivez l'objet trouvé"
                className="bg-[#FBF7F2] w-full p-5 border border-[#FFBC33] rounded-[20px] text-[16px] font-nunito font-normal italic placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-[#FFBC33]"
              ></textarea>
            </div>

            <p className='font-normal text-[16px] font-nunito text-[#4A4A4A]'>* Champs Obligatoires</p>

            {/* Bouton de soumission */}
            <div className="flex justify-center items-center ">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex px-[45px] py-[25px] justify-center items-center gap-[10px] rounded-full text-[18px] font-bold bg-[#FFBC33] transition-colors text-[#4A4A4A] font-nunito ${isSubmitting ? 'bg-gray-400' : 'bg-[#FFBC33]'} focus:outline-none focus:ring-1 focus:ring-[#FFBC33]`}
              >
                {isSubmitting ? 'Enregistrement...' : 'Valider'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LostItemForm;
