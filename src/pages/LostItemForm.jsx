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
        <h1 className="text-[38px] font-bold mb-8 text-center text-gray-900">
          Formulaire pour signaler que tu as trouvé un objet
        </h1>

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
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom de l'objet
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Insérer le nom de l'objet"
                  className={`block w-full px-3 py-2 border rounded-md placeholder-gray-300 ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-gray-500`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
            </div>

            {/* Catégorie */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Catégorie
              </label>
              <div className="relative">
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`block w-full px-3 py-2 border rounded-md ${errors.category ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-gray-500`}
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
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleChange}
                placeholder="Décrivez l'objet trouvé"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
              ></textarea>
            </div>

            {/* Date */}
            <div>
              <label htmlFor="found_date" className="block text-sm font-medium text-gray-700 mb-1">
                Date de découverte
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="found_date"
                  name="found_date"
                  value={formData.found_date}
                  onChange={handleChange}
                  className={`block w-full px-3 py-2 border rounded-md ${errors.found_date ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-gray-500`}
                />
                {errors.found_date && <p className="mt-1 text-sm text-red-600">{errors.found_date}</p>}
              </div>
            </div>

            {/* Lieu */}
            <div>
              <label htmlFor="found_location" className="block text-sm font-medium text-gray-700 mb-1">
                Lieu de découverte
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="found_location"
                  name="found_location"
                  value={formData.found_location}
                  onChange={handleChange}
                  placeholder="Insérer le lieu où l'objet a été trouvé"
                  className={`block w-full px-3 py-2 border rounded-md placeholder-gray-300 ${errors.found_location ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-gray-500`}
                />
                {errors.found_location && <p className="mt-1 text-sm text-red-600">{errors.found_location}</p>}
              </div>
            </div>

            {/* Bouton de soumission */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-md text-white transition-colors ${isSubmitting ? 'bg-gray-400' : 'bg-gray-600 hover:bg-gray-700'} focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2`}
              >
                {isSubmitting ? 'Enregistrement...' : 'Enregistrer l\'objet'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LostItemForm;
