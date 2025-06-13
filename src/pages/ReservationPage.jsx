import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
          <h1 className="text-[24px] font-bold mb-8 text-[#4A4A4A] font-baloo">
            Objet non trouvé
          </h1>
          <p className="text-[#4A4A4A] font-nunito">L'objet que vous essayez de récupérer n'existe pas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-[1100px] mx-auto flex flex-col">
        <h1 className="text-[36px] font-bold mb-8 text-center text-[#4A4A4A] font-baloo">
          Livraison à domicile
        </h1>

        {/* Objet sélectionné */}
        <div className="bg-[#FBF7F2] rounded-[20px] p-6 mb-4 border border-[#FFBC33] flex flex-col">
          <h2 className="text-[24px] font-bold mb-2 text-[#4A4A4A] font-baloo">
            Objet sélectionné : {item.name}
          </h2>
          <p className="text-[#4A4A4A] mb-2 font-nunito">
            Catégorie: {item.categories?.nom || 'Catégorie inconnue'}
          </p>
          <p className="text-[#4A4A4A] font-nunito">
            Établissement: {item.etablissements?.nom || 'Établissement inconnu'}
          </p>
        </div>

        {/* Messages */}
        <div className="flex flex-col gap-4">
          {successMessage && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
              <div className="flex items-center">
                <FaCheckCircle className="h-5 w-5 mr-2" />
                <p>{successMessage}</p>
              </div>
            </div>
          )}

          {Object.keys(errors).length > 0 && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
              <div className="flex items-center">
                <FaExclamationTriangle className="h-5 w-5 mr-2" />
                <p>Un ou plusieurs champs sont incorrects. Veuillez vérifier les informations saisies.</p>
              </div>
            </div>
          )}
        </div>

        {/* Formulaire */}
        <div className="p-8 flex flex-col">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Prénom */}
            <div className="flex flex-col gap-4">
              <label htmlFor="firstName" className="text-[20px] text-[#4A4A4A] font-nunito font-normal">
                Prénom *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Insérer votre prénom"
                className={`bg-[#FBF7F2] rounded-full p-5 border text-[16px] text-[#4A4A4A] font-nunito font-normal italic ${errors.firstName ? 'border-red-500' : 'border-[#FFBC33]'} focus:outline-none focus:ring-1 focus:ring-[#FFBC33] placeholder-gray-300`}
              />
              {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
            </div>

            {/* Nom */}
            <div className="flex flex-col gap-4">
              <label htmlFor="lastName" className="text-[20px] text-[#4A4A4A] font-nunito font-normal">
                Nom *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Insérer votre nom"
                className={`bg-[#FBF7F2] rounded-full p-5 border text-[16px] text-[#4A4A4A] font-nunito font-normal italic ${errors.lastName ? 'border-red-500' : 'border-[#FFBC33]'} focus:outline-none focus:ring-1 focus:ring-[#FFBC33] placeholder-gray-300`}
              />
              {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-4">
              <label htmlFor="email" className="text-[20px] text-[#4A4A4A] font-nunito font-normal">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Insérer votre email"
                className={`bg-[#FBF7F2] rounded-full p-5 border text-[16px] text-[#4A4A4A] font-nunito font-normal italic ${errors.email ? 'border-red-500' : 'border-[#FFBC33]'} focus:outline-none focus:ring-1 focus:ring-[#FFBC33] placeholder-gray-300`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            {/* Téléphone */}
            <div className="flex flex-col gap-4">
              <label htmlFor="phone" className="text-[20px] text-[#4A4A4A] font-nunito font-normal">
                Téléphone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Insérer votre numéro de téléphone"
                className={`bg-[#FBF7F2] rounded-full p-5 border text-[16px] text-[#4A4A4A] font-nunito font-normal italic ${errors.phone ? 'border-red-500' : 'border-[#FFBC33]'} focus:outline-none focus:ring-1 focus:ring-[#FFBC33] placeholder-gray-300`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>

            {/* Ville */}
            <div className="flex flex-col gap-4">
              <label htmlFor="city" className="text-[20px] text-[#4A4A4A] font-nunito font-normal">
                Ville *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Insérer votre ville"
                className={`bg-[#FBF7F2] rounded-full p-5 border text-[16px] text-[#4A4A4A] font-nunito font-normal italic ${errors.city ? 'border-red-500' : 'border-[#FFBC33]'} focus:outline-none focus:ring-1 focus:ring-[#FFBC33] placeholder-gray-300`}
              />
              {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
            </div>

            {/* Code postal */}
            <div className="flex flex-col gap-4">
              <label htmlFor="postalCode" className="text-[20px] text-[#4A4A4A] font-nunito font-normal">
                Code postal *
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="Insérer votre code postal"
                className={`bg-[#FBF7F2] rounded-full p-5 border text-[16px] text-[#4A4A4A] font-nunito font-normal italic ${errors.postalCode ? 'border-red-500' : 'border-[#FFBC33]'} focus:outline-none focus:ring-1 focus:ring-[#FFBC33] placeholder-gray-300`}
              />
              {errors.postalCode && <p className="mt-1 text-sm text-red-600">{errors.postalCode}</p>}
            </div>

            {/* Adresse */}
            <div className="flex flex-col gap-4">
              <label htmlFor="address" className="text-[20px] text-[#4A4A4A] font-nunito font-normal">
                Adresse *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Insérer votre adresse"
                className={`bg-[#FBF7F2] rounded-full p-5 border text-[16px] text-[#4A4A4A] font-nunito font-normal italic ${errors.address ? 'border-red-500' : 'border-[#FFBC33]'} focus:outline-none focus:ring-1 focus:ring-[#FFBC33] placeholder-gray-300`}
              />
              {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-4">
              <label htmlFor="message" className="text-[20px] text-[#4A4A4A] font-nunito font-normal">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Insérer votre message"
                className="bg-[#FBF7F2] w-full p-5 border border-[#FFBC33] rounded-[20px] text-[16px] font-nunito font-normal italic placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-[#FFBC33]"
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>

            <p className='font-normal text-[16px] font-nunito text-[#4A4A4A]'>* Champs Obligatoires</p>

            {/* Case à cocher */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="acceptTerms"
                  name="acceptTerms"
                  type="checkbox"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="focus:ring-[#FFBC33] h-4 w-4 text-[#FFBC33] border-[#FFBC33] rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="acceptTerms" className="font-medium text-[#4A4A4A] font-nunito">
                  J'accepte les conditions générales et la politique de confidentialité*
                </label>
                {errors.acceptTerms && <p className="mt-1 text-sm text-red-600">{errors.acceptTerms}</p>}
              </div>
            </div>

            {/* Bouton de soumission */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="flex px-[45px] py-[25px] justify-center items-center gap-[10px] rounded-full text-[18px] font-bold bg-[#FFBC33] text-[#4A4A4A] font-nunito focus:outline-none focus:ring-1 focus:ring-[#FFBC33]"
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
