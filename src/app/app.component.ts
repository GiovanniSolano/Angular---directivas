import { Component, Input } from '@angular/core';
import { Tarea } from './models/Tarea.model';
import { Producto } from './models/Producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivas';

  tareas: Tarea[] = [];
  arrComida: Producto[];
  arrBebida: Producto[];

  productosSeleccionados: Producto[];


  constructor() {


    this.productosSeleccionados = [];

    this.arrComida = [
      new Producto('Enchiladas', 'https://dam.cocinafacil.com.mx/wp-content/uploads/2019/05/enchiladas-verdes.png', 30),
      new Producto('Pozole', 'https://dam.cocinafacil.com.mx/wp-content/uploads/2018/08/pozole-rojo.jpg', 50),
      new Producto('Tacos', 'https://www.pequerecetas.com/wp-content/uploads/2020/10/tacos-mexicanos.jpg', 40),
      new Producto('Camarones', 'https://www.mylatinatable.com/wp-content/uploads/2019/02/camarones-4.jpg', 250),
    ];

    this.arrBebida = [
      new  Producto('Refresco', 'https://dam.cocinafacil.com.mx/wp-content/uploads/2019/01/Tips-para-dejar-refresco.jpg', 30),
      new  Producto('Agua', 'https://www.ecestaticos.com/image/clipping/fec966d8b6ed34ea169d552114bfedea/por-que-nunca-debes-rellenar-de-agua-una-botella-de-plastico.jpg', 15),
      new  Producto('Café', 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG', 20),
    ];

  }

  agregarTareaLista(tarea) {

    this.tareas.push(tarea);    
    
  }

  onProductoSeleccionado(producto: Producto) {
    
    const productoEncontrado = this.productosSeleccionados.find(productoFind => productoFind.nombre === producto.nombre);
    
    if (productoEncontrado) {
      productoEncontrado.cantidad++;
    } else {
      producto.cantidad = 1;
      this.productosSeleccionados.push(producto);
    }
    
  }


}
