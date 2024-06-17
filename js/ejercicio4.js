/*Clases y Métodos: Define una clase Rectangle que tenga dos propiedades width y height. Incluye métodos para calcular el área y el perímetro del rectángulo. */


class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calcularArea() {
        return this.width * this.height;
    }

    calcularPerimetro() {
        return 2 * (this.width + this.height);
    }
}


/*
let rectangulo = new Rectangle(5, 10);
console.log('Ancho:', rectangulo.width);
console.log('Altura:', rectangulo.height); 

console.log('Área:', rectangulo.calcularArea());
console.log('Perímetro:', rectangulo.calcularPerimetro()); */