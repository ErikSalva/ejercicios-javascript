/* Uso de for...of y Arrays: Escribe una función que reciba un array de números y retorne un nuevo array con cada número elevado al cuadrado. Utiliza un bucle for...of para iterar sobre los elementos del array.*/

function elevarAlCuadrado(numbers){

    let result = [];

    for(let number of numbers){
        result.push(Math.pow(number, 2));
    }

    return result;
}

