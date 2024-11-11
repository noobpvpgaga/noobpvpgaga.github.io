import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src="/src/assets/logo.png" alt="lm3lm" className="h-8 w-auto" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-blue-900">À propos</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-900">Services</Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-900">FAQ</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-900">Contact</Link>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800">
              Connexion
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-900">À propos</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Services</Link>
            <Link to="/faq" className="block px-3 py-2 text-gray-700 hover:text-blue-900">FAQ</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Contact</Link>
            <button className="w-full text-left px-3 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">
              Connexion
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;