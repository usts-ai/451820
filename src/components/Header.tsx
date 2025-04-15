import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">Urgent<span className="text-red-600">Pro</span></span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Accueil</Link>
          <Link to="/search" className="text-gray-700 hover:text-blue-600 font-medium">Rechercher</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">À propos</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">Connexion</Link>
          <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-medium">Inscription</Link>
        </div>

        {/* Hamburger menu pour mobile */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            <Link to="/search" className="text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Rechercher</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>À propos</Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
              <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Connexion</Link>
              <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-medium text-center" onClick={() => setIsMenuOpen(false)}>Inscription</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
