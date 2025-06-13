import { Link } from 'react-router';
import { FaHome, FaMapMarkedAlt, FaQuestionCircle, FaEnvelope, FaFileContract, FaShieldAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#FFBC33] py-24 px-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-[1100px] mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <div className="max-w-36 h-auto flex items-center justify-center">
              <img src="https://i.ibb.co/6ffD4p8/logo.png" alt="logo" border="0"/>
            </div>
          </div>

          {/* Liens principaux */}
          <ul className="flex flex-col items-center md:items-start space-y-2 gap-5">
            <li>
              <Link to="/" className="flex items-center text-[#4A4A4A] font-bold transition-colors">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/lost-item-form" className="flex items-center text-[#4A4A4A] font-bold transition-colors">
                <span>Objet perdu</span>
              </Link>
            </li>
            <li>
              <Link to="/sortable-items" className="flex items-center text-[#4A4A4A] font-bold transition-colors">
                <span>Objet trouvé</span>
              </Link>
            </li>
            <li>
              <Link to="/map" className="flex items-center text-[#4A4A4A] font-bold transition-colors">
                <span>Carte interactive</span>
              </Link>
            </li>
          </ul>

          {/* Liens secondaires */}
          <ul className="flex flex-col items-center md:items-start space-y-2 gap-5">
            <li>
              <Link to="/contact" className="flex items-center text-[#4A4A4A] font-bold transition-colors">
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="flex items-center text-[#4A4A4A] font-bold transition-colors">
                <span>Politique de confidentialité</span>
              </Link>
            </li>
            <li>
              <Link to="/rgpd" className="flex items-center text-[#4A4A4A] font-bold transition-colors">
                <span>Conditions générales</span>
              </Link>
            </li>
            <li>
              <Link to="/terms" className="flex items-center text-[#4A4A4A] font-bold transition-colors">
                <span>Termes et conditions</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
