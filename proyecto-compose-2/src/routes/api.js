const express = require('express');
const { pool } = require('../lib/db');

const router = express.Router();

router.get('/random', async (_req, res) => {
  const [rows] = await pool.query('SELECT id, text FROM quotes ORDER BY RAND() LIMIT 1');
  if (rows.length === 0) return res.json({ quote: 'Aún no hay citas en la base de datos.' });
  res.json({ quote: rows[0].text });
});

router.get('/quotes', async (_req, res) => {
  const [rows] = await pool.query('SELECT id, text, created_at FROM quotes ORDER BY id DESC');
  res.json(rows);
});

router.post('/quotes', async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'El texto es requerido' });
  const [result] = await pool.query('INSERT INTO quotes (text) VALUES (?)', [text]);
  const [rows] = await pool.query('SELECT id, text, created_at FROM quotes WHERE id = ?', [result.insertId]);
  res.status(201).json(rows[0]);
});

module.exports = router;