// server/middleware/auth.js
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController'); // Importation du contrôleur de connexion


// Route de connexion
router.post('/login', login);

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Accès refusé, token manquant' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // L'utilisateur sera accessible via `req.user`
    next();
  } catch (err) {
    res.status(400).json({ message: 'Token invalide' });
  }
};

module.exports = authMiddleware;
module.exports = router;
