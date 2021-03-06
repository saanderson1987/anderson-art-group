// module to connect to PostgreSQL DB.
const pgp = require('pg-promise')();
const connectionStr = process.env.DATABASE_URL || 'postgres://localhost:5432/anderson_art_group';
const db = pgp(connectionStr);

module.exports = db;
