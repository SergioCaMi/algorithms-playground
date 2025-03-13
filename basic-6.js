/**
 * Tratar con objetos siempre añade un plus de dificultad a los nuevos programadores. 
 * Hay que dominarlos con firmeza para afrontar retos más complicados.
 * 
 * La función isAdult recibe un objeto que indica la edad y el nombre de la persona. Devuelve true si la persona tiene más de 18 años y false en caso contrario
 * 
 * @param {object} person
 */

function isAdult(person) {
    return person.age>=18;
}

// Caso de prueba 1: Persona justo por debajo de la mayoría de edad
console.log(isAdult({ name: "John", age: 18 })); // true, se espera true porque John tiene 18 años, justo en el límite

// Caso de prueba 2: Persona mayor de edad
console.log(isAdult({ name: "Alice", age: 25 })); // true, se espera true porque Alice tiene 25 años, claramente mayor de edad

// Caso de prueba 3: Persona menor de edad
console.log(isAdult({ name: "Bobby", age: 17 })); // false, se espera false porque Bobby tiene 17 años, menor de edad
