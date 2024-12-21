import React from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="bg-mint text-dark py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Menthecamomille</h1>
        <nav className="space-x-4">
          {user ? (
            <>
              <span>Bienvenue, {user.username}</span>
              <button onClick={logout} className="hover:underline">
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <a href="/login" className="hover:underline">
                Connexion
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
