const Noticia = require('../models/noticia');

const noticiaCtrl = {}

noticiaCtrl.getNoticias = async (req, res) => {
    noticias = await Noticia.find().populate("usuario");
    res.json(noticias);
}
noticiaCtrl.getNoticiasActivas = async (req, res) => {
    const criteria = { vigente: true }
    noticias = await Noticia.find(criteria).populate("usuario");
    res.json(noticias);
}
noticiaCtrl.createNoticia = async (req, res) => {
    console.log(req.body);
    const noticia = new Noticia(req.body);
    await noticia.save();
    res.json({
        'status': 'Noticia saved'
    });
}

noticiaCtrl.getNoticia = async (req, res) => {
    const noticia = await Noticia.findById(req.params.id).populate("usuario");
    res.json(noticia);
}

noticiaCtrl.editNoticia = async (req, res) => {
    const noticia = new Noticia(req.body);
    await Noticia.findByIdAndUpdate(req.params.id, { $set: noticia }, { new: true });
    res.json({
        'status': 'Noticia updated'
    });
}
noticiaCtrl.deleteNoticia = async (req, res) => {
    await Noticia.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Noticia removed'
    });
}
module.exports = noticiaCtrl;