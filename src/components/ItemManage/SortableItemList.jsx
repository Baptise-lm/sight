import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';
import ItemDetailModal from './ItemDetailModal';
import { FaSearch, FaBox } from 'react-icons/fa';

const SortableItemList = () => {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [villes, setVilles] = useState([]);
  const [etablissements, setEtablissements] = useState([]);
  const [selectedVille, setSelectedVille] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedEtablissement, setSelectedEtablissement] = useState('');

  useEffect(() => {
    fetchItems();
    fetchCategories();
    fetchVilles();
  }, [sortBy, sortOrder, searchTerm, selectedVille, selectedCategory, selectedEtablissement]);

  useEffect(() => {
    if (selectedVille) {
      fetchEtablissementsByVille(selectedVille);
    } else {
      setEtablissements([]);
      setSelectedEtablissement('');
    }
  }, [selectedVille]);

  const fetchItems = async () => {
    let query = supabase
      .from('items')
      .select(`
        *,
        categories:category_id (
          nom
        ),
        etablissements:etablissement_id (
          *,
          villes:ville_id (
            *
          )
        )
      `);

    if (selectedCategory) {
      query = query.eq('category_id', selectedCategory);
    }

    if (selectedEtablissement) {
      query = query.eq('etablissement_id', selectedEtablissement);
    }

    if (selectedVille) {
      query = query.eq('etablissements.villes.id', selectedVille);
    }

    if (sortBy === 'category') {
      query = query.order('category_id', { ascending: sortOrder === 'asc' });
    } else if (sortBy === 'ville') {
      query = query.order('etablissements.villes.nom', { ascending: sortOrder === 'asc' });
    } else if (sortBy === 'etablissement') {
      query = query.order('etablissement_id', { ascending: sortOrder === 'asc' });
    } else if (sortBy === 'found_date') {
      query = query.order('found_date', { ascending: sortOrder === 'asc' });
    } else {
      query = query.order('name', { ascending: sortOrder === 'asc' });
    }

    if (searchTerm) {
      query = query.ilike('name', `%${searchTerm}%`);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching items:', error);
    } else {
      setItems(data);
    }
  };

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('nom', { ascending: true });

    if (error) {
      console.error('Error fetching categories:', error);
    } else {
      setCategories(data);
    }
  };

  const fetchVilles = async () => {
    const { data, error } = await supabase
      .from('villes')
      .select('*')
      .order('nom', { ascending: true });

    if (error) {
      console.error('Error fetching villes:', error);
    } else {
      setVilles(data);
    }
  };

  const fetchEtablissementsByVille = async (villeId) => {
    const { data, error } = await supabase
      .from('etablissements')
      .select('*')
      .eq('ville_id', villeId)
      .order('nom', { ascending: true });

    if (error) {
      console.error('Error fetching etablissements:', error);
    } else {
      setEtablissements(data);
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleVilleChange = (e) => {
    const villeId = e.target.value;
    setSelectedVille(villeId);
    setSelectedEtablissement('');
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleEtablissementChange = (e) => {
    setSelectedEtablissement(e.target.value);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const resetFilters = () => {
    setSelectedVille('');
    setSelectedCategory('');
    setSelectedEtablissement('');
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-[36px] font-bold mb-8 text-center text-[#4A4A4A] font-baloo">
          Liste triable des objets
        </h1>

        {/* Barre de recherche */}
        <div className="relative flex-1 mb-7">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Rechercher un objet..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-[#FBF7F2] rounded-full p-5 pl-10 w-full text-[16px] text-[#4A4A4A] font-nunito font-normal italic focus:outline-none focus:ring-1 focus:ring-[#FFBC33] placeholder-gray-300"
          />
        </div>

        {/* Filtres */}
        <div className='flex flex-row gap-4 mb-7'>
          <div className="flex-1">
            <div className="relative">
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="bg-[#FBF7F2] rounded-full p-5 w-full border border-[#FFBC33] text-[16px] text-[#4A4A4A] font-nunito font-normal italic focus:outline-none focus:ring-1 focus:ring-[#FFBC33]"
              >
                <option value="name">Nom</option>
                <option value="category">Catégorie</option>
                <option value="ville">Ville</option>
                <option value="etablissement">Établissement</option>
                <option value="found_date">Date</option>
              </select>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative">
              <select
                value={sortOrder}
                onChange={handleOrderChange}
                className="bg-[#FBF7F2] rounded-full p-5 w-full border border-[#FFBC33] text-[16px] text-[#4A4A4A] font-nunito font-normal italic focus:outline-none focus:ring-1 focus:ring-[#FFBC33]"
              >
                <option value="asc">Croissant</option>
                <option value="desc">Décroissant</option>
              </select>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="bg-[#FBF7F2] rounded-full p-5 w-full border border-[#FFBC33] text-[16px] text-[#4A4A4A] font-nunito font-normal italic focus:outline-none focus:ring-1 focus:ring-[#FFBC33]"
              >
                <option value="">Toutes les catégories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.nom}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative">
              <select
                value={selectedVille}
                onChange={handleVilleChange}
                className="bg-[#FBF7F2] rounded-full p-5 w-full border border-[#FFBC33] text-[16px] text-[#4A4A4A] font-nunito font-normal italic focus:outline-none focus:ring-1 focus:ring-[#FFBC33]"
              >
                <option value="">Toutes les villes</option>
                {villes.map(ville => (
                  <option key={ville.id} value={ville.id}>{ville.nom}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={resetFilters}
              className="flex h-[57px] px-[36px] py-[20px] justify-center items-center gap-[10px] rounded-full text-[18px] font-bold bg-[#FFBC33] text-[#4A4A4A] font-nunito focus:outline-none focus:ring-1 focus:ring-[#FFBC33]"
            >
              Réinitialiser
            </button>
          </div>
        </div>

        {selectedVille && (
          <div className="mb-4">
            <div className="relative">
              <select
                value={selectedEtablissement}
                onChange={handleEtablissementChange}
                className="bg-[#FBF7F2] rounded-full p-5 w-full border border-[#FFBC33] text-[16px] text-[#4A4A4A] font-nunito font-normal italic focus:outline-none focus:ring-1 focus:ring-[#FFBC33]"
              >
                <option value="">Tous les établissements</option>
                {etablissements.map(etablissement => (
                  <option key={etablissement.id} value={etablissement.id}>{etablissement.nom}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Liste des items */}
        <div className="flex flex-col items-center gap-9 mx-auto mb-16">
          {items.length > 0 ? (
            items.map(item => (
              <div
                key={item.id}
                className="bg-[#FBF7F2] rounded-full p-4 w-full border border-[#FFBC33] cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleItemClick(item)}
              >
                <div className="flex items-center gap-6 ml-[20px]">
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
            ))
          ) : (
            <p className="text-[#4A4A4A] text-center">Aucun objet trouvé.</p>
          )}
        </div>

        {/* Modal pour les détails de l'item */}
        {isModalOpen && selectedItem && (
          <ItemDetailModal
            item={selectedItem}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default SortableItemList;
