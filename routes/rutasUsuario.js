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
// Contenido nuevo
router.post('/editar', async(req, res) => {
	console.log("post");
	const id = req.body._id;
	const datos = req.body;
	console.log(datos);
	await modeloUser.findByIdAndUpdate(
		id,
		datos,
		{ new: true }
	);
});
// Fin contenido nuevo
module.exports = router;