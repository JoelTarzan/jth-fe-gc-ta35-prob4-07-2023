import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {

  tareas: any[] = [];

  // Busca el indice y elimina la tarea de la lista
  eliminar(tareaObjetivo: any): void {
    const index = this.tareas.findIndex(tarea => tarea.titulo == tareaObjetivo.titulo);
    this.tareas.splice(index, 1);
  }

  // Añade la tarea a la lista de tareas
  agregar(tarea: any) {
    this.tareas.push(tarea);
  }

}