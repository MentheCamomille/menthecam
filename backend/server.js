require('dotenv').config(); // Pour charger les variables d'environnement
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('./db'); // Importe le fichier db.js qui contient la connexion à PostgreSQL
const usersRoutes = require('./routes/users'); // Importation des routes pour les utilisateurs
const authRoutes = require('./routes/auth'); // Importation des routes pour l'authentification
const sequelize = require('./config/database');


const app = express(); // Déclaration de l'objet app avec express()


const cors = require('cors');

// Middleware CORS
app.use(cors());

// Middleware pour traiter les requêtes JSON
app.use(express.json());

// Routes
app.use('/api/users', usersRoutes); // Utilisation de la route des utilisateurs
app.use('/api/auth', authRoutes); // Utilisation de la route pour l'authentification

sequelize.sync()
  .then(() => console.log('Base de données synchronisée avec succès.'))
  .catch((err) => console.error('Erreur lors de la synchronisation de la base de données :', err));

// Log pour confirmer que le serveur démarre
app.listen(3000, () => {
  console.log('Serveur Express lancé sur le port 3000');
});
