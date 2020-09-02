// Importar modulo express
const express = require('express');
// Instanciar express
const app = express();

// Capturar peticiones
app.get('/peticion', (req, res) => {
    res.send('PETICION : '+req.method);
});
app.post('/peticion', (req, res) => {
    res.send('PETICION : '+req.method);
});
app.put('/peticion', (req, res) => {
    res.send('PETICION : '+req.method);
});
app.delete('/peticion', (req, res) => {
    res.send('PETICION : '+req.method);
});

// Levantar el servidor
app.listen(3000, () => {
    console.log('SERVIDOR INICIADO');
    console.log('Servidor ejecutado en http://localhost:3000');
});