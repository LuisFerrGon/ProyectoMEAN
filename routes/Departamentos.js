const express = require('express');
const router=express.Router();
const Departamento = require('../models/Departamento');

router.get('/departamentos', async (req, res)=>{
    try{
        const departamentos=await Departamento.find();
        res.json(departamentos);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
});
router.post('/registrar', async (req, res)=>{
    try{
        const departamentoNuevo=new Departamento(req.body);
        await departamentoNuevo.save();
        res.status(201).send('Departamento registrado');
    }catch(err){
        res.status(500).send('Error al registrar departamento');
    }
});

module.exports=router;