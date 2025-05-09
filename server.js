const express = require('express');
const cors=require('cors');
const app = express();

const departamentos = require('./routes/Departamentos');

const mongoose = require('mongoose');
const config = require('./config/config');
const Departamento = require('./models/Departamento');

const puerto = 8080;

app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));
app.use(express.json());
app.use('/departamento', departamentos);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, config.options)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('Error en la conexion', err);
    });

app.get('/', (req, res) =>{
    res.send("<h1>Hello world</h1>");
});

app.get('/departamentos', async(req, res)=>{
    try{
        const departamentos=await Departamento.find();
        res.json(departamentos);
    }catch{
        res.status(500).json({ error: 'Error al obtener departamentos' });
    }
    // res.json(config.uri)
});

app.listen(puerto, () =>{
    console.log('Servidor funcionando en el puerto '+puerto);
});