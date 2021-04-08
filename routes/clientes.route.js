console.log("cargo clientes.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//definiendo controlador para el manejo de CRUD
const clienteCtrl = require('../controllers/cliente.controller');

// definiendo rutas
router.get('/', clienteCtrl.getClientes);
router.post('/', clienteCtrl.createCliente);
router.post('/buscar', clienteCtrl.buscarCliente);
router.get('/:id', clienteCtrl.getCliente);
router.put('/:id', clienteCtrl.editCliente);
router.delete('/:id', clienteCtrl.deleteCliente);

//exportacion del modulo de rutas
module.exports = router;