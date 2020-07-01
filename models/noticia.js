const mongoose = require('mongoose');
const Usuario = require('./usuario');
const {Schema} = mongoose;

const NovedadSchema = new Schema({
    titulo:{type: String, required:true},
    descripcion:{type: String, required:true},
    fecha:{type: Date, required:true},
    usuario:{type: Schema.Types.ObjectId, ref: Usuario},
    vigente:{type: Boolean, required:true}
})

module.exports =mongoose.model('Noticia', NovedadSchema);