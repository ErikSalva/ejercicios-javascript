/*Uso de Math para Cálculos: Escribe una función que reciba un número y devuelva un objeto con sus propiedades matemáticas: el cuadrado, la raíz cuadrada y el valor absoluto. Utiliza métodos de Math. */


function propiedadesMatematicas(number){

    let numberObject = {
        cuadrado: Math.pow(number, 2),
        raizCuadrada: Math.sqrt(number),
        valorAbsoluto: Math.abs(number)
    };

    return numberObject;
}