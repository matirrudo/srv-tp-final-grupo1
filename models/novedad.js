const mongoose = require('mongoose');
const Afiliado = require('./afiliado');
const Usuario = require('./usuario');
const {Schema} = mongoose;

const NovedadSchema = new Schema({
    usuario:{type:Usuario, required:true},
    texto:{type: String, required:true},
    estado:{type:String, required:true}
})

module.exports =mongoose.model('Novedad', NovedadSchema);