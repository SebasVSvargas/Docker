const quotes = [
  "Una cita especial para compose"
];

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = { randomQuote };