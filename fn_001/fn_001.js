/*Ejercicio Funciones 001
Crear un documento con el nombre fn_001.js
Declarar una función que muestre en consola los números pares del 0 al 100*/

const mostrarNumeroPares = () => {
    for (let i = 2; i <= 100; i+=2) {
        console.log(i)
    }
}

mostrarNumeroPares();