console.log("cargo noticias.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//definiendo controlador para el manejo de CRUD
const noticiaCtrl = require('../controllers/noticia.controller');
const authCtrl = require('../controllers/auth.controller');

// definiendo rutas
router.get('/',noticiaCtrl.getNoticias);
router.get('/activas',noticiaCtrl.getNoticiasActivas);
router.post('/',authCtrl.verifyToken , noticiaCtrl.createNoticia);
router.get('/:id',authCtrl.verifyToken , noticiaCtrl.getNoticia);
router.put('/:id',authCtrl.verifyToken , noticiaCtrl.editNoticia);
router.delete('/:id',authCtrl.verifyToken , noticiaCtrl.deleteNoticia);

//exportacion del modulo de rutas
module.exports = router;