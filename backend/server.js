require('dotenv').config();
const express = require('express');
const pool = require('./server');
const productsRoutes = require('./routes/products');
const ordersRoutes = require('./routes/orders');
const usersRoutes = require('./routes/users');
const blogPostsRoutes = require('./routes/blogPosts');
const favoritesRoutes = require('./routes/favorites');
const notificationsRoutes = require('./routes/notifications');

const app = express();

// Middleware pour traiter les requêtes JSON
app.use(express.json());

// Routes
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);
app.use('/api/users', usersRoutes); // Routes d'authentification
app.use('/blog', blogPostsRoutes);
app.use('/favorites', favoritesRoutes);
app.use('/notifications', notificationsRoutes);

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Serveur Express lancé sur le port 3000');
});
