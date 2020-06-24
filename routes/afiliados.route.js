console.log("cargo afiliados.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//definiendo controlador para el manejo de CRUD
const afiliadoCtrl = require('../controllers/afiliado.controller');

// definiendo rutas
router.get('/', afiliadoCtrl.getAfiliados);
router.post('/', afiliadoCtrl.createAfiliado);
router.get('/:id', afiliadoCtrl.getAfiliado);
router.put('/:id', afiliadoCtrl.editAfiliado);
router.delete('/:id', afiliadoCtrl.deleteAfiliado);

//exportacion del modulo de rutas
module.exports = router;