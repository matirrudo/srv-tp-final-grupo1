const mongoose = require('mongoose');
const Afiliado = require('./afiliado');
const Usuario = require('./usuario');
const {Schema} = mongoose;

const NovedadSchema = new Schema({
    titulo:{type: String, required:true},
    descripcion:{type: String, required:true},
    fecha:{type: Date, required:true},
    usuario:{type:Usuario, required:true},
    vigente:{type: Boolean, required:true}
})

module.exports =mongoose.model('Novedad', NovedadSchema);