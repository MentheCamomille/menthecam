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
    if (result.rows.length === 0) {
      return res.status(404).send('Utilisateur non trouvé');
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

// Mettre à jour un utilisateur
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  const query = `
    UPDATE Users 
    SET username = $1, email = $2, password = $3
    WHERE id = $4 RETURNING *;
  `;
  const values = [username, email, password, id];
  
  client.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de la mise à jour de l\'utilisateur');
    }
    if (result.rows.length === 0) {
      return res.status(404).send('Utilisateur non trouvé');
    }
    res.json(result.rows[0]);
  });
});

// Supprimer un utilisateur
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  client.query('DELETE FROM Users WHERE id = $1 RETURNING *;', [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de la suppression de l\'utilisateur');
    }
    if (result.rows.length === 0) {
      return res.status(404).send('Utilisateur non trouvé');
    }
    res.json({ message: 'Utilisateur supprimé avec succès' });
  });
});

module.exports = router;
