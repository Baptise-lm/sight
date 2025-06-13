import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-[#FBF7F2] py-4 h-32 flex items-center px-40 font-nunito">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="transition-colors max-w-28 h-auto cursor-pointer hover:text-[#E5A92E]">
          <img src="https://i.ibb.co/6ffD4p8/logo.png" alt="logo" border="0" />
        </Link>

        <Link
          to="/lost-item-form"
          className="text-[#4A4A4A] transition-colors font-bold text-lg cursor-pointer hover:text-[#E5A92E]"
        >
          Objet perdu
        </Link>

        <Link
          to="/sortable-items"
          className="text-[#4A4A4A] transition-colors font-bold text-lg cursor-pointer hover:text-[#E5A92E]"
        >
          Objet trouvé
        </Link>

        <Link
          to="/map"
          className="text-[#4A4A4A] transition-colors font-bold text-lg cursor-pointer hover:text-[#E5A92E]"
        >
          Carte interactive
        </Link>

        <Link
          to="/contact"
          className="text-[#4A4A4A] transition-colors font-bold text-lg cursor-pointer hover:text-[#E5A92E]"
        >
          Contact
        </Link>

        {/* Icône de profil à droite */}
        <div className="flex px-[30px] py-[15px] justify-center items-center gap-[10px] rounded-full text-[18px] font-bold bg-[#FFBC33] transition-colors text-[#4A4A4A] font-nunito cursor-pointer hover:bg-[#E5A92E]">
          Compte
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
