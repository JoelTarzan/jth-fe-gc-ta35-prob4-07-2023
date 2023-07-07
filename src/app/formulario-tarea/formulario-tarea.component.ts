import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-tarea',
  templateUrl: './formulario-tarea.component.html',
  styleUrls: ['./formulario-tarea.component.css']
})
export class FormularioTareaComponent {

  @Output() agregarEvent = new EventEmitter<any>();

  titulo: string = '';
  descripcion: string = '';

  // Crea una tarea nueva y la envía al componente padre
  agrear(): void {

    if (this.titulo == '' || this.descripcion == '') {
      alert('Porfavor, rellene los dos campos antes de agregar una tarea.');
      return;
    }

    let tarea = {
      "titulo": this.titulo,
      "descripcion": this.descripcion,
      "estado": false
    }

    this.agregarEvent.emit(tarea);

    this.titulo = '';
    this.descripcion = '';
  }
}