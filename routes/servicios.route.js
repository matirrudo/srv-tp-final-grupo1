console.log("cargo servicios.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//definiendo controlador para el manejo de CRUD
const servicioCtrl = require('../controllers/servicio.controller');
const authCtrl = require('../controllers/auth.controller');

// definiendo rutas
router.get('/',authCtrl.verifyToken , servicioCtrl.getServicios);
router.post('/',authCtrl.verifyToken , servicioCtrl.createServicio);
router.get('/:id',authCtrl.verifyToken , servicioCtrl.getServicio);
router.put('/:id',authCtrl.verifyToken , servicioCtrl.editServicio);
router.delete('/:id',authCtrl.verifyToken , servicioCtrl.deleteServicio);

//exportacion del modulo de rutas
module.exports = router;