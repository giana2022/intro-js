/*
    El usuario ingresa su año de nacimiento, la máquina muestra cuál es su edad (aproximada)
*/

let anioDeNacimiento;
let edad;
let anioActual = 2023;

// Entrada
anioDeNacimiento = parseInt(prompt("¿En qué año naciste?"));
//anioDeNacimiento = parseInt(anioDeNacimiento)

// Proceso
edad = anioActual - anioDeNacimiento;

// Salida
// Concatenar con el +
console.log("Tu edad es " + edad + " ó " + (edad-1) + " años")
// Concatenar con template string (con backsticks)
console.log(`Tu edad es ${edad} ó ${edad-1} años`)