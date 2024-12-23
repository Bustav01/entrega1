// Importaciones necesarias para el componente
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiguraGeometrica } from '../models/figurageometrica';
import { FormsModule } from '@angular/forms';
import {IonCard, IonImg,IonText, 
  IonCardTitle, IonCardSubtitle, IonCardHeader,
  IonCardContent, IonList, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';

// Decorador que define metadatos para el componente
@Component({
  selector: 'app-circulo', // Selector del componente
  templateUrl: './circulo.component.html', // Ruta del archivo HTML asociado
  styleUrls: ['./circulo.component.scss'], // Ruta del archivo SCSS asociado
  standalone: true, // Indica que este componente es independiente
  imports: [ // Módulos y componentes necesarios para este componente
    CommonModule,FormsModule,IonCard, IonImg,IonText,
    IonCardTitle,IonCardSubtitle, IonCardHeader, IonCardContent,
    IonList, IonItem, IonInput,IonButton]
})
export class CirculoComponent extends FiguraGeometrica implements OnInit {
  // Propiedades:
  radio:number = 0;
  perimetro: number | null=null
  imagenSrc: string = 'assets/circulo.png'; //Ruta de imagen

  constructor() {
    super('Círculo'); // Llama al constructor de la clase base `FiguraGeometrica` con el nombre 'Círculo'
  }

  ngOnInit() {
    // Método que se ejecuta al inicializar el componente
  }

  // Método para calcular el perímetro del círculo
  override calcularPerimetro(): void {
    const radio = Number(this.radio); // Convierte el valor del radio a número

    // Verifica que el radio sea válido antes de calcular el perímetro
    if (!isNaN(this.radio)) {
      this.perimetro = Number((2 * 3.1416 * this.radio).toFixed(2)); // Calcula y redondea el perímetro a 2 decimales
    } else {
      this.perimetro = null; // Restablece el valor de `perimetro` si el radio no es válido
      alert('Por favor, ingresa un radio válido'); // Muestra un mensaje de error si el radio no es válido
    }
  }
}
