import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
      <div className="text-2xl font-bold text-green-600">Menthecamomille</div>
      <nav className="flex space-x-6">
        <Link to="/" className="hover:text-green-600">Accueil</Link>
        <Link to="/about" className="hover:text-green-600">A propos</Link>
        <Link to="/blog" className="hover:text-green-600">Blog</Link>
        <Link to="/products" className="hover:text-green-600">Produits</Link>
      </nav>
      <div className="flex space-x-4">
        <Link to="/login">
          <button className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">
            Connexion
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-4 py-2 text-green-600 border border-green-600 rounded hover:bg-green-100">
            Inscription
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
