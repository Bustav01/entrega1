import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,
   IonList, IonItem, IonSelect, IonSelectOption} from '@ionic/angular/standalone';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { CirculoComponent } from '../circulo/circulo.component';
import {IonSelectCustomEvent, SelectChangeEventDetail} from '@ionic/core'
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
     IonList, IonItem, IonSelect, IonSelectOption,
     CirculoComponent, TrianguloComponent,
    NgIf],
})
export class HomePage {
  
  componente = "";

  constructor() { }
  ngOnInit(){
  }

  handleChange($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>){
    this.componente = $event.target.value ?? ""
  }
}
