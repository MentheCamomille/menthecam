// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password,
      });

      console.log('Connexion réussie', response.data);
      // Sauvegarder le token (exemple dans localStorage)
      localStorage.setItem('token', response.data.token);
      // Rediriger vers une page protégée ou autre
    } catch (err) {
      setError(err.response?.data?.message || 'Une erreur est survenue');
      console.error('Erreur lors de la connexion:', err);
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Se connecter</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
