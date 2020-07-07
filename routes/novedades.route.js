console.log("cargo novedades.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//definiendo controlador para el manejo de CRUD
const novedadCtrl = require('../controllers/novedad.controller');
const authCtrl = require('../controllers/auth.controller');

// definiendo rutas
router.get('/',authCtrl.verifyToken , novedadCtrl.getNovedades);
router.post('/',authCtrl.verifyToken , novedadCtrl.createNovedad);
router.get('/:id',authCtrl.verifyToken , novedadCtrl.getNovedad);
router.put('/:id',authCtrl.verifyToken , novedadCtrl.editNovedad);
router.delete('/:id',authCtrl.verifyToken , novedadCtrl.deleteNovedad);

//exportacion del modulo de rutas
module.exports = router;