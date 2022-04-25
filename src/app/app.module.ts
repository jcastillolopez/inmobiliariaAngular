import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { InmueblesComponent } from './Components/inmuebles/inmuebles.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { LoginComponent } from './Components/usuarios/login/login.component';
import { RegistroClientesComponent } from './Components/clientes/registroClientes/registroClientes.component';

import { RegistroInmuebleComponent } from './Components/inmuebles/registroInmueble/registroInmueble.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { RegistroUsuariosComponent } from './Components/usuarios/registroUsuarios/registroUsuarios.component';
import { TiposComponent } from './Components/tipos/tipos.component';
import { BalanceComponent } from './Components/balance/balance.component';
import { ContratosComponent } from './Components/contratos/contratos.component';
import { DetalleClienteComponent } from './Components/clientes/detalleCliente/detalleCliente.component';
import { DetalleInmuebleComponent } from './Components/inmuebles/detalleInmueble/detalleInmueble.component';

import { DetalleContratoComponent } from './Components/contratos/detalleContrato/detalleContrato.component';
import { RegistroContratosComponent } from './Components/contratos/registroContratos/registroContratos.component';
import { RolesComponent } from './Components/tipos/roles/roles.component';
import { Tipos_contratoComponent } from './Components/tipos/tipos_contrato/tipos_contrato.component';
import { Tipos_duracionComponent } from './Components/tipos/tipos_duracion/tipos_duracion.component';
import { Tipos_intervinienteComponent } from './Components/tipos/tipos_interviniente/tipos_interviniente.component';
import { DetalleUsuarioComponent } from './Components/usuarios/detalle.Usuario/detalle.Usuario.component';
import { IntervinientesRegistroComponent } from './Components/contratos/registroContratos/intervinientesRegistro/intervinientesRegistro.component';
import { Ingresos_gastosComponent } from './Components/balance/ingresos_gastos/ingresos_gastos.component';
import { RegistroIngresosComponent } from './Components/balance/ingresos_gastos/registroIngresos/registroIngresos.component';
import { DetalleIngresoComponent } from './Components/balance/ingresos_gastos/detalleIngreso/detalleIngreso.component';
import { AdministradoresComponent } from './Components/usuarios/administradores/administradores.component';
import { Publi_logoComponent } from './Components/publi_logo/publi_logo.component';
import { RegistroDetalleIngresoComponent } from './Components/balance/ingresos_gastos/registroIngresos/registroDetalleIngreso/registroDetalleIngreso.component';
import { InicioexplicacionesComponent } from './Components/inicio/explicaciones/inicio.explicaciones/inicio.explicaciones.component';
import { UsuariosexplicacionesComponent } from './Components/inicio/explicaciones/usuarios.explicaciones/usuarios.explicaciones.component';
import { EntidadesExplicacionesComponent } from './Components/inicio/explicaciones/entidadesExplicaciones/entidadesExplicaciones.component';
import { InmueblesExplicacionesComponent } from './Components/inicio/explicaciones/InmueblesExplicaciones/InmueblesExplicaciones.component';
import { ContratosExplicacionesComponent } from './Components/inicio/explicaciones/contratosExplicaciones/contratosExplicaciones.component';
import { BalanceExplicacionesComponent } from './Components/inicio/explicaciones/balanceExplicaciones/balanceExplicaciones.component';
import { TiposEsplicacionesComponent } from './Components/inicio/explicaciones/tiposEsplicaciones/tiposEsplicaciones.component';

@NgModule({
  declarations: [	
    AppComponent,   
    InicioComponent,
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
    DetalleContratoComponent,
    RegistroContratosComponent,
    RolesComponent,
    Tipos_contratoComponent,
    Tipos_duracionComponent,
    Tipos_intervinienteComponent,
    DetalleUsuarioComponent,
    IntervinientesRegistroComponent,
    Ingresos_gastosComponent,
    RegistroIngresosComponent,
    DetalleIngresoComponent,
    AdministradoresComponent,
    Publi_logoComponent,
    RegistroDetalleIngresoComponent,
    InicioexplicacionesComponent,
    UsuariosexplicacionesComponent,
    EntidadesExplicacionesComponent,
    InmueblesExplicacionesComponent,
    ContratosExplicacionesComponent,
    BalanceExplicacionesComponent,
      TiposEsplicacionesComponent
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
