const Afiliado = require('../models/afiliado');

const afiliadoCtrl = {}

afiliadoCtrl.getAfiliados = async (req, res) => {
    afiliados = await Afiliado.find();
    res.json(afiliados);
}

afiliadoCtrl.createAfiliado = async (req, res) => {
    console.log(req.body);
    const criteria = {
        dni: req.body.dni
    }
    const criteria2 = {
        email: req.body.email
    }
    Afiliado.findOne(criteria2, function (err, afi) {
        if (err) {
            res.json({
                status: 0,
                message: 'error'
            })
        };
        if (!afi) {
            Afiliado.findOne(criteria, function (err, afi) {
                if (err) {
                    res.json({
                        status: 0,
                        message: 'error'
                    })
                };
                if (!afi) {
                    const afiliado = new Afiliado(req.body);
                    afiliado.save();
                    res.json({
                        status: 1,
                        message: 'Afiliado Guardado'
                    });
                } else {
                    res.json({
                        status: 2,
                        message: "Afiliado con dni ya existente"
                    });
                }
            });
        } else {
            res.json({
                status: 3,
                message: "Afiliado con email ya existente"
            });
        }
    });
}

afiliadoCtrl.getAfiliado = async (req, res) => {
    const afiliado = await Afiliado.findById(req.params.id);
    res.json(afiliado);
}

afiliadoCtrl.buscarAfiliado = async (req, res) => {
    console.log(req.body);
    const criteria = {
        email: req.body.email
    }
    Afiliado.findOne(criteria, function (err, afi) {
        if (err) {
            res.json({
                status: 0,
                message: 'error'
            })
        };
        if (!afi) {
            const afiliado = new Afiliado(req.body);
            res.json({
                status: 2,
                message: 'No eres un afiliado'
            });
        } else {
            res.json({
                status: 1,
                afiliado: afi
            });
            
        }
    });
}

afiliadoCtrl.editAfiliado = async (req, res) => {
    const afiliado = new Afiliado(req.body);
    await Afiliado.findByIdAndUpdate(req.params.id, { $set: afiliado }, { new: true });
    res.json({
        'status': 'Afiliado updated'
    });
}
afiliadoCtrl.deleteAfiliado = async (req, res) => {
    await Afiliado.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Afiliado removed'
    });
}
module.exports = afiliadoCtrl;