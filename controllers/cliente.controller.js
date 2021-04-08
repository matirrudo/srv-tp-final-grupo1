const Cliente = require('../models/cliente');

const clienteCtrl = {}

clienteCtrl.getClientes = async (req, res) => {
    clientes = await Cliente.find();
    res.json(clientes);
}

clienteCtrl.createCliente = async (req, res) => {
    console.log(req.body);
    const criteria = {
        dni: req.body.dni
    }
    const criteria2 = {
        email: req.body.email
    }
    Cliente.findOne(criteria2, function (err, cli) {
        if (err) {
            res.json({
                status: 0,
                message: 'error'
            })
        };
        if (!cli) {
            Cliente.findOne(criteria, function (err, cli) {
                if (err) {
                    res.json({
                        status: 0,
                        message: 'error'
                    })
                };
                if (!cli) {
                    const cliente = new Cliente(req.body);
                    cliente.save();
                    res.json({
                        status: 1,
                        message: 'Cliente Guardado'
                    });
                } else {
                    res.json({
                        status: 2,
                        message: "Cliente con dni ya existente"
                    });
                }
            });
        } else {
            res.json({
                status: 3,
                message: "Cliente con email ya existente"
            });
        }
    });
}

clienteCtrl.getCliente = async (req, res) => {
    const cliente = await Cliente.findById(req.params.id);
    res.json(cliente);
}

clienteCtrl.buscarCliente = async (req, res) => {
    console.log(req.body);
    const criteria = {
        email: req.body.email
    }
    Cliente.findOne(criteria, function (err, cli) {
        if (err) {
            res.json({
                status: 0,
                message: 'error'
            })
        };
        if (!cli) {
            const cliente = new Cliente(req.body);
            res.json({
                status: 2,
                message: 'No eres un cliente'
            });
        } else {
            res.json({
                status: 1,
                cliente: cli
            });
            
        }
    });
}

clienteCtrl.editCliente = async (req, res) => {
    const cliente = new Cliente(req.body);
    await Cliente.findByIdAndUpdate(req.params.id, { $set: cliente }, { new: true });
    res.json({
        'status': 'Cliente updated'
    });
}
clienteCtrl.deleteCliente = async (req, res) => {
    await Cliente.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Cliente removed'
    });
}
module.exports = clienteCtrl;