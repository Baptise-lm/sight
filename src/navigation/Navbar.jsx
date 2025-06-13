// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-[#FBF7F2] py-4 h-32 flex items-center px-40 font-nunito">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="transition-colors max-w-28 h-auto">
          <img src="https://i.ibb.co/6ffD4p8/logo.png" alt="logo" border="0"/>
        </Link>

        <Link
          to="/lost-item-form"
          className="text-[#4A4A4A] transition-colors font-bold text-lg"
        >
          Objet perdu
        </Link>

        <Link
          to="/sortable-items"
          className="text-[#4A4A4A] transition-colors font-bold text-lg"
        >
          Objet trouvé
        </Link>

        <Link
          to="/map"
          className="text-[#4A4A4A] transition-colors font-bold text-lg"
        >
          Carte interactive
        </Link>

        <Link
          to="/contact"
          className="text-[#4A4A4A] transition-colors font-bold text-lg"
        >
          Contact
        </Link>

        {/* Icône de profil à droite */}
        <div className="flex px-[45px] py-[25px] justify-center items-center gap-[10px] rounded-full text-[18px] font-bold bg-[#FFBC33] transition-colors text-[#4A4A4A] font-nunito">
          Compte
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
