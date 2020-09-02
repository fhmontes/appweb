// Importar modulo express
const express = require('express');
// Instanciar express
const app = express();

// Llamar al contenido estatico
app.use(express.static('./public'));

// Levantar el servidor
app.listen(3000, () => {
    console.log('SERVIDOR INICIADO');
    console.log('Servidor ejecutado en http://localhost:3000');
});