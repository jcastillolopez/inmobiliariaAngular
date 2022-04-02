import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresComponent } from './Components/proveedores/proveedores.component';
import { InmueblesComponent } from './Components/inmuebles/inmuebles.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
@NgModule({
  declarations: [
    AppComponent,  
    ProveedoresComponent,
    InmueblesComponent,
    UsuariosComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
