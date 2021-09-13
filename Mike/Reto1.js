// Declarar variable
var num = prompt("¡Bienvenido! Tenemos dos programas: 1. Ordenar alfabéticamente una palabra que ingreses, 2. Convertir una palabra en mayúscula. ¿Qué programa quieres hacer?");

// Función para ordenar alfabéticamente
function ordenarTexto(palabra) {
    var palabra = prompt("¡Excelente decisión! Ingresa la palabra por favor:");

    if (typeof palabra != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }
  
    // interesting
    return [...palabra].sort((a, b) => a.localeCompare(b)).join('');
}

// Función convertir una palabra en mayúscula
function mayus(palabra) {
    var palabra = prompt("¡Excelente decisión! Ingresa la palabra por favor:");
    palabra = palabra.toUpperCase();
    console.log(palabra);
}

// Ordenar alfabéticamente
if (num == 1) {
    ordenarTexto();
    console.log(ordenarTexto());
}

// Convertir a mayúscula
if (num == 2) {
    mayus();
    console.log();
}
