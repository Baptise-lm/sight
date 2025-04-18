// src/components/ItemCRUD.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';

const ItemCRUD = () => {
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [foundDate, setFoundDate] = useState('');
  const [foundLocation, setFoundLocation] = useState('');
  const [status, setStatus] = useState('found');
  const [image, setImage] = useState('');
  const [foundBy, setFoundBy] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
    fetchUsers();
  }, []);

  const fetchItems = async () => {
    let { data, error } = await supabase.from('items').select('*');
    if (error) console.error('Error fetching items:', error);
    else setItems(data);
  };

  const fetchUsers = async () => {
    let { data, error } = await supabase.from('users').select('id, username');
    if (error) console.error('Error fetching users:', error);
    else setUsers(data);
  };

  const createItem = async () => {
    if (!name || !category || !foundDate || !foundLocation || !foundBy) {
      setError('Tous les champs sont requis.');
      return;
    }

    const { data, error } = await supabase.from('items').insert([
      {
        name,
        category,
        description,
        found_date: foundDate,
        found_location: foundLocation,
        status,
        image: image || 'default-image.jpg', // Utiliser l'image fournie ou une valeur par défaut
        found_by: parseInt(foundBy), // Utiliser l'ID de l'utilisateur sélectionné
      },
    ]);

    console.log('Response data:', data); // Ajout d'un log pour inspecter la réponse
    console.log('Response error:', error); // Ajout d'un log pour inspecter l'erreur

    if (error) {
      console.error('Error creating item:', error);
      setError(error.message);
    } else {
      fetchItems(); // Recharger les items après une création réussie
      resetForm();
    }
  };

  const updateItem = async (id) => {
    if (!name || !category || !foundDate || !foundLocation || !foundBy) {
      setError('Tous les champs sont requis.');
      return;
    }

    const { data, error } = await supabase.from('items').update({
      name,
      category,
      description,
      found_date: foundDate,
      found_location: foundLocation,
      status,
      image: image || 'default-image.jpg', // Utiliser l'image fournie ou une valeur par défaut
      found_by: parseInt(foundBy), // Utiliser l'ID de l'utilisateur sélectionné
    }).eq('id', id);

    console.log('Response data:', data); // Ajout d'un log pour inspecter la réponse
    console.log('Response error:', error); // Ajout d'un log pour inspecter l'erreur

    if (error) {
      console.error('Error updating item:', error);
      setError(error.message);
    } else {
      fetchItems(); // Recharger les items après une mise à jour réussie
      resetForm();
    }
  };

  const deleteItem = async (id) => {
    const { error } = await supabase.from('items').delete().eq('id', id);
    if (error) {
      console.error('Error deleting item:', error);
      setError(error.message);
    } else {
      fetchItems(); // Recharger les items après une suppression réussie
    }
  };

  const resetForm = () => {
    setName('');
    setCategory('');
    setDescription('');
    setFoundDate('');
    setFoundLocation('');
    setStatus('found');
    setImage('');
    setFoundBy('');
    setError(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gros CRUD BOUM</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-4">
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Catégorie"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="date"
          value={foundDate}
          onChange={(e) => setFoundDate(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Lieu trouvé"
          value={foundLocation}
          onChange={(e) => setFoundLocation(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="URL de l'image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-2 mr-2"
        />
        <select
          value={foundBy}
          onChange={(e) => setFoundBy(e.target.value)}
          className="border p-2 mr-2"
        >
          <option value="">Sélectionnez un utilisateur</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </select>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 mr-2"
        >
          <option value="found">Trouvé</option>
          <option value="claimed">Réclamé</option>
          <option value="sold">Vendu</option>
        </select>
        <button onClick={createItem} className="bg-blue-500 text-white p-2">Ajouter</button>
      </div>

      <ul>
        {items.map(item => (
          <li key={item.id} className="border p-4 mb-2 rounded flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-gray-600">Trouvé le {item.found_date}</p>
              <p className="text-gray-600">Lieu: {item.found_location}</p>
              <p className="text-gray-600">Statut: {item.status}</p>
            </div>
            <div>
              <button onClick={() => deleteItem(item.id)} className="bg-red-500 text-white p-2">Supprimer</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemCRUD;
