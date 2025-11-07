const quotes = [
  "Una cita inspiradora 1.",
  "Una cita inspiradora 2.",
  "Una cita inspiradora 3.",
];

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = { randomQuote };