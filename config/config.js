//config/config.js
const secret = require('crypto').randomBytes(256).toString('hex');
const contrasenaDB = 'mVgcK2bnsBtzl9aI';
const url = 'mongodb+srv://luisferrerasgonzalez:'+contrasenaDB+'@cluster0.cisc4n2.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0';

module.exports={
    url: url,
    secret: secret
}