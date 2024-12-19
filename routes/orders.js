const express = require('express');
const router = express.Router();
const { Client } = require('pg');
const client = new Client({
  user: 'ton_user',
  host: 'localhost',
  database: 'ton_db',
  password: 'ton_mot_de_passe',
  port: 5432,
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
