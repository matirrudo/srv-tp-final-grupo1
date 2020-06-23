const mongoose = require('mongoose');
const Afiliado = require('./afiliado');
const {Schema} = mongoose;

const ServicioSchema = new Schema({
    nombre:{type: String, required:true},
    imagen:{type: String, required:true},
    activo:{type:Boolean, required:true},
    afiliadosInsc:{type:[Afiliado.schema], required:false}
    //afiliadosInsc:{type:[Afiliado.schema], required:false} //Composicion
})

module.exports =mongoose.model('Servicio', ServicioSchema);