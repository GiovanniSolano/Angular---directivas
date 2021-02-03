import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  mostrar: boolean;

  constructor() {
    this.mostrar = true;
   }

  ngOnInit(): void {
  }

  onClickMostrar() {
    this.mostrar = (this.mostrar) ? false : true;
  }

}
