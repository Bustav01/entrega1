import { TrianguloEscaleno } from "./trianguloescaleno";

// Define la clase `TrianguloEquilatero` que extiende de `TrianguloEscaleno`
export class TrianguloEquilatero extends TrianguloEscaleno {
    // Constructor de la clase `TrianguloEquilatero`
    constructor(ladoA: number) {
        // Llama al constructor de la clase padre (`TrianguloEscaleno`) 
        // pasando el mismo valor para los tres lados, ya que en un triángulo equilátero
        // todos los lados tienen la misma longitud.
        super(ladoA, ladoA, ladoA);

        // Asigna el nombre específico "Triángulo Equilátero" a la propiedad `nombre`
        this.nombre = 'Triángulo Equilátero';
    }

    // Sobrescribe el método `calcularPerimetro` de la clase base
    override calcularPerimetro(): number {
        // Calcula y retorna el perímetro del triángulo equilátero,
        // que es 3 veces la longitud de uno de sus lados.
        return 3 * this.ladoA;
    }
}