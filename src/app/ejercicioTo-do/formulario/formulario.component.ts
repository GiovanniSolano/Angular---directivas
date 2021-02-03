import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarea } from '../../models/Tarea.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  tarea: Tarea;
  @Output() tareaRegistrada: EventEmitter<Tarea>;
  constructor() {
    this.tarea = new Tarea();
    this.tareaRegistrada = new EventEmitter();
  }

  ngOnInit(): void {
  }


  agregarTarea(form: NgForm) {
    // console.log(this.tarea);
    this.tareaRegistrada.emit(this.tarea);
    this.tarea = new Tarea();
    
    
  }

}
