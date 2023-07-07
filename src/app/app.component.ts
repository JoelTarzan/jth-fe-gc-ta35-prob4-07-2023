import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('formulario') formulario: any;
  @ViewChild('lista') lista: any;

  // Llama a la función correspondiente del componente lista, pasandole el evento emitido del componente formulario
  enviarTarea($event: any): void {
    this.lista.agregar($event);
  }
}
