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
router.put('/editar/:codigo', async(req, res)=>{
    const codigo = req.params.id;
    const datos = req.body;
    console.log("\n"+codigo+"\n"+datos);
    try {
        const actualizado = await Departamento.findByIdAndUpdate(
            { codigo: codigo },
            datos,
            { new: true }
        );
        if (!actualizado) {
            return res.status(404).send('No se encontró el departamento.');
        }
        res.json(actualizado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error actualizando', error });
    }
});

module.exports=router;