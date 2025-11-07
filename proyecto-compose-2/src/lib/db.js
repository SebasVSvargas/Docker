const mysql = require('mysql2/promise');
const mysqlCore = require('mysql2');

const {
  DB_HOST = 'database', //hace referencia a la direccion ip o DNS donde se encuentra el contenedor de la base de datos
  DB_PORT = '3306',
  DB_USER = 'root',
  DB_PASSWORD = 'example',
  DB_NAME = 'quotes_db',
  DB_ADMIN_USER,
  DB_ADMIN_PASSWORD,
} = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: Number(DB_PORT),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

async function ensureDatabase() {
    console.log("ensureDatabase()");
  const user = DB_ADMIN_USER || DB_USER;
  const pass = DB_ADMIN_PASSWORD || DB_PASSWORD;

  const conn = await mysql.createConnection({
    host: DB_HOST,
    port: Number(DB_PORT),
    user,
    password: pass,
  });

  const dbId = mysqlCore.escapeId(DB_NAME);

  await conn.query(
    `CREATE DATABASE IF NOT EXISTS ${dbId} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
  );

  await conn.end();
}

async function ensureSchema() {
  console.log("ensureSchema()");
  await ensureDatabase();

  // Now ensure the table exists (using the pool that points at DB_NAME)
  const sql = `
    CREATE TABLE IF NOT EXISTS quotes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      text VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;`;
  await pool.query(sql);
}

module.exports = { pool, ensureSchema };
