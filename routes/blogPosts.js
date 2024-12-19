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

// Récupérer tous les articles de blog
router.get('/', (req, res) => {
  client.query('SELECT * FROM Blog_Posts', (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de la récupération des articles');
    }
    res.json(result.rows);
  });
});

// Ajouter un nouvel article
router.post('/', (req, res) => {
  const { title, content, author } = req.body;
  const query = `
    INSERT INTO Blog_Posts (title, content, author)
    VALUES ($1, $2, $3) RETURNING *;
  `;
  const values = [title, content, author];
  
  client.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de l\'ajout de l\'article');
    }
    res.status(201).json(result.rows[0]);
  });
});

module.exports = router;
