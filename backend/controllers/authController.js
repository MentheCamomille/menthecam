const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../server'); // Connexion à PostgreSQL

// Générer le JWT
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Inscription de l'utilisateur
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe déjà
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length > 0) {
      return res.status(400).json({ message: 'Utilisateur déjà enregistré' });
    }

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insérer l'utilisateur dans la base de données
    await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
      [username, email, hashedPassword]
    );

    // Récupérer l'utilisateur créé pour générer le token
    const newUser = await pool.query('SELECT id FROM users WHERE email = $1', [email]);

    // Générer un token JWT pour l'utilisateur
    const token = generateToken(newUser.rows[0].id);

    res.status(201).json({ message: 'Utilisateur créé avec succès', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur interne serveur', error });
  }
};

// Connexion de l'utilisateur
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      return res.status(400).json({ message: 'Utilisateur non trouvé' });
    }

    const user = result.rows[0];

    // Comparer le mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Mot de passe incorrect' });
    }

    // Générer un token JWT
    const token = generateToken(user.id);

    res.json({ message: 'Connexion réussie', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur interne serveur', error });
  }
};

module.exports = { registerUser, loginUser };
