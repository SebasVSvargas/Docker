const express = require('express');
const { randomQuote } = require('../lib/quotes');

const router = express.Router();

router.get('/random', (_req, res) => {
  res.json({ quote: randomQuote() });
});

module.exports = router;
