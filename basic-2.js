/**
 * Implementa una función que dependiendo el país y la edad de la persona, nos devuelve si esta persona es mayor de edad o no.
 * 
 * MAyoria de edad en España: 18 o más
 * MAyoria de edad en EEUU: 21 o más
 * 
 * El valor de ocuntry solamente puede ser "España" o "EEUU"
 */

function isAdultInCountry(age, country) {
    if (country== "EEUU"){
        return (age>=21)
    } else {
        return (age>=18)
    }
}

console.log(isAdultInCountry(17, "España")); // false, se espera false porque 17 es menor de 18 años
console.log(isAdultInCountry(18, "España")); // true, se espera true porque 18 es igual a la mayoría de edad en España
console.log(isAdultInCountry(20, "EEUU")); // false, se espera false porque 20 es menor de 21 años
console.log(isAdultInCountry(21, "EEUU")); // true, se espera true porque 21 es igual a la mayoría de edad en EE.UU.
