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
import { RegistroUsuariosComponent } from './Components/usuarios/registroUsuarios/registroUsuarios.component';
import { TiposComponent } from './Components/tipos/tipos.component';
import { BalanceComponent } from './Components/balance/balance.component';
import { ContratosComponent } from './Components/contratos/contratos.component';
import { DetalleClienteComponent } from './Components/clientes/detalleCliente/detalleCliente.component';
import { DetalleInmuebleComponent } from './Components/inmuebles/detalleInmueble/detalleInmueble.component';
import { DetalleProveedorComponent } from './Components/proveedores/detalleProveedor/detalleProveedor.component';
import { DetalleContratoComponent } from './Components/contratos/detalleContrato/detalleContrato.component';
import { RegistroContratosComponent } from './Components/contratos/registroContratos/registroContratos.component';
import { RolesComponent } from './Components/tipos/roles/roles.component';
import { Tipos_contratoComponent } from './Components/tipos/tipos_contrato/tipos_contrato.component';
import { Tipos_duracionComponent } from './Components/tipos/tipos_duracion/tipos_duracion.component';
import { Tipos_intervinienteComponent } from './Components/tipos/tipos_interviniente/tipos_interviniente.component';
import { DetalleUsuarioComponent } from './Components/usuarios/detalle.Usuario/detalle.Usuario.component';
import { IntervinientesRegistroComponent } from './Components/contratos/registroContratos/intervinientesRegistro/intervinientesRegistro.component';

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
    RegistroClientesComponent,
    TiposComponent,
    BalanceComponent,
    ContratosComponent,
    DetalleClienteComponent,
    DetalleInmuebleComponent,
    DetalleProveedorComponent,
    DetalleContratoComponent,
    RegistroContratosComponent,
    RolesComponent,
    Tipos_contratoComponent,
    Tipos_duracionComponent,
    Tipos_intervinienteComponent,
    DetalleUsuarioComponent,
    IntervinientesRegistroComponent
    

    
  
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
