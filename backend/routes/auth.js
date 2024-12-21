const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Users } = require('../models'); // Assure-toi que cette table existe
const router = express.Router();

// Clé secrète pour JWT (garde-la sécurisée dans une variable d'environnement)
const JWT_SECRET = process.env.JWT_SECRET || 'secret_key';

// Route pour inscription (uniquement pour admin)
router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;

  try {
    // Vérifier si l'utilisateur existe déjà
    const userExists = await Users.findOne({ where: { username } });
    if (userExists) {
      return res.status(400).json({ message: 'Cet utilisateur existe déjà.' });
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur (par exemple : admin ou client)
    const user = await Users.create({ username, password: hashedPassword, role });

    res.status(201).json({ message: 'Utilisateur créé avec succès.', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de l’inscription.' });
  }
});

// Route pour login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe
    const user = await Users.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur introuvable.' });
    }

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Mot de passe incorrect.' });
    }

    // Générer un token JWT
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '2h' });

    res.status(200).json({ message: 'Connexion réussie.', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la connexion.' });
  }
});

// Route pour déconnexion (front-end peut supprimer le token)
router.post('/logout', (req, res) => {
  // Pas besoin de logique côté backend, simplement invalider le token côté client
  res.status(200).json({ message: 'Déconnexion réussie.' });
});

module.exports = router;
