// Importaciones necesarias para Ionic y Angular
import { Component } from '@angular/core'; // Decorador para definir el componente
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/angular/standalone'; // Componentes de Ionic
import { TrianguloComponent } from '../triangulo/triangulo.component'; // Componente del triángulo
import { CirculoComponent } from '../circulo/circulo.component'; // Componente del círculo
import { IonSelectCustomEvent, SelectChangeEventDetail } from '@ionic/core'; // Tipos de eventos personalizados de Ionic
import { NgIf } from '@angular/common'; // Directiva para condicionales en Angular

// Decorador que define el componente
@Component({
  selector: 'app-home', // Selector del componente, usado en plantillas
  templateUrl: 'home.page.html', // Ruta del archivo HTML asociado
  styleUrls: ['home.page.scss'], // Ruta del archivo SCSS asociado
  imports: [ // Módulos y componentes que este componente utiliza
    IonHeader, IonToolbar, IonTitle, IonContent, // Estructura general de la página
    IonList, IonItem, IonSelect, IonSelectOption, // Lista e inputs select
    CirculoComponent, TrianguloComponent, // Componentes del círculo y triángulo
    NgIf // Directiva Angular para mostrar/ocultar elementos condicionalmente
  ],
})
export class HomePage {
  // Variable que almacena el nombre del componente seleccionado
  componente = "";

  constructor() { }
  ngOnInit(){
  }

  // Método que maneja los cambios en el select (dropdown)
  handleChange($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>){
    // Asigna el valor seleccionado al campo `componente`, o una cadena vacía si el valor es null/undefined
    this.componente = $event.target.value ?? ""
  }
}
