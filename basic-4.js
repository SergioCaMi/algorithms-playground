/**
 * Crea una función que convierta euros a yenes. Usa la variable conversion_rate para saber el cambio actual
 * 
 * @param {number} euros 
 */

function euroToYen(euros) {
    let conversion_rate = 163.4;
    return euros * conversion_rate;
}

console.log(euroToYen(0));     // 0, se espera 0 porque 0 euros equivalen a 0 yenes
console.log(euroToYen(1));     // 163.4, se espera 163.4 porque 1 euro equivale a 163.4 yenes
console.log(euroToYen(10));    // 1634, se espera 1634 porque 10 euros equivalen a 1634 yenes