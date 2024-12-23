import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiguraGeometrica } from '../models/figurageometrica';
import { FormsModule } from '@angular/forms';
import {IonCard, IonImg,IonText, 
  IonCardTitle, IonCardSubtitle, IonCardHeader,
  IonCardContent, IonList, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports:[CommonModule,FormsModule,IonCard, IonImg,IonText,
    IonCardTitle,IonCardSubtitle, IonCardHeader, IonCardContent,
    IonList, IonItem, IonInput,IonButton]
})
export class CirculoComponent extends FiguraGeometrica implements OnInit {
  radio:number = 0;
  perimetro: number | null=null
  imagenSrc: string = 'assets/circulo.png'; //Ruta de imagen

  constructor() {
    super('Círculo');
  }

  ngOnInit() {}

  override calcularPerimetro(): void {
    const radio = Number(this.radio);
    if (!isNaN(this.radio)) {
      this.perimetro = 2 * 3.1416 * this.radio;
    } else {
      this.perimetro = null;
      alert('Por favor, ingresa un radio válido')
    }
  }

}
