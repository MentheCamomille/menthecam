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

// Récupérer toutes les notifications d'un utilisateur
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const query = 'SELECT * FROM Notifications WHERE user_id = $1';
  
  client.query(query, [userId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de la récupération des notifications');
    }
    res.json(result.rows);
  });
});

// Ajouter une notification
router.post('/', (req, res) => {
  const { user_id, type, content } = req.body;
  const query = `
    INSERT INTO Notifications (user_id, type, content)
    VALUES ($1, $2, $3) RETURNING *;
  `;
  const values = [user_id, type, content];
  
  client.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de l\'ajout de la notification');
    }
    res.status(201).json(result.rows[0]);
  });
});

module.exports = router;
