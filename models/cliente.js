const mongoose = require('mongoose');
const {Schema} = mongoose;

const ClienteSchema = new Schema({
    apellido:{type: String, required:false},
    nombres:{type: String, required:false},
    dni:{type:Number, required:false},
    email:{type:String, required:false},
    telefono:{type:Number, required:false}
})

module.exports =mongoose.model('Cliente', ClienteSchema);