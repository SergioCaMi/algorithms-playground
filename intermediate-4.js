/**
 * Buscar algo en un array.
 * 
 * Otro caso típico es buscar un elemento o condición en un array.
 * 
 * El Hospital Clínic quiere elaborar un software que detecta la subcadena de bases nitrogenadas responsables del Alzeihmer. 
 * 
 * Dado un array de secuencias genéticas en formato string del paciente, el algoritmo debe devolver true si algunas de las secuencias geneticas del paciente contiene la subcadena ATCGGCTA , indicando que es propenso a la enfermedad del Alcheimer y tiene que a ser monitorizado  
 * 
 * Pista: La funcion 'includes' de JavaScript te puede ayudar a encontrar una cadena de texto
 */

// cadena: 'ATCGGCTA'

function checkDNAForAlzheimer(sequences) {
    let cadena = 'ATCGGCTA';
    for (let sequence of sequences){
       return sequence.includes(cadena);
    }
    console.log("--------");
    return false;
}

console.log(checkDNAForAlzheimer([
    "GGTACCATCGGCTACATC",
    "ATCGGCTAGGTACC",
    "TCGAGGCTA",
    "AGCTAGCTAG",
    "GGCTATCG"
]));
// true, se espera true porque la segunda y tercera secuencia contienen "ATCGGCTA"

console.log(checkDNAForAlzheimer([
    "ATCGGCTAAGGTC",
    "GGTAGCTA",
    "CTAGCTAGC",
    "TACGGGCTAT",
    "GCTACTGAC"
]));
// true, se espera true porque la primera secuencia contiene "ATCGGCTA"

console.log(checkDNAForAlzheimer([
    "GCTATCGG",
    "AGCTAGCTA",
    "TACGACTA",
    "AGGTACCATCG",
    "GGCTATACG"
]));
// false, se espera false porque ninguna secuencia contiene "ATCGGCTA"
