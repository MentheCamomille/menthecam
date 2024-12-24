// src/pages/SignUp.jsx
import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/signup', {
        username,
        email,
        password,
      });

      console.log('Utilisateur créé', response.data);
      // Tu peux aussi rediriger vers la page de connexion ou autre
    } catch (err) {
      setError(err.response?.data?.message || 'Une erreur est survenue');
      console.error('Erreur lors de l\'inscription:', err);
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">S'inscrire</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignUp;
