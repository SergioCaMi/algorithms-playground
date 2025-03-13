/**
 * Implementa una función que dada una edad, devuelva si la persona es mayor de edad o no
 *
 */

function isAdult(age) {
    return (age>=18)
}

console.log(isAdult(17)); // false, se espera false porque 17 es menor de 18 años
console.log(isAdult(18)); // true, se espera true porque 18 es igual a la mayoría de edad
console.log(isAdult(25)); // true, se espera true porque 25 es mayor de 18 años
