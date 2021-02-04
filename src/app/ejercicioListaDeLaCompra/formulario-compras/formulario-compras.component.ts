import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductoDeCompra } from '../../models/ProductoDeCompra.model';

@Component({
  selector: 'app-formulario-compras',
  templateUrl: './formulario-compras.component.html',
  styleUrls: ['./formulario-compras.component.css']
})
export class FormularioComprasComponent implements OnInit {

  @Output() productoCreado: EventEmitter<ProductoDeCompra>;
  nuevoProducto: ProductoDeCompra;

  constructor() {
    this.nuevoProducto = new ProductoDeCompra();
    this.productoCreado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  onClick() {
    this.productoCreado.emit(this.nuevoProducto);
    this.nuevoProducto = new ProductoDeCompra();
  }

}
