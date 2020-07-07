console.log("cargo afiliados.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//definiendo controlador para el manejo de CRUD
const afiliadoCtrl = require('../controllers/afiliado.controller');
const authCtrl = require('../controllers/auth.controller');

// definiendo rutas
router.get('/',authCtrl.verifyToken, afiliadoCtrl.getAfiliados);
router.post('/',authCtrl.verifyToken, afiliadoCtrl.createAfiliado);
router.get('/:id',authCtrl.verifyToken, afiliadoCtrl.getAfiliado);
router.put('/:id',authCtrl.verifyToken, afiliadoCtrl.editAfiliado);
router.delete('/:id',authCtrl.verifyToken, afiliadoCtrl.deleteAfiliado);

//exportacion del modulo de rutas
module.exports = router;