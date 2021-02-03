import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../../models/Producto.model';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {


  @Input() arrProductos: Producto[];

  constructor() { }

  ngOnInit(): void {
  }

  calculaTotal() {
    let resultado = 0;
    
    for (const producto of this.arrProductos) {
      resultado += (producto.precio * producto.cantidad);
    }

    return resultado;

  }

  onClickBorrar(index: number) {
    if (this.arrProductos[index].cantidad === 1) {
      this.arrProductos.splice(index, 1);
    } else {
      this.arrProductos[index].cantidad--;
    }
  }

}
