// src/components/SortableItemList.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';
import { FaSearch, FaBox, FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

const SortableItemList = () => {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);

  useEffect(() => {
    fetchItems();
  }, [sortBy, sortOrder, searchTerm]);

  const fetchItems = async () => {
    let query = supabase.from('items').select('*');

    if (sortBy === 'category') {
      query = query.order('category', { ascending: sortOrder === 'asc' });
    } else if (sortBy === 'found_location') {
      query = query.order('found_location', { ascending: sortOrder === 'asc' });
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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleSortDropdown = () => {
    setIsSortDropdownOpen(!isSortDropdownOpen);
    setIsOrderDropdownOpen(false);
  };

  const toggleOrderDropdown = () => {
    setIsOrderDropdownOpen(!isOrderDropdownOpen);
    setIsSortDropdownOpen(false);
  };

  const handleSortSelect = (value) => {
    setSortBy(value);
    setIsSortDropdownOpen(false);
  };

  const handleOrderSelect = (value) => {
    setSortOrder(value);
    setIsOrderDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Titre principal */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Liste des objets stockés chez eux
        </h2>

        {/* Barre de recherche */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Input..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Zone de filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {/* Filtre de tri */}
          <div className="relative">
            <button
              onClick={toggleSortDropdown}
              className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span>Trier par</span>
              <FaSort className="ml-2 h-5 w-5" />
            </button>

            {isSortDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
                <div className="py-1">
                  <button
                    onClick={() => handleSortSelect('name')}
                    className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${sortBy === 'name' ? 'bg-gray-100' : ''}`}
                  >
                    Nom
                  </button>
                  <button
                    onClick={() => handleSortSelect('category')}
                    className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${sortBy === 'category' ? 'bg-gray-100' : ''}`}
                  >
                    Catégorie
                  </button>
                  <button
                    onClick={() => handleSortSelect('found_location')}
                    className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${sortBy === 'found_location' ? 'bg-gray-100' : ''}`}
                  >
                    Lieu de découverte
                  </button>
                  <button
                    onClick={() => handleSortSelect('found_date')}
                    className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${sortBy === 'found_date' ? 'bg-gray-100' : ''}`}
                  >
                    Date de découverte
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Filtre d'ordre */}
          <div className="relative">
            <button
              onClick={toggleOrderDropdown}
              className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span>Ordre</span>
              {sortOrder === 'asc' ? (
                <FaSortUp className="ml-2 h-5 w-5" />
              ) : (
                <FaSortDown className="ml-2 h-5 w-5" />
              )}
            </button>

            {isOrderDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
                <div className="py-1">
                  <button
                    onClick={() => handleOrderSelect('asc')}
                    className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${sortOrder === 'asc' ? 'bg-gray-100' : ''}`}
                  >
                    <div className="flex items-center">
                      <span>Croissant</span>
                      <FaSortUp className="ml-2 h-4 w-4" />
                    </div>
                  </button>
                  <button
                    onClick={() => handleOrderSelect('desc')}
                    className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${sortOrder === 'desc' ? 'bg-gray-100' : ''}`}
                  >
                    <div className="flex items-center">
                      <span>Décroissant</span>
                      <FaSortDown className="ml-2 h-4 w-4" />
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Liste des objets */}
        <div className="space-y-4">
          {items.length > 0 ? (
            items.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                <div className="mr-4">
                  <FaBox className="h-6 w-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-medium">
                    {item.name} - {item.category} - {item.found_location}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              Aucun objet trouvé.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SortableItemList;
