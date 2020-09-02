// Importar modulo express
const express = require('express');
// Instanciar express
const app = express();
// Importar modulo hbs
const hbs = require('hbs');

// Indicar directorio de parciales
hbs.registerPartials('./views/partials');

// Utilizar hbs
app.set('view engine', 'hbs');

// Indicar contenido estatico (html, css, js, imagenes, otros)
app.use(express.static('./public'));

// Capturar ruta por get
app.get('/hbs', (req, res) => {
    // Simular datasource
    let personas = [
        {id: 1, nombre: 'Juan'},
        {id: 2, nombre: 'Pedro'},
        {id: 3, nombre: 'Maria'},
    ];
    // Crear data
    let data = {
        titulo: 'Plantilla HBS',
        personas: personas
    };
    // Renderizar vista
    res.render('home', data);
});

// Levantar el servidor
app.listen(3000, () => {
    console.log('SERVIDOR INICIADO');
    console.log('Servidor ejecutado en http://localhost:3000');
});