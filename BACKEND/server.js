const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors'); 
app.use(express.json());
app.use(cors());

/////////////////////////////// IMPORTANTO LAS RUTAS DEL SERVICIOS
const mantenimientoRoutes = require('./mantenimientoRoutes.js');
const seguimientoRoutes = require('./seguimientoRoutes.js');
app.use('/mnt', mantenimientoRoutes);
app.use('/seg', seguimientoRoutes);
////////////////////////////// INICIANDO SERVICIO EXPRESS
app.listen(3080, () => console.log('Servidor iniciado'));
///////////////////////////// RUTA INICIAL
app.get('/', (req, res) => {
    res.send('Página principal');
});








