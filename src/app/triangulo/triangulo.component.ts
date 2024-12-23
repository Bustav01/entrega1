// Importaciones necesarias para el componente
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrianguloEscaleno } from '../models/trianguloescaleno';
import { TrianguloEquilatero } from '../models/trianguloequilatero';
import { IonCard, IonImg,IonText, 
  IonCardTitle, IonCardSubtitle, IonCardHeader,
  IonCardContent, IonList, IonItem, IonInput, IonButton} from "@ionic/angular/standalone";

  // Decorador que define metadatos para el componente
@Component({
  selector: 'app-triangulo', // Selector del componente
  templateUrl: './triangulo.component.html', // Ruta del archivo HTML asociado
  styleUrls: ['./triangulo.component.scss'], // Ruta del archivo SCSS asociado
  standalone: true, // Indica que este componente es independiente
  imports: [ // Módulos y componentes necesarios para este componente
    CommonModule,FormsModule,IonCard, IonImg,IonText,
    IonCardTitle,IonCardSubtitle, IonCardHeader, IonCardContent,
    IonList, IonItem, IonInput,IonButton]
})
export class TrianguloComponent  implements OnInit {
  // Propiedades para almacenar los valores de los lados del triángulo
  ladoA:number = 0;
  ladoB:number = 0;
  ladoC:number = 0;
  perimetro: number | null=null // Propiedad para almacenar el perímetro calculado
  escaleno: TrianguloEscaleno; // Instancia de la clase TrianguloEscaleno
  equilatero: TrianguloEquilatero; // Instancia de la clase TrianguloEquilatero
  imagenSrc: string = 'assets/triangulo.png'; // Ruta de la imagen representativa del triángulo

  constructor() {
    // Inicializa instancias de TrianguloEscaleno y TrianguloEquilatero con valores de ejemplo
    this.escaleno = new TrianguloEscaleno(this.ladoA,this.ladoB,this.ladoC);
    this.equilatero = new TrianguloEquilatero(this.ladoA);
   }

  ngOnInit() {
        // Método que se ejecuta al inicializar el componente
  }

  calcularPerimetro():void {
    // Convierte lados a número
    const ladoA = Number(this.ladoA);
    const ladoB = Number(this.ladoB);
    const ladoC = Number(this.ladoC);
    
    // Verifica que todos los lados sean válidos antes de calcular el perímetro
    if (!isNaN(this.ladoA) && !isNaN(this.ladoB) && !isNaN(this.ladoC)) {
      this.perimetro = Number((this.ladoA + this.ladoB + this.ladoC).toFixed(2)); // Calcula y redondea el perímetro a 2 decimales
    } else {
      alert('Por favor, ingresa valores válidos para los lados.'); // Muestra un mensaje de error si los valores no son válidos
      this.perimetro = null // Restablece el valor de `perimetro
    }
  }
}
