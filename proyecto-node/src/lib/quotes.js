const quotes = [
  "No hay bugs, solo características no documentadas.",
  "El programador es un ser que convierte café en código.",
  "Cualquier tecnología suficientemente avanzada es indistinguible de la magia",
  "Un buen programador es alguien que siempre busca la forma de trabajar menos.",
  "Nueva Cita Añadida",
  "Nueva - El código es como el humor. Cuando tienes que explicarlo, es malo.",
];

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = { randomQuote };