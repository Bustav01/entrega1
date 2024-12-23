import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrianguloEscaleno } from './trianguloescaleno';
import { TrianguloEquilatero } from './trianguloequilatero';
import { IonCard, IonImg,IonText, 
  IonCardTitle, IonCardSubtitle, IonCardHeader,
  IonCardContent, IonList, IonItem, IonInput, IonButton} from "@ionic/angular/standalone";

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [CommonModule,FormsModule,IonCard, IonImg,IonText,
    IonCardTitle,IonCardSubtitle, IonCardHeader, IonCardContent,
    IonList, IonItem, IonInput,IonButton]
})
export class TrianguloComponent  implements OnInit {
  ladoA:number = 0;
  ladoB:number = 0;
  ladoC:number = 0;
  perimetro: number | null=null
  escaleno: TrianguloEscaleno;
  equilatero: TrianguloEquilatero;
  imagenSrc: string = 'assets/triangulo.png'; //Ruta de imagen

  constructor() {
    this.escaleno = new TrianguloEscaleno(3,4,5);
    this.equilatero = new TrianguloEquilatero(6);
   }

  ngOnInit() {}

  calcularPerimetro():void {
    const ladoA = Number(this.ladoA);
    const ladoB = Number(this.ladoB);
    const ladoC = Number(this.ladoC);
    
    if (!isNaN(this.ladoA) && !isNaN(this.ladoB) && !isNaN(this.ladoC)) {
      this.perimetro = this.ladoA + this.ladoB + this.ladoC;
    } else {
      alert('Por favor, ingresa valores válidos para los lados.');
      this.perimetro = null
    }
  }
}
