const { Pool } = require('pg');

// Configuration de la base de données
const pool = new Pool({
  user: process.env.DB_USER || 'root',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'menthecamomille',
  password: process.env.DB_PASSWORD || 'root',
  port: process.env.DB_PORT || 5432,
});

// Tester la connexion à la base de données
pool.connect()
  .then(() => console.log('Connexion à PostgreSQL réussie !'))
  .catch(err => console.error('Erreur de connexion à PostgreSQL :', err));

module.exports = pool;
