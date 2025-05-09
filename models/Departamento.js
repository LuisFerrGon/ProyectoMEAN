const mongoose = require('mongoose');

const esquemaDepartamento = new mongoose.Schema({
    codDepartamento: String,
    descDepartamento: String,
    volDepartamento: Number
});

const Departamento=mongoose.model('Departamentos', esquemaDepartamento);
module.exports=Departamento;