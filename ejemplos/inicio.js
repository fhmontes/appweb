// Importar modulo http
const http = require('http');
// Crear servidor
const proxy = http.createServer((req, res) => {
    // Adicionar encabezado
    res.writeHead(200, {'content-type': 'text/html'});
    // Adicionar contenido
    res.write('Hola Mundo');
    // Finalizar / Enviar respuesta
    res.end();
});
// Ejecutar servidor
proxy.listen(3000);

console.log('Servidor ejecutado en http://localhost:3000');
