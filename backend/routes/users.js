const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db'); // Importe la connexion à la base de données
const router = express.Router();

// Route pour l'inscription
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
  
    // Vérifier que tous les champs sont fournis
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Tous les champs (username, email, password) sont requis' });
    }
  
    try {
      // Vérification si l'email existe déjà
      const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      if (userExists.rows.length > 0) {
        return res.status(400).json({ message: 'Cet email est déjà utilisé' });
      }
  
      // Hachage du mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // Insertion de l'utilisateur dans la base de données
      const newUser = await pool.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
        [username, email, hashedPassword]
      );
  
      // Création du token JWT
      const token = jwt.sign({ id: newUser.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.status(201).json({ message: 'Utilisateur créé avec succès', token });
    } catch (err) {
      console.error('Erreur dans /signup:', err);
      res.status(500).json({ message: 'Erreur interne du serveur', error: err.message });
    }
  });
  

// Route pour la connexion
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Recherche de l'utilisateur par email
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (user.rows.length === 0) {
      return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
    }

    // Vérification du mot de passe
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
    }

    // Création du token JWT
    const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Réponse avec le token
    res.status(200).json({ message: 'Connexion réussie', token });
  } catch (err) {
    console.error('Erreur dans /login:', err);
    res.status(500).json({ message: 'Erreur interne du serveur', error: err.message });
  }
});

module.exports = router;
