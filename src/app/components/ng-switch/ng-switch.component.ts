import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  opcionNumero: number;

  constructor() { 
    this.opcionNumero = 2;
  }

  ngOnInit(): void {
  }
  
  cambiarValor() {
    this.opcionNumero = Math.floor(Math.random() * (6 * 1) + 1);
  }
}
