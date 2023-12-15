const express = require('express');
const config = require('./config');

const estudiantes = require('./modulos/estudiantes/rutas');

const app = express();

//configuración
app.set('port', config.app.port);

//rutas
app.use('/api/estudiantes', estudiantes);

module.exports = app;