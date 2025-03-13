/**
 * Dado un array de participantes, la función debe devolver true si podemos hacer parejas de 2 con los nombres del array. En caso contrario, devuelve false.
 * 
 * Pista: El módulo de una operación nos permite saber si un número da exacto al dividirlo por otro (no tiene residuo/desecho)
 * 
 * El array tendrá siempre al menos un elemento.
 * 
 * @param {array} names 
 */

function canWeMakePairs(names) {
    return names.length%2==0;
}

console.log(canWeMakePairs(["Alice", "Bob", "Charlie", "David"])); // true, se espera true porque hay 4 personas (número par)
console.log(canWeMakePairs(["Alice", "Bob", "Charlie"]));          // false, se espera false porque hay 3 personas (número impar)
console.log(canWeMakePairs(["Alice", "Bob"]));  // true
console.log(canWeMakePairs(["Alice"]));  // false