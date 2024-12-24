const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token manquant' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Ajoute l'utilisateur à la requête
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token invalide' });
  }
};

module.exports = protect;
