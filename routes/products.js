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

// Récupérer tous les produits
router.get('/', (req, res) => {
  client.query('SELECT * FROM Products', (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de la récupération des produits');
    }
    res.json(result.rows);
  });
});

// Récupérer un produit par son ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  client.query('SELECT * FROM Products WHERE id = $1', [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de la récupération du produit');
    }
    if (result.rows.length === 0) {
      return res.status(404).send('Produit non trouvé');
    }
    res.json(result.rows[0]);
  });
});

// Ajouter un nouveau produit
router.post('/', (req, res) => {
  const { name, description, price, stock, category, image_url } = req.body;
  const query = `
    INSERT INTO Products (name, description, price, stock, category, image_url)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
  `;
  const values = [name, description, price, stock, category, image_url];
  
  client.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de l\'ajout du produit');
    }
    res.status(201).json(result.rows[0]);
  });
});

// Mettre à jour un produit
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock, category, image_url } = req.body;
  const query = `
    UPDATE Products 
    SET name = $1, description = $2, price = $3, stock = $4, category = $5, image_url = $6
    WHERE id = $7 RETURNING *;
  `;
  const values = [name, description, price, stock, category, image_url, id];
  
  client.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de la mise à jour du produit');
    }
    if (result.rows.length === 0) {
      return res.status(404).send('Produit non trouvé');
    }
    res.json(result.rows[0]);
  });
});

// Supprimer un produit
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  client.query('DELETE FROM Products WHERE id = $1 RETURNING *;', [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de la suppression du produit');
    }
    if (result.rows.length === 0) {
      return res.status(404).send('Produit non trouvé');
    }
    res.json({ message: 'Produit supprimé avec succès' });
  });
});

module.exports = router;
