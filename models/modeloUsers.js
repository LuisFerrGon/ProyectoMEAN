//models/modeloUsers.js
const mongoose = require('mongoose');
const esquemaUsuario = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	}
});
const Users=mongoose.model('User', esquemaUsuario);
module.exports=Users;