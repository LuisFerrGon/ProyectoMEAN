const express = require('express');
const app = express();

const departamentos = require('./rutas/departamento')(express.Router);

const mongoose = require('mongoose');
const config = require('./config/config');

app.use('/departamento', departamentos);
mongoose.Promise = global.Promise;
mongoose.connect(config.uri);
app.get('/', (req, res) =>{
    res.send("<h1>Hello world</h1>");
});
app.listen(8080, () =>{
    console.log("Servidor funcionando e el puerto 8080");
});