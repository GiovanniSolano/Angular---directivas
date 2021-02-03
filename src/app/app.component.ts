import { Component, Input } from '@angular/core';
import { Tarea } from './models/Tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivas';

  tareas: Tarea[] = [];

  constructor() {

  }

  agregarTareaLista(tarea) {

    this.tareas.push(tarea);
    console.log(this.tareas);
    
    
  }


}
