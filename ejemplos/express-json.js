// Importar modulo express
const express = require('express');
// Instanciar express
const app = express();

// Capturar ruta por get
app.get('/', (req, res) => {
    // Definir objeto JSON
    let persona = {
        nombre: 'Pedro',
        sueldo: 5600
    };
    // Retornar json
    res.send(persona);
});

// Levantar el servidor
app.listen(3000, () => {
    console.log('SERVIDOR INICIADO');
    console.log('Servidor ejecutado en http://localhost:3000');
});