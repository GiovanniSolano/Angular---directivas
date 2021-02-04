import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductoDeCompra } from '../../models/ProductoDeCompra.model';

@Component({
  selector: 'app-lista-productos-compras',
  templateUrl: './lista-productos-compras.component.html',
  styleUrls: ['./lista-productos-compras.component.css']
})
export class ListaProductosComprasComponent implements OnInit {

  @Input() textoBoton: string;
  @Input() productosDeCompra: ProductoDeCompra[];
  @Output() productoSeleccionado: EventEmitter<number>;

  constructor() { 
    this.productoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(indice: number) {

    this.productoSeleccionado.emit(indice);


  }

}
