// src/components/ItemList.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase'; // Assurez-vous que le chemin est correct

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      let { data, error } = await supabase
        .from('items')
        .select('*');

      if (error) {
        console.error('Error fetching items:', error);
      } else {
        setItems(data);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des objets</h1>
      <ul>
        {items.map(item => (
          <li key={item.id} className="border p-4 mb-2 rounded">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-gray-600">Trouvé le {item.found_date}</p>
            <p className="text-gray-600">Lieu: {item.found_location}</p>
            <p className="text-gray-600">Statut: {item.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
