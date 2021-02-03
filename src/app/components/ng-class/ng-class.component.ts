import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  cadenaClases: string;
  arrayClases: string[];

  colorSelected: string;

  constructor() {
    this.cadenaClases = 'redondo rojo';
    this.arrayClases = ['semaforo'];
    this.arrayClases.push('rojo');
    this.arrayClases.push('redondo');

    this.colorSelected = 'v';

   }

  ngOnInit(): void {

    setInterval(() => {

      if(this.colorSelected === 'r') {
        this.colorSelected = 'a';
      } else if (this.colorSelected === 'a') {
        this.colorSelected = 'v';
      } else if (this.colorSelected === 'v') {
        this.colorSelected = 'r';
      }

    },2000);

  }

}
