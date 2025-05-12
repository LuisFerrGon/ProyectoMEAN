const cors=require('cors');
const express = require('express');
const sesion = require('express-session');
const departamentos = require('./routes/Departamentos');
const mongoose = require('mongoose');
const config = require('./config/config');
const Departamento = require('./models/Departamento');

const app = express();

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
app.use(sesion({
    secret: config.secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    }
}));

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, config.options)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('Error en la conexion', err);
    })
;

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
});
app.get('/getByID', async(req, res)=>{
    const idDepartamento=req.session.idDepartamento;
    if (!idDepartamento) return res.status(400).send({message: 'ID no proporcionado get'});
    try{
        const departamento=await Departamento.findById(idDepartamento);
        if (!departamento) return res.status(400).send({message: 'Departamento no encontrado'});
        res.json(departamento);
        console.log(idDepartamento);
        console.log(departamento);
    }catch(error){
        res.status(500).send({message: 'Error al obtener datos'});
    }
});

app.post('/getByID', (req, res)=>{
    const { idDepartamento } = req.body;
    if (!idDepartamento) return res.status(400).send({message: 'ID no proporcionado post'});
    req.session.idDepartamento=idDepartamento;
    res.send({message: 'ID guardado'});
});

app.listen(puerto, () =>{
    console.log('Servidor funcionando en el puerto '+puerto);
});