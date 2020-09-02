// MIDDLEWARE: Funciones a ejecutar hasta antes o despues de retornar una respuesta

// Importar modulo express
const express = require('express');
// Instanciar express
const app = express();

// Simular una variable de sesion
let usuario='admin';

// Definir funcion middleware para login
let login = (req, res, next) => {
    if(usuario === 'admin'){
        // Usuario valido
        // continuar con la aplicacion
        next();
    }else{
        // Usuario invalido
        res.send('Usuario no logeado');
    }
};

// Definir funcion middleware para logger
let logger = (req, res, next) => {
    console.log('Peticion: '+req.method);
    console.log('Fecha: '+new Date().toISOString());
    next();
};

// Cargar middlewares
app.use(login, logger);

// Capturar ruta por get
app.get('/login', (req, res) => {
    res.send('Bienvenido');
});

// Levantar el servidor
app.listen(3000, () => {
    console.log('SERVIDOR INICIADO');
    console.log('Servidor ejecutado en http://localhost:3000');
});