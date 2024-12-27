import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Erreur lors de la connexion', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

// Assure-toi que `AuthProvider` est exporté par défaut
export default AuthProvider;
