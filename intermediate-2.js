/**
 * De nuevo, vamos a hacer un algoritmo que se encarga de "acumular" algo. Pero ahora, con una estructura de datos más difícil, un array de objetos
 * 
 * Dado un array de movimientos bancarios, que es un array de objeto donde cada objeto tiene la fecha del movimiento y su valor, implementa una función que devuelve el saldo total de la cuenta bancaria 
 */

function accountBalance(movements) {
    let saldoTotal=0;
    for (let movement of movements){
        saldoTotal = saldoTotal + movement.value 
    }
    return saldoTotal;
}

console.log(accountBalance([
    {date: "2023-04-01", value: 100},
    {date: "2023-04-02", value: -50},
    {date: "2023-04-03", value: 150}
])); 
// 200, se espera 200 porque el saldo final es 100 - 50 + 150

console.log(accountBalance([
    {date: "2023-04-04", value: 500}
])); 
// 500, se espera 500 porque hay un solo movimiento de depósito

console.log(accountBalance([
    {date: "2023-04-05", value: 300},
    {date: "2023-04-06", value: -100},
    {date: "2023-04-07", value: -200},
    {date: "2023-04-08", value: 50}
])); 
// 50, se espera 50 porque el saldo final es 300 - 100 - 200 + 50
