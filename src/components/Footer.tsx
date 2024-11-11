import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img src="/logo.png" alt="lm3lm" className="h-8 w-auto mb-4" />
            <p className="text-gray-400 max-w-md">
              lm3lm est votre plateforme de confiance pour trouver des professionnels qualifiés pour tous vos besoins de services à domicile.
            </p>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Phone size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Plomberie</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Électricité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Chauffage</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Rénovation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">À propos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Conditions Générales</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} lm3lm. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;