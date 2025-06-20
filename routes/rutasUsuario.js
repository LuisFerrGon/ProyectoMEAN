//routes/rutasUsuario.js
const express = require('express'),
	router = express.Router(),
	modeloUser = require('../models/modeloUsers');

router.get('/', (req, res) => {
	res.send('<h1>Hello World</h1>');
});
router.get('/users', async(req, res) => {
	try{
		const usuarios = await modeloUser.find();
		res.json(usuarios);
	}catch(error){
		res.status(500).json({ error: 'Error al obtener departamentos' + error });
	}
});
router.get('/getByID/:id', async(req, res) => {
	id=req.params.id;
	const usuario = await modeloUser.findById(id);
	res.json(usuario);
});
router.post('/editar', async(req, res) => {
	const id = req.body._id;
	const datos = req.body;
	await modeloUser.findByIdAndUpdate(
		id,
		datos,
		{ new: true }
	);
});
router.post('/eliminar/:id', async(req, res) => {
	id = req.params.id;
	await modeloUser.findByIdAndDelete(id);
});
// Contenido nuevo
router.post('/crear', async(req, res) => {
	const datos = req.body;
	await modeloUser.create(datos);
});
// Fin contenido nuevo
module.exports = router;