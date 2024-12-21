const express = require('express');
const router = express.Router();
const { Client } = require('pg');
const client = new Client({
  user: 'root', // Remplacez par le nom d'utilisateur PostgreSQL
  host: 'localhost', // Hôte par défaut
  database: 'menthecamomille', // Nom de la base de données
  password: 'root', // Mot de passe correct
  port: 5432, // Port par défaut
});

client.connect();

// Récupérer toutes les commandes d'un utilisateur
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const query = 'SELECT * FROM Orders WHERE user_id = $1';
  
  client.query(query, [userId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de la récupération des commandes');
    }
    res.json(result.rows);
  });
});

// Créer une nouvelle commande
router.post('/', (req, res) => {
  const { user_id, total_price } = req.body;
  const query = `
    INSERT INTO Orders (user_id, total_price, status)
    VALUES ($1, $2, 'pending') RETURNING *;
  `;
  const values = [user_id, total_price];
  
  client.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de la création de la commande');
    }
    res.status(201).json(result.rows[0]);
  });
});

// Récupérer les articles d'une commande
router.get('/:orderId/items', (req, res) => {
  const { orderId } = req.params;
  const query = 'SELECT * FROM Order_Items WHERE order_id = $1';
  
  client.query(query, [orderId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de la récupération des articles de commande');
    }
    res.json(result.rows);
  });
});

module.exports = router;
