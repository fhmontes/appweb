// helper: Funciones de ayuda que usualmente se ejecutan en las vistas
const hbs=require('hbs');
// Crear helper que retorne una suma
hbs.registerHelper('getSuma', (a, b) => {
    return a + b;
}); 