//server.js
// Contenido nuevo
const cors = require('cors');
// Fin contenido nuevo
const express = require('express');
const app = express();
const rutasUsuario = require('./routes/rutasUsuario');
const puerto = 8080;
const mongoose = require('mongoose');
const config = require('./config/config');

// Contenido nuevo
app.use(cors({
	origin: 'http://localhost:4200',
	credentials: true
}))
// Fin contenido nuevo
app.use(express.urlencoded());
app.use(express.json());
app.use(rutasUsuario);
mongoose.Promise = global.Promise;
mongoose.connect(config.url);
app.listen(puerto, async() => {
	console.log('Servidor funciona en el puerto ' + puerto);
});