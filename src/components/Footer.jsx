import { Link } from 'react-router';
import { FaHome, FaMapMarkedAlt, FaQuestionCircle, FaEnvelope, FaFileContract, FaShieldAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-[1100px] mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center">
              <span className="text-xl font-bold">Logo</span>
            </div>
          </div>

          {/* Liens principaux */}
          <div className="flex flex-col items-center md:items-start">
            <ul className="space-y-2">
              <li>
                <Link to="/" className="flex items-center hover:text-gray-600 transition-colors">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/lost-item-form" className="flex items-center hover:text-gray-600 transition-colors">
                  <span>Objet perdu</span>
                </Link>
              </li>
              <li>
                <Link to="/sortable-items" className="flex items-center hover:text-gray-600 transition-colors">
                  <span>Objet trouvé</span>
                </Link>
              </li>
              <li>
                <Link to="/map" className="flex items-center hover:text-gray-600 transition-colors">
                  <span>Carte interactive</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens secondaires */}
          <div className="flex flex-col items-center md:items-start">
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="flex items-center hover:text-gray-600 transition-colors">
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="flex items-center hover:text-gray-600 transition-colors">
                  <span>Politique de confidentialité</span>
                </Link>
              </li>
              <li>
                <Link to="/terms" className="flex items-center hover:text-gray-600 transition-colors">
                  <span>Conditions générales</span>
                </Link>
              </li>
              <li>
                <Link to="/terms" className="flex items-center hover:text-gray-600 transition-colors">
                  <span>Termes et conditions</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-300 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Objets Trouvés. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
