import { TrianguloEscaleno } from "./trianguloescaleno";

export class TrianguloEquilatero extends TrianguloEscaleno {
    constructor(ladoA:number){
        super(ladoA,ladoA,ladoA);
        this.nombre = 'Triángulo Equilátero';
    }

    override calcularPerimetro(): number {
        return 3* this.ladoA;
    }
}