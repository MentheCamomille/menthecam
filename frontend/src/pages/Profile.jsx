// src/pages/Profile.jsx
import React, { useState, useEffect } from 'react';


const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Faire une requête API pour obtenir les données utilisateur en utilisant le token
      fetch('/api/users/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Erreur:', error));
    }
  }, []);

  if (!userData) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>Bienvenue, {userData.name}</h1>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default Profile;
