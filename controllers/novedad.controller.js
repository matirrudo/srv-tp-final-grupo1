const Novedad = require('../models/novedad');

const novedadCtrl = {}

novedadCtrl.getNovedades = async (req, res) => {
    novedades = await Novedad.find().populate("usuario");
    res.json(novedades);
}

novedadCtrl.createNovedad = async (req, res) => {
    console.log(req.body);
    const novedad = new Novedad (req.body);
    await novedad.save();
    res.json({
        'status': 'Novedad saved'
    });
}

novedadCtrl.getNovedad = async (req, res) => {
    const novedad = await Novedad.findById(req.params.id).populate("usuario");
    res.json(novedad);
}

novedadCtrl.editNovedad = async (req, res) => {
    const novedad =  new Novedad (req.body);
    await Novedad.findByIdAndUpdate(req.params.id, {$set: novedad}, {new: true});
    res.json({
        'status': 'Novedad updated'
    });
}
novedadCtrl.deleteNovedad = async (req, res)=>{
    await Novedad.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Novedad removed'
    });
}
module.exports= novedadCtrl;