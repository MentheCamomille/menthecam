import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token); // Sauvegarder le token dans le localStorage
      navigate('/'); // Redirection vers la page d'accueil après la connexion
    } catch (err) {
      setError('Identifiants incorrects');
    }
  };

  return (
    <div className="container">
      <h2 className="text-3xl font-bold text-center text-green-700">Se connecter</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
        {error && <p className="text-red-600">{error}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-lg">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full py-2 bg-green-600 text-white rounded">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
