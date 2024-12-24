// src/components/Logout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Supprimer le token
    navigate('/login'); // Rediriger vers la page de connexion
  };

  return (
    <button onClick={handleLogout}>Se déconnecter</button>
  );
};

export default Logout;
