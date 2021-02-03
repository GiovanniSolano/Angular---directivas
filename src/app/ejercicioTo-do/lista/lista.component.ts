import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../../models/Tarea.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() tareas: Tarea[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  borrarTarea(indice: number) {
    this.tareas.splice(indice, 1);
  }

}
