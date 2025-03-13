/** 
 * Acumular algo a lo largo de un array.
 * 
 * Recorrer un array para hacer algo con cada una de sus posiciones es una tarea muy típica en progamación.
 * 
 * La App Web bingo.com nos pide un algoritmo que, dado un array de depositos y retiradas de dinero de un usuario, nos devuelva cuanto dinero ha ingresado un usuario. Los depositos son números positivos y las retiradas de dinero, números negativos
 * 
*/

function sumDeposits(deposits) {
    let saldoTotal=0;
    for (let transaccion of deposits){
        if (transaccion>0){
            saldoTotal = saldoTotal + (transaccion);
        }
    }
    return saldoTotal;
}

console.log(sumDeposits([200, 300, -100, 500])); 
// 1000, se espera 1000 porque suma solo los depósitos : 200+300+500

console.log(sumDeposits([-150, 200, 50, -50]));  
// 250, se espera 250 porque solo los valores 200 y 50 son depósitos 

console.log(sumDeposits([150, 100, -200, -300])); 
// 250, se espera 250 porque 150 y 100 son los únicos depósitos 


