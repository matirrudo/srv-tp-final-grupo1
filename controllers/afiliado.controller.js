const Afiliado = require('../models/afiliado');

const afiliadoCtrl = {}

afiliadoCtrl.getAfiliados = async (req, res) => {
    afiliados = await Afiliado.find().populate("afiliado");
    res.json(afiliados);
}

afiliadoCtrl.createAfiliado = async (req, res) => {
    console.log(req.body);
    const afiliado = new Afiliado (req.body);
    await afiliado.save();
    res.json({
        'status': 'Afiliado saved'
    });
}

afiliadoCtrl.getAfiliado = async (req, res) => {
    const afiliado = await Afiliado.findById(req.params.id).populate("afiliado");
    res.json(afiliado);
}

afiliadoCtrl.editAfiliado = async (req, res) => {
    const afiliado =  new Afiliado (req.body);
    await Afiliado.findByIdAndUpdate(req.params.id, {$set: afiliado}, {new: true});
    res.json({
        'status': 'Afiliado updated'
    });
}
afiliadoCtrl.deleteAfiliado = async (req, res)=>{
    await Afiliado.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Afiliado removed'
    });
}
module.exports= afiliadoCtrl;