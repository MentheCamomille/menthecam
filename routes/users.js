const express = require('express');
const router = express.Router();
const { Client } = require('pg');
const client = new Client({
  user: 'root', 
  host: 'localhost', 
  database: 'menthecamomille', 
  password: 'root', 
  port: 5432, 
});

client.connect();

// Récupérer tous les utilisateurs
router.get('/', (req, res) => {
  const query = 'SELECT * FROM Users';
  
  client.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de la récupération des utilisateurs');
    }
    res.json(result.rows);
  });
});


// Ajouter un utilisateur
router.post('/', async (req, res) => {
  const { username, email } = req.body; // Assurez-vous que le corps de la requête contient ces champs
  try {
    const result = await client.query(
      'INSERT INTO Users (username, email) VALUES ($1, $2) RETURNING *',
      [username, email]
    );
    res.status(201).json(result.rows[0]); // Retourne l'utilisateur créé
  } catch (err) {
    console.error('Erreur lors de la création de l’utilisateur:', err);
    res.status(500).send('Erreur serveur');
  }
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
