/*Uso de for y Arrays: Escribe una función que reciba dos arrays de la misma longitud y devuelva un nuevo array con la suma de los elementos correspondientes. Utiliza un bucle for para iterar sobre los índices de los arrays.
 */


function sumarArrays(array1, array2) {
    // Verificar que ambos arrays tengan la misma longitud
    if (array1.length !== array2.length) {
        console.log('Los arrays tienen distinta longitud')
    }
    else{
        let resultado = [];

        for (let i = 0; i < array1.length; i++) {
            let suma = array1[i] + array2[i];
            resultado.push(suma);
        }
    
        return resultado;
    }

  
}