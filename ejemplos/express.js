// Importar modulo express
const express = require('express');
// Instanciar express
const app = express();

// Capturar ruta por get
app.get('/', (req, res) => {
    res.send('HOLA DESDE EXPRESS');
});

// Levantar el servidor
app.listen(3000, () => {
    console.log('SERVIDOR INICIADO');
    console.log('Servidor ejecutado en http://localhost:3000');
});