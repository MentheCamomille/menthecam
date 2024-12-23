// src/components/header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
      <div className="text-2xl font-bold text-green-600">Menthecamomille</div>
      <nav className="flex space-x-6">
        <a href="/" className="hover:text-green-600">Accueil</a>
        <a href="/about" className="hover:text-green-600">A propos</a>
        <a href="/blog" className="hover:text-green-600">Blog</a>
        <a href="/products" className="hover:text-green-600">Produits</a>
      </nav>
      <div className="flex space-x-4">
        <button className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">Connexion</button>
        <button className="px-4 py-2 text-green-600 border border-green-600 rounded hover:bg-green-100">Inscription</button>
      </div>
    </header>
  );
};

export default Header;
