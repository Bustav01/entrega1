import { FiguraGeometrica } from "../models/figurageometrica";

// Define la clase `TrianguloEscaleno` que extiende de `FiguraGeometrica`
export class TrianguloEscaleno extends FiguraGeometrica {
    // Constructor que recibe los tres lados del triángulo escaleno
    constructor(
        //Declaración de propiedades
        public ladoA: number,
        public ladoB: number,
        public ladoC: number
    ) {
        // Llama al constructor de la clase base (`FiguraGeometrica`) y asigna el nombre "Triángulo Escaleno"
        super('Triángulo Escaleno');
    }

    // Implementación del método abstracto `calcularPerimetro` definido en `FiguraGeometrica`
    calcularPerimetro(): number {
        // Calcula y retorna el perímetro del triángulo escaleno
        // sumando la longitud de sus tres lados
        return this.ladoA + this.ladoB + this.ladoC;    
    }
}