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
router.post('/getByID', (req, res) => {
    const { id } = req.body;
    if (!id) return res.status(400).send({ message: 'ID requerido' });

    req.session.editId = id;
    res.send({ message: 'ID guardado en sesión' });
});


module.exports=router;