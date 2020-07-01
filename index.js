var express = require('express');
var app = express();

const {mongoose} = require('./database')
const cors = require('cors');

//middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Cargamos el modulo de direccionamiento de rutas para puntos
app.use('/api/servicios', require('./routes/servicios.route.js'));
app.use('/api/noticias', require('./routes/noticias.route.js'));
app.use('/api/novedades', require('./routes/novedades.route.js'));
app.use('/api/pagos', require('./routes/pagos.route.js'));
app.use('/api/usuarios', require('./routes/usuarios.route.js'));
app.use('/api/afiliados', require('./routes/afiliados.route.js'));
//setting

app.set('port', process.env.PORT || 3000);
//starting the server

app.listen(app.get('port'), () => {
 console.log(`Server started on port`, app.get('port'));
});
