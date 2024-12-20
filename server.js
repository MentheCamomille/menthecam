require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

// Test de connexion
pool.connect()
  .then(() => console.log('Connexion à PostgreSQL réussie !'))
  .catch(err => console.error('Erreur de connexion à PostgreSQL :', err));

  const express = require('express');
const app = express();
const productsRoutes = require('./routes/products');
const ordersRoutes = require('./routes/orders');
const usersRoutes = require('./routes/users');
const blogPostsRoutes = require('./routes/blogPosts');
const favoritesRoutes = require('./routes/favorites');
const notificationsRoutes = require('./routes/notifications');

// Middleware pour traiter les requêtes JSON
app.use(express.json());

// Routes
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);
app.use('/users', usersRoutes);
app.use('/blog', blogPostsRoutes);
app.use('/favorites', favoritesRoutes);
app.use('/notifications', notificationsRoutes);

// Démarrer le serveur
app.listen(3001, () => {
  console.log('Serveur Express lancé sur le port 3000');
});
