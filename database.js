const mongoose = require('mongoose');
//direccion de la base de datos(/nombre)
const URI = 'mongodb://localhost/tp-final-db';
mongoose.connect(URI).then(db=>console.log('DB is connected')).catch(err=>console.error(err));
//mongoose.connect(URI, {useUnifiedTopology: true,useNewUrlParser: true,useCreateIndex: true,useFindAndModify: true
//}, console.log(`DB running on ${URI}`)).then(db=>console.log('DB is connected')).catch(err=>console.error(err));
module.exports = mongoose;