// NOMBRE=Jose node entorno.js
// NOMBRE=Jose WEB=Jose.com node entorno.js
let nombre = process.env.NOMBRE || 'Persona';
let web = process.env.WEB || 'No tengo web';

console.log('Hola '+ nombre);
console.log('Mi web es '+ web);