/*Manipulación de Strings: Crea una función que reciba una cadena y devuelva la misma cadena con las palabras en orden inverso. Utiliza métodos de manipulación de cadenas y arrays. */

function invertirPalabras(cadena) {
    
    let palabras = cadena.split(' ');

    // Invertir el orden del array de palabras
    let palabrasInvertidas = palabras.reverse();

    // Unir el array de palabras invertidas en una cadena
    let cadenaInvertida = palabrasInvertidas.join(' ');

    // Devolver la cadena con las palabras en orden inverso
    return cadenaInvertida;
}
