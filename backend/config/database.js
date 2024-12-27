const { Sequelize } = require('sequelize');

// Initialise Sequelize avec les paramètres appropriés
const sequelize = new Sequelize({
  database: process.env.DB_NAME, // Nom de la base de données
  username: process.env.DB_USER, // Nom d'utilisateur de la base de données
  password: process.env.DB_PASSWORD, // Mot de passe de la base de données
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres',
  logging: false, // Désactive les logs SQL
});

// Teste la connexion à la base de données
sequelize.authenticate()
  .then(() => console.log('Connexion à la base de données réussie'))
  .catch(err => console.error('Impossible de se connecter à la base de données:', err));

module.exports = sequelize;
