// src/components/PrivateRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Ce composant protège l'accès à une route en vérifiant si un token existe
const PrivateRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('token'); // Récupère le token depuis localStorage

  // Si le token existe, rend l'élément. Sinon, redirige vers la page de login
  return (
    <Route
      {...rest}
      element={token ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
