import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { FormularioComponent } from './ejercicioTo-do/formulario/formulario.component';
import { ListaComponent } from './ejercicioTo-do/lista/lista.component';
import { InicioComponent } from './ejercicioTo-do/inicio/inicio.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { ListaProductosComponent } from './components/ejercicioCajaRegistradora/lista-productos/lista-productos.component';
import { ComandaComponent } from './components/ejercicioCajaRegistradora/comanda/comanda.component';
import { SubrayadoDirective } from './directivas/subrayado.directive';
import { FormularioComprasComponent } from './ejercicioListaDeLaCompra/formulario-compras/formulario-compras.component';
import { ListaProductosComprasComponent } from './ejercicioListaDeLaCompra/lista-productos-compras/lista-productos-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    NgForComponent,
    FormularioComponent,
    ListaComponent,
    InicioComponent,
    NgSwitchComponent,
    ListaProductosComponent,
    ComandaComponent,
    SubrayadoDirective,
    FormularioComprasComponent,
    ListaProductosComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
