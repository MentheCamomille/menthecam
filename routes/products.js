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

router.get('/', (req, res) => {
  client.query('SELECT * FROM Products', (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de la récupération des produits');
    }
    res.json(result.rows);
  });
});

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

module.exports = router;
