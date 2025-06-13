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
    <div className="min-h-screen bg-[#FFFDF5] py-12 px-4 mb-10 font-nunito">
      <div className="max-w-4xl mx-auto text-center">
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
            onClick={handleFoundItemClick}
            className="flex px-[30px] py-[15px] justify-center items-center gap-[10px] rounded-full text-[18px] font-bold bg-[#FFBC33] transition-colors text-[#4A4A4A] font-nunito"
          >
            Objet trouvé
          </button>

          <button
            onClick={handleLostItemClick}
            className="flex px-[30px] py-[15px] justify-center items-center gap-[10px] rounded-full text-[18px] font-bold bg-[#FFBC33] transition-colors text-[#4A4A4A] font-nunito"
          >
            Objet perdu
          </button>
        </div>
      </div>

      {/* Section Fonctionnement */}
      <div className="flex flex-col gap-18 mt-[120px] max-w-[1100px] mx-auto px-8">
        <h2 className="text-[36px] font-baloo font-bold text-center text-[#4A4A4A]">
          En quoi consiste Oubly ?
        </h2>

        {/* Étape 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div
            className="w-full md:w-[350px] h-[200px] rounded-lg flex items-center justify-center bg-[url('https://i.ibb.co/qMxbv3pz/714ccbb1aa427b583aa2c3e4c3fb0f9522397727.jpg')] bg-cover bg-center">
          </div>

          {/* Texte */}
          <div className="flex-1">
            <h3 className="text-[28px] font-baloo font-bold mb-4 text-[#4A4A4A]">
              Un service pensé pour tous, partout en France
            </h3>
            <p className="text-[18px] text-[#4A4A4A]">
              Notre service permet à toute personne de retrouver facilement un objet perdu, peu importe où il a été égaré en France. Il centralise les recherches sur une seule plateforme.
              <br/><br/>
              Nous nous adressons aussi aux entreprises, établissements publics ou privés qui gèrent chaque jour des dizaines d'objets trouvés. Grâce à notre outil, ils peuvent mieux organiser leur stockage et faciliter la restitution aux propriétaires légitimes.
            </p>
          </div>
        </div>

        {/* Étape 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Image */}
          <div
            className="w-full md:w-[350px] h-[200px] rounded-lg flex items-center justify-center bg-[url('https://i.ibb.co/Hfxb4Tr4/6c78698ef8a67d6245628457ca22661a198008a9.jpg')] bg-cover bg-center">
          </div>

          {/* Texte */}
          <div className="flex-1">
            <h3 className="text-[28px] font-baloo font-bold mb-4 text-[#4A4A4A]">
              Une implantation locale à Nantes
            </h3>
            <p className="text-[18px] text-[#4A4A4A]">
              Le projet a été lancé à Nantes, une ville dynamique et idéale pour tester notre service en conditions réelles. C'est ici que nous avons mis en place nos premiers partenariats avec des lieux à forte fréquentation.
              <br/><br/>
              Cette implantation locale nous permet de construire un modèle solide avant de le déployer progressivement dans d'autres villes en France.
            </p>
          </div>
        </div>

        {/* Étape 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-5">
          {/* Image */}
          <div
            className="w-full md:w-[350px] h-[200px] rounded-lg flex items-center justify-center bg-[url('https://i.ibb.co/Q778kJsM/1e9583f44565844643e1a659306749a235f732fd.jpg')] bg-cover bg-center">
          </div>

          {/* Texte */}
          <div className="flex-1">
            <h3 className="text-[28px] font-baloo font-bold mb-4 text-[#4A4A4A]">
              Comment ça fonctionne ?
            </h3>
            <p className="text-[18px] text-[#4A4A4A]">
              Pour récupérer un objet, l'utilisateur commence par le signaler ou le rechercher à l'aide de filtres pratiques (lieu, type d'objet, date...). Il consulte ensuite une fiche détaillée pour confirmer qu'il s'agit bien de son bien.
              <br/><br/>
              S'il le retrouve, il peut soit se rendre sur place pour le récupérer, soit demander une livraison à domicile ou en point relais, selon ce qui lui convient le mieux.
            </p>
          </div>
        </div>
      </div>

      {/* Section Merci à nos utilisateurs */}
      <div className="mt-[100px] max-w-[1100px] mx-auto px-4">
        <h2 className="text-[36px] font-baloo font-bold mb-12 text-center text-[#4A4A4A]">
          Découvrez les objets trouvés le plus récemment
        </h2>

        {/* Cards en colonne */}
        <div className="flex flex-col items-center gap-9 max-w-[900px] mx-auto">
          {usersWithItems.map((item, index) => (
            <div key={index} className="bg-[#FBF7F2] rounded-full p-4 w-full border border-[#FFBC33]">
              <div className="flex items-center gap-6 ml-[20px]">
                <p className=" items-center text-[18px] font-bold text-[#4A4A4A] font-baloo">
                  {item.users?.username || 'Utilisateur inconnu'} a ramené :
                </p>

                <div className="flex items-center gap-4">
                  <FaBox className="text-[#4A4A4A]" />
                  <span className="text-[18px] text-[#4A4A4A] font-nunito">{item.name}</span>
                  <span className='text-[18px] font-nunito'>-</span>
                  <span className="text-[18px] text-[#4A4A4A] font-nunito">{item.categories?.nom || 'Catégorie inconnue'}</span>
                  <span className='text-[18px] font-nunito'>-</span>
                  <span className="text-[18px] text-[#4A4A4A] font-nunito">{item.etablissements?.villes?.nom || 'Ville inconnue'}</span>
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
