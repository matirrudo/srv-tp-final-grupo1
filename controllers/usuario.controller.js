const Usuario = require('../models/usuario');

const usuarioCtrl = {}

usuarioCtrl.getUsuarios = async (req, res) => {
    usuarios = await Usuario.find().populate("usuario");
    res.json(usuarios);
}

usuarioCtrl.createUsuario = async (req, res) => {
    console.log(req.body);
    const usuario = new Usuario (req.body);
    await usuario.save();
    res.json({
        'status': 'Usuario saved'
    });
}

usuarioCtrl.getUsuario = async (req, res) => {
    const usuario = await Usuario.findById(req.params.id).populate("usuario");
    res.json(usuario);
}

usuarioCtrl.editUsuario = async (req, res) => {
    const usuario =  new Usuario (req.body);
    await Usuario.findByIdAndUpdate(req.params.id, {$set: usuario}, {new: true});
    res.json({
        'status': 'Usuario updated'
    });
}
usuarioCtrl.deleteUsuario = async (req, res)=>{
    await Usuario.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Usuario removed'
    });
}
module.exports= usuarioCtrl;