const nombre = "Juan Pablo";
const ficha = "3412768";
const notas = [2.7,3.0,2.2];

const promedio = (notas[0] + notas[1] + notas[2]) / 3;

console.log("===================================");
console.log("Sistema De Notas Sena");
console.log("===================================");
console.log(`Aprendiz: ${nombre}`);
console.log(`Ficha: ${ficha}`);
console.log(`Notas: ${notas}`);
console.log("===================================");
console.log(`Promedio: ${promedio}`);
console.log(`Estado: ${promedio >= 3.0 ? "Aprobado" : "No Aprobado"}`);