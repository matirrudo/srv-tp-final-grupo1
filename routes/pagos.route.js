console.log("cargo pagos.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//definiendo controlador para el manejo de CRUD
const pagoCtrl = require('../controllers/pago.controller');
const authCtrl = require('../controllers/auth.controller');

// definiendo rutas
router.get('/',authCtrl.verifyToken , pagoCtrl.getPagos);
router.post('/',authCtrl.verifyToken , pagoCtrl.createPago);
router.get('/:id',authCtrl.verifyToken , pagoCtrl.getPago);
router.put('/:id',authCtrl.verifyToken , pagoCtrl.editPago);
router.delete('/:id',authCtrl.verifyToken , pagoCtrl.deletePago);

//exportacion del modulo de rutas
module.exports = router;