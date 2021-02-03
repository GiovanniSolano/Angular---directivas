import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  
  
  propiedadesParrafo: any;
  
  constructor() {
    this.propiedadesParrafo = {
      color: 'red', fontSize: '24px'
    }
  }
  
  ngOnInit(): void {
  }
  cambiarColor(pColor: string) {
    switch (pColor) {
      case 'a':
        this.propiedadesParrafo.color = 'yellow';
        break;
      case 'v':
        this.propiedadesParrafo.color = 'green';
        break;
      case 'r':
        this.propiedadesParrafo.color = 'red';
        break;

    }
  }

  onInput(event) {
    this.propiedadesParrafo.fontSize = `${event.target.value}px`;    
  }


}
