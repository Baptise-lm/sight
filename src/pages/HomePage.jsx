import { useNavigate } from 'react-router';

const HomePage = () => {
  const navigate = useNavigate();

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
        <p className="text-[16px] text-gray-700 mb-12 mx-auto max-w-[900px]">
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
      <div className="mt-[100px] max-w-[900px] mx-auto px-4">
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
    </div>
  );
};

export default HomePage;
