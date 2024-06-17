/*Uso de for...of con Objetos: Escribe una función que reciba un objeto con propiedades de alumnos y sus notas (por ejemplo, {Juan: 8, Maria: 9, Pedro: 7}) y devuelva el promedio de las notas. Utiliza un bucle for...of para iterar sobre los valores del objeto.  */


function calcularPromedioNotas(alumnos) {
    let totalNotas = 0;
    let cantidadAlumnos = 0;

    for (let nota of Object.values(alumnos)) {
        totalNotas += nota;
        cantidadAlumnos++;
    }

    if (cantidadAlumnos == 0) {
        return 0; 
    } else {
        return totalNotas / cantidadAlumnos;
    }
}


/*
const alumnos = { Juan: 8, Maria: 9, Pedro: 7 };
const valores = Object.values(alumnos);
console.log(valores); 
console.log(calcularPromedioNotas(alumnos));
*/