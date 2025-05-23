// src/components/SortableItemList.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';
import ItemDetailModal from './ItemDetailModal';
import { FaSearch, FaBox, FaFilter } from 'react-icons/fa';

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

    // Filtres
    if (selectedCategory) {
      query = query.eq('category_id', selectedCategory);
    }

    if (selectedEtablissement) {
      query = query.eq('etablissement_id', selectedEtablissement);
    }

    if (selectedVille) {
      query = query.eq('etablissements.villes.id', selectedVille);
    }

    // Tri
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
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-[38px] font-bold mb-8 text-center text-gray-900">
          Liste triable des objets
        </h1>

        {/* Barre de recherche */}
        <div className="max-w-[1100px] mb-6 mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
        </div>

        {/* Filtres */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Tri par */}
            <div>
              <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-1">
                Trier par
              </label>
              <select
                id="sortBy"
                value={sortBy}
                onChange={handleSortChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
              >
                <option value="name">Nom</option>
                <option value="category">Catégorie</option>
                <option value="ville">Ville</option>
                <option value="etablissement">Établissement</option>
                <option value="found_date">Date</option>
              </select>
            </div>

            {/* Ordre */}
            <div>
              <label htmlFor="sortOrder" className="block text-sm font-medium text-gray-700 mb-1">
                Ordre
              </label>
              <select
                id="sortOrder"
                value={sortOrder}
                onChange={handleOrderChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
              >
                <option value="asc">Croissant</option>
                <option value="desc">Décroissant</option>
              </select>
            </div>

            {/* Catégorie */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Catégorie
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
              >
                <option value="">Toutes les catégories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.nom}</option>
                ))}
              </select>
            </div>

            {/* Ville */}
            <div>
              <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-1">
                Ville
              </label>
              <select
                id="ville"
                value={selectedVille}
                onChange={handleVilleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
              >
                <option value="">Toutes les villes</option>
                {villes.map(ville => (
                  <option key={ville.id} value={ville.id}>{ville.nom}</option>
                ))}
              </select>
            </div>

            {/* Établissement */}
            {selectedVille && (
              <div className="md:col-span-4">
                <label htmlFor="etablissement" className="block text-sm font-medium text-gray-700 mb-1">
                  Établissement
                </label>
                <select
                  id="etablissement"
                  value={selectedEtablissement}
                  onChange={handleEtablissementChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
                >
                  <option value="">Tous les établissements</option>
                  {etablissements.map(etablissement => (
                    <option key={etablissement.id} value={etablissement.id}>{etablissement.nom}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Bouton de réinitialisation */}
            <div className="flex justify-end md:col-span-4">
              <button
                type="button"
                onClick={resetFilters}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          </div>
        </div>

        {/* Liste des items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1100px] mx-auto">
          {items.length > 0 ? (
            items.map(item => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleItemClick(item)}
              >
                <div className="flex items-center">
                  <div className="mr-4">
                    <FaBox className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">
                      {item.name} - {item.categories?.nom || 'Catégorie inconnue'}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {item.etablissements?.villes?.nom || 'Ville inconnue'}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 col-span-full text-center">Aucun objet trouvé.</p>
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
