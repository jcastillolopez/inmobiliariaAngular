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
import { LoginComponent } from './Components/usuarios/login/login.component';
import { RegistroClientesComponent } from './Components/clientes/registroClientes/registroClientes.component';
import { RegistroProveedoresComponent } from './Components/proveedores/registroProveedores/registroProveedores.component';
import { RegistroInmuebleComponent } from './Components/inmuebles/registroInmueble/registroInmueble.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { RegistroUsuariosComponent } from './Components/registroUsuarios/registroUsuarios.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProveedoresComponent,
    RegistroProveedoresComponent,
    InmueblesComponent,
    RegistroInmuebleComponent,    
    UsuariosComponent,
    LoginComponent,
    RegistroUsuariosComponent,   
    ClientesComponent,
    RegistroClientesComponent  
  
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
