// Importar modulo http
const http = require('http');
// Crear servidor
const proxy = http.createServer((req, res) => {
    // Adicionar encabezado
    res.writeHead(200, {'content-type': 'application/json'});
    // Objeto JSON
    let salida = {
        nombre: 'Juan',
        apellido: 'Perez',
        telefono: '70666666',
        edad: 52
    };
    // Adicionar contenido
    res.write(JSON.stringify(salida));
    // Finalizar / Enviar respuesta
    res.end();
});
// Ejecutar servidor
proxy.listen(3000);

console.log('Servidor ejecutado en http://localhost:3000');
