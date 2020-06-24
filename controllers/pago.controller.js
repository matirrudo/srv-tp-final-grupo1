const Pago = require('../models/pago');

const pagoCtrl = {}

pagoCtrl.getPagos = async (req, res) => {
    pagos = await Pago.find().populate("pago");
    res.json(pagos);
}

pagoCtrl.createPago = async (req, res) => {
    console.log(req.body);
    const pago = new Pago (req.body);
    await pago.save();
    res.json({
        'status': 'Pago saved'
    });
}

pagoCtrl.getPago = async (req, res) => {
    const pago = await Pago.findById(req.params.id).populate("pago");
    res.json(pago);
}

pagoCtrl.editPago = async (req, res) => {
    const pago =  new Pago (req.body);
    await Pago.findByIdAndUpdate(req.params.id, {$set: pago}, {new: true});
    res.json({
        'status': 'Pago updated'
    });
}
pagoCtrl.deletePago = async (req, res)=>{
    await Pago.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Pago removed'
    });
}
module.exports= pagoCtrl;