// Importar modulo express
const express = require('express');
// Instanciar express
const app = express();

// Capturar ruta por get
app.get('/saludo/:nombre', (req, res) => {
    let nombre = req.params.nombre;
    res.send(`HOLA ${nombre} DESDE EXPRESS`);
});

// Levantar el servidor
app.listen(3000, () => {
    console.log('SERVIDOR INICIADO');
    console.log('Servidor ejecutado en http://localhost:3000');
});