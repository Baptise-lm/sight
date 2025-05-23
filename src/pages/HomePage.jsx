import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';
import { FaBox, FaTag, FaMapMarker } from 'react-icons/fa';

const HomePage = () => {
  const navigate = useNavigate();
  const [usersWithItems, setUsersWithItems] = useState([]);

  useEffect(() => {
    const fetchUsersWithItems = async () => {
      const { data, error } = await supabase
        .from('items')
        .select(`
          *,
          users:found_by (
            username
          ),
          categories:category_id (
            nom
          ),
          etablissements:etablissement_id (
            nom,
            villes:ville_id (
              nom
            )
          )
        `)
        .limit(5);

      if (error) {
        console.error('Error fetching users with items:', error);
      } else {
        setUsersWithItems(data);
      }
    };

    fetchUsersWithItems();
  }, []);

  const handleFoundItemClick = () => {
    navigate('/sortable-items');
  };

  const handleLostItemClick = () => {
    navigate('/lost-item-form');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Titre principal */}
        <h1 className="text-[38px] font-bold mb-8 text-gray-900">
          Explication & Boutons "objet trouvé" & "Objet perdu"
        </h1>

        {/* Texte explicatif */}
        <p className="text-[16px] text-gray-700 mb-12 mx-auto max-w-[1100px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button
            onClick={handleFoundItemClick}
            className="flex h-[57px] px-[30px] py-[20px] justify-center items-center gap-[10px] border border-black text-[16px] font-medium hover:bg-gray-100 transition-colors"
          >
            Objet trouvé
          </button>

          <button
            onClick={handleLostItemClick}
            className="flex h-[57px] px-[30px] py-[20px] justify-center items-center gap-[10px] border border-black text-[16px] font-medium hover:bg-gray-100 transition-colors"
          >
            Objet perdu
          </button>
        </div>
      </div>

      {/* Section Fonctionnement */}
      <div className="mt-[100px] max-w-[1100px] mx-auto px-4">
        <h2 className="text-[32px] font-bold mb-14 text-center text-gray-900">
          Fonctionnement et étapes de restitution
        </h2>

        {/* Étape 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          {/* Image */}
          <div className="w-full md:w-[350px] h-[200px] bg-gray-200 rounded-lg flex items-center justify-center">
            <img
              src="https://via.placeholder.com/350x200"
              alt="Étape 1"
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Texte */}
          <div className="flex-1">
            <h3 className="text-[28px] font-bold mb-4 text-gray-900">
              Nom de l'étape 1
            </h3>
            <p className="text-[16px] text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        {/* Étape 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
          {/* Image */}
          <div className="w-full md:w-[350px] h-[200px] bg-gray-200 rounded-lg flex items-center justify-center">
            <img
              src="https://via.placeholder.com/350x200"
              alt="Étape 2"
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Texte */}
          <div className="flex-1">
            <h3 className="text-[28px] font-bold mb-4 text-gray-900">
              Nom de l'étape 2
            </h3>
            <p className="text-[16px] text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        {/* Étape 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          {/* Image */}
          <div className="w-full md:w-[350px] h-[200px] bg-gray-200 rounded-lg flex items-center justify-center">
            <img
              src="https://via.placeholder.com/350x200"
              alt="Étape 3"
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Texte */}
          <div className="flex-1">
            <h3 className="text-[28px] font-bold mb-4 text-gray-900">
              Nom de l'étape 3
            </h3>
            <p className="text-[16px] text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      {/* Section Merci à nos utilisateurs */}
      <div className="mt-[100px] max-w-[1100px] mx-auto px-4 mb-16">
        <h2 className="text-[32px] font-bold mb-12 text-center text-gray-900">
          Merci à nos utilisateurs !
        </h2>

        {/* Cards en colonne */}
        <div className="flex flex-col items-center gap-4 max-w-[900px] mx-auto">
          {usersWithItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 w-full">
              <div className="flex items-center gap-6">
                <p className="text-[16px] font-medium text-gray-900">
                  {item.users?.username || 'Utilisateur inconnu'} a ramené :
                </p>
                <div className="flex items-center gap-4">
                  <FaBox className="text-gray-500" />
                  <span className="text-[16px] text-gray-700">{item.name}</span>
                  <span className='text-[16px]'> - </span>
                  <span className="text-[16px] text-gray-700">{item.categories?.nom || 'Catégorie inconnue'}</span>
                  <span className='text-[16px]'> - </span>
                  <span className="text-[16px] text-gray-700">{item.etablissements?.villes?.nom || 'Ville inconnue'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
