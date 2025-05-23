// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-300 py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo à gauche */}
        <div className="text-xl font-bold text-gray-900">
          <Link to="/" className="hover:text-gray-700 transition-colors">
            Logo
          </Link>
        </div>

        {/* Liens de navigation au centre */}

        <Link
        to="/lost-item-form"
        className="text-gray-900 hover:text-gray-700 hover:font-medium transition-colors"
        >
        Objet perdu
        </Link>
        <Link
        to="/sortable-items"
        className="text-gray-900 hover:text-gray-700 hover:font-medium transition-colors"
        >
        Objet trouvé
        </Link>
        <Link
        to="/map"
        className="text-gray-900 hover:text-gray-700 hover:font-medium transition-colors"
        >
        Carte interactive
        </Link>
        <Link
        to="/contact"
        className="text-gray-900 hover:text-gray-700 hover:font-medium transition-colors"
        >
        Contact
        </Link>


        {/* Icône de profil à droite */}
        <div className="text-gray-900">
          <FaUserCircle className="h-6 w-6 hover:text-gray-700 transition-colors" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
