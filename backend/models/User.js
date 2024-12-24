const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Assure-toi d'avoir la config de la DB ici

const User = sequelize.define('User', {
  // Définition des champs de l'utilisateur
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
