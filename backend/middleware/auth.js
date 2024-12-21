const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'secret_key';

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Aucun token fourni.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Contient l’ID et le rôle de l’utilisateur
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token invalide.' });
  }
};

module.exports = verifyToken;
