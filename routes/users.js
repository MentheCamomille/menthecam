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

// Récupérer un utilisateur par son ID
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const query = 'SELECT * FROM Users WHERE id = $1';
  
  client.query(query, [userId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de la récupération de l\'utilisateur');
    }
    res.json(result.rows[0]);
  });
});

// Créer un nouvel utilisateur
router.post('/', (req, res) => {
  const { username, email, password } = req.body;
  const query = `
    INSERT INTO Users (username, email, password)
    VALUES ($1, $2, $3) RETURNING *;
  `;
  const values = [username, email, password];
  
  client.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de la création de l\'utilisateur');
    }
    res.status(201).json(result.rows[0]);
  });
});

module.exports = router;
