import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const ReservationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    postalCode: '',
    address: '',
    message: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(\+33|0)[1-9](\d{2}){4}$/;
  const postalCodeRegex = /^\d{5}$/;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'Le prénom est requis';
    if (!formData.lastName.trim()) newErrors.lastName = 'Le nom est requis';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Numéro de téléphone invalide (ex: 0612345678 ou +33612345678)';
    }
    if (!formData.city.trim()) newErrors.city = 'La ville est requise';
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Le code postal est requis';
    } else if (!postalCodeRegex.test(formData.postalCode)) {
      newErrors.postalCode = 'Code postal invalide (5 chiffres)';
    }
    if (!formData.address.trim()) newErrors.address = 'L\'adresse est requise';
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'Vous devez accepter les conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccessMessage('Demande de récupération envoyée avec succès !');
      setTimeout(() => {
        setSuccessMessage('');
        navigate('/');
      }, 3000);
    }
  };

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-8 text-gray-900">
            Objet non trouvé
          </h1>
          <p className="text-gray-700">L'objet que vous essayez de récupérer n'existe pas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Livraison à domicile
        </h1>

        {/* Objet sélectionné */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-2 text-gray-900">
            Objet sélectionné : {item.name}
          </h2>
          <p className="text-gray-700 mb-2">
            Catégorie: {item.categories?.nom || 'Catégorie inconnue'}
          </p>
          <p className="text-gray-700">
            Établissement: {item.etablissements?.nom || 'Établissement inconnu'}
          </p>
        </div>

        {/* Message de succès */}
        {successMessage && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6">
            <div className="flex items-center">
              <FaCheckCircle className="h-5 w-5 mr-2" />
              <p>{successMessage}</p>
            </div>
          </div>
        )}

        {/* Message d'erreur global */}
        {Object.keys(errors).length > 0 && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
            <div className="flex items-center">
              <FaExclamationTriangle className="h-5 w-5 mr-2" />
              <p>Un ou plusieurs champs sont incorrects. Veuillez vérifier les informations saisies.</p>
            </div>
          </div>
        )}

        {/* Formulaire */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Prénom */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Insérer votre prénom"
                  className={`block w-full px-3 py-2 border rounded-md placeholder-gray-300 ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-gray-500`}
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
              </div>

              {/* Nom */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Insérer votre nom"
                  className={`block w-full px-3 py-2 border rounded-md placeholder-gray-300 ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-gray-500`}
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Insérer votre email"
                  className={`block w-full px-3 py-2 border rounded-md placeholder-gray-300 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-gray-500`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Téléphone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Insérer votre numéro de téléphone"
                  className={`block w-full px-3 py-2 border rounded-md placeholder-gray-300 ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-gray-500`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              {/* Ville */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  Ville
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Insérer votre ville"
                  className={`block w-full px-3 py-2 border rounded-md placeholder-gray-300 ${errors.city ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-gray-500`}
                />
                {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
              </div>

              {/* Code postal */}
              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                  Code postal
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Insérer votre code postal"
                  className={`block w-full px-3 py-2 border rounded-md placeholder-gray-300 ${errors.postalCode ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-gray-500`}
                />
                {errors.postalCode && <p className="mt-1 text-sm text-red-600">{errors.postalCode}</p>}
              </div>
            </div>

            {/* Adresse */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Adresse
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Insérer votre adresse"
                className={`block w-full px-3 py-2 border rounded-md placeholder-gray-300 ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-gray-500`}
              />
              {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Insérer votre message"
                className={`block w-full px-3 py-2 border rounded-md placeholder-gray-300 ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-gray-500`}
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>

            {/* Case à cocher */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="acceptTerms"
                  name="acceptTerms"
                  type="checkbox"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="focus:ring-gray-500 h-4 w-4 text-gray-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="acceptTerms" className="font-medium text-gray-700">
                  J'accepte les conditions générales et la politique de confidentialité*
                </label>
                {errors.acceptTerms && <p className="mt-1 text-sm text-red-600">{errors.acceptTerms}</p>}
              </div>
            </div>

            {/* Bouton de soumission */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Demander la récupération
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
