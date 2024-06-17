/*Uso de for y Cadenas: Crea una función que reciba una cadena y devuelva una nueva cadena con las vocales en mayúsculas. Utiliza un bucle for para iterar sobre los caracteres de la cadena. */


function vocalesMayusculas(cadena){

    let newString = '';
    
    for (let i = 0; i < cadena.length; i++) {

        if ('aeiouAEIOU'.includes(cadena[i])) {
            newString+=cadena[i].toUpperCase();
        } else {
            newString+=cadena[i];
        }
    }

    return newString;

}