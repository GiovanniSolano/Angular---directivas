import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  personas: any[];

  constructor() { 
    this.personas = [
      {nombre: 'Giovanni', apellido: 'Solano', edad: 22},
      {nombre: 'Pedro', apellido: 'Rosales', edad: 52},
      {nombre: 'Jesús', apellido: 'Reyes', edad: 62},
      {nombre: 'Petra', apellido: 'Les', edad: 52},
      {nombre: 'Me', apellido: 'Soslano', edad: 22},
    ]
  }

  ngOnInit(): void {
  }

  onClick() {
    this.personas.push(
      {nombre: 'Maria', apellido: 'Segura', edad: 61}
    )
  }

}
