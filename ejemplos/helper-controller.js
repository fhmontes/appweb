// Importar modulo express
const express = require('express');
// Instanciar express
const app = express();
// Importar modulo hbs
const hbs = require('hbs');

// Importar archivo helper
require('../helpers/helper');

// Indicar directorio de parciales
hbs.registerPartials('./views/partials');

// Utilizar hbs
app.set('view engine', 'hbs');

// Indicar contenido estatico (html, css, js, imagenes, otros)
app.use(express.static('./public'));

// Capturar ruta por get
app.get('/helper', (req, res) => {
    // Crear data
    let data = {
        titulo: 'SUMA MEDIANTE HELPER',
        valora: 5,
        valorb: 7
    };
    // Renderizar vista
    res.render('helper-view', data);
});

// Levantar el servidor
app.listen(3000, () => {
    console.log('SERVIDOR INICIADO');
    console.log('Servidor ejecutado en http://localhost:3000');
});