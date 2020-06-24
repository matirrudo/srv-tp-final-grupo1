console.log("cargo novedades.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//definiendo controlador para el manejo de CRUD
const novedadCtrl = require('../controllers/novedad.controller');

// definiendo rutas
router.get('/', novedadCtrl.getNovedades);
router.post('/', novedadCtrl.createNovedad);
router.get('/:id', novedadCtrl.getNovedad);
router.put('/:id', novedadCtrl.editNovedad);
router.delete('/:id', novedadCtrl.deleteNovedad);

//exportacion del modulo de rutas
module.exports = router;