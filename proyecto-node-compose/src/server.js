const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;//indica que el servidor escucha en el puerto 3000 - el contenedor expone este puerto
const GREETING = process.env.GREETING || '¡Hola desde node en Docker!';

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', apiRoutes);

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
  console.log(`SALUDO: ${GREETING}`);
});
