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

// Récupérer les favoris d'un utilisateur
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const query = 'SELECT * FROM Favorites WHERE user_id = $1';
  
  client.query(query, [userId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de la récupération des favoris');
    }
    res.json(result.rows);
  });
});

// Ajouter un produit aux favoris
router.post('/', (req, res) => {
  const { user_id, product_id } = req.body;
  const query = `
    INSERT INTO Favorites (user_id, product_id)
    VALUES ($1, $2) RETURNING *;
  `;
  const values = [user_id, product_id];
  
  client.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de l\'ajout aux favoris');
    }
    res.status(201).json(result.rows[0]);
  });
});

module.exports = router;
