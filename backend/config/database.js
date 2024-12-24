const { Sequelize } = require('sequelize');

// Connexion à la base de données (modifie les détails de la base de données)
const sequelize = new Sequelize('nom_de_la_base', 'utilisateur', 'mot_de_passe', {
  host: 'localhost',
  dialect: 'postgres', // ou 'mysql' selon ton SGBD
});

module.exports = sequelize;
