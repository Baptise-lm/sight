// src/data/MapData.js
export const pinsData = [
  // Paris
  {
    id: 1,
    name: "Louvre",
    description: "Musée du Louvre",
    category: "Musée",
    found_location: "Paris",
    found_location_lat: 48.8606,
    found_location_lng: 2.3376,
    zoom: 15
  },
  {
    id: 2,
    name: "Tour Eiffel",
    description: "Tour Eiffel",
    category: "Monument",
    found_location: "Paris",
    found_location_lat: 48.8584,
    found_location_lng: 2.2945,
    zoom: 15
  },
  {
    id: 3,
    name: "Arc de Triomphe",
    description: "Arc de Triomphe",
    category: "Monument",
    found_location: "Paris",
    found_location_lat: 48.8738,
    found_location_lng: 2.2950,
    zoom: 15
  },
  {
    id: 4,
    name: "Musée d'Orsay",
    description: "Musée d'Orsay",
    category: "Musée",
    found_location: "Paris",
    found_location_lat: 48.8599,
    found_location_lng: 2.3266,
    zoom: 15
  },
  // Nantes
  {
    id: 5,
    name: "Château des Ducs",
    description: "Château des Ducs de Bretagne",
    category: "Monument",
    found_location: "Nantes",
    found_location_lat: 47.2184,
    found_location_lng: -1.5536,
    zoom: 15
  },
  {
    id: 6,
    name: "Musée d'Arts",
    description: "Musée d'Arts de Nantes",
    category: "Musée",
    found_location: "Nantes",
    found_location_lat: 47.2167,
    found_location_lng: -1.5550,
    zoom: 15
  },
  {
    id: 7,
    name: "Jardin des Plantes",
    description: "Jardin des Plantes de Nantes",
    category: "Parc",
    found_location: "Nantes",
    found_location_lat: 47.2161,
    found_location_lng: -1.5603,
    zoom: 15
  },
  {
    id: 8,
    name: "Cathédrale Saint-Pierre",
    description: "Cathédrale Saint-Pierre-et-Saint-Paul",
    category: "Monument",
    found_location: "Nantes",
    found_location_lat: 47.2175,
    found_location_lng: -1.5533,
    zoom: 15
  }
];

export const citiesData = [
  { name: "Paris", lat: 48.8566, lng: 2.3522, zoom: 12 },
  { name: "Nantes", lat: 47.2184, lng: -1.5536, zoom: 12 }
];

export const categoriesData = ["Musée", "Monument", "Parc"];
