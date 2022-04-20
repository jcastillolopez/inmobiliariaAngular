import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesComponent } from './Components/clientes/clientes.component';
import { InmueblesComponent } from './Components/inmuebles/inmuebles.component';
import { RegistroInmuebleComponent } from './Components/inmuebles/registroInmueble/registroInmueble.component';

import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { LoginComponent } from './Components/usuarios/login/login.component';
import { RegistroClientesComponent } from './Components/clientes/registroClientes/registroClientes.component';
import { RegistroUsuariosComponent } from './Components/usuarios/registroUsuarios/registroUsuarios.component';
import { BalanceComponent } from './Components/balance/balance.component';
import { ContratosComponent } from './Components/contratos/contratos.component';
import { TiposComponent } from './Components/tipos/tipos.component';
import { DetalleClienteComponent } from './Components/clientes/detalleCliente/detalleCliente.component';
import { DetalleInmuebleComponent } from './Components/inmuebles/detalleInmueble/detalleInmueble.component';

import { RegistroContratosComponent } from './Components/contratos/registroContratos/registroContratos.component';
import { DetalleContratoComponent } from './Components/contratos/detalleContrato/detalleContrato.component';
import { RolesComponent } from './Components/tipos/roles/roles.component';
import { Tipos_contratoComponent } from './Components/tipos/tipos_contrato/tipos_contrato.component';
import { Tipos_intervinienteComponent } from './Components/tipos/tipos_interviniente/tipos_interviniente.component';
import { Tipos_duracionComponent } from './Components/tipos/tipos_duracion/tipos_duracion.component';
import { DetalleUsuarioComponent } from './Components/usuarios/detalle.Usuario/detalle.Usuario.component';
import { RegistroRolComponent } from './Components/tipos/roles/registroRol/registroRol.component';
import { IntervinientesRegistroComponent } from './Components/contratos/registroContratos/intervinientesRegistro/intervinientesRegistro.component';

import { RegistroIngresosComponent } from './Components/balance/ingresos_gastos/registroIngresos/registroIngresos.component';
import { DetalleIngresoComponent } from './Components/balance/ingresos_gastos/detalleIngreso/detalleIngreso.component';
import { AdministradoresComponent } from './Components/usuarios/administradores/administradores.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '', children: [
      { path: 'administradores/registro', component : AdministradoresComponent},
  ]},
  { path: 'inicio', component: InicioComponent },
  { path: 'administradores/registro', component : AdministradoresComponent},
  
  { path: 'usuarios/registro', component: RegistroUsuariosComponent },
  { path: 'usuarios/login', component: LoginComponent },
  {
    path: 'usuarios', component: UsuariosComponent, children: [
      { path: 'idUsuarios', component: DetalleUsuarioComponent }]
  },

  { path: 'clientes/registro', component: RegistroClientesComponent },
  { path: 'clientes/modificar/:idCliente', component: RegistroClientesComponent },
  {
    path: 'clientes', component: ClientesComponent, children: [
      { path: ':idCliente', component: DetalleClienteComponent }]
  },

  { path: 'inmuebles/registro', component: RegistroInmuebleComponent },
  { path: 'inmuebles/modificar/:idInmueble', component: RegistroInmuebleComponent },
  {
    path: 'inmuebles', component: InmueblesComponent, children: [
      { path: ':idInmueble', component: DetalleInmuebleComponent }]
  },

  { path: 'balance', component: BalanceComponent },
  { path: 'ingresos/registro', component: RegistroIngresosComponent },
  { path: 'ingresos/detalle', component: DetalleIngresoComponent },

  {
    path: 'contratos/registro', component: RegistroContratosComponent,
  },
  {
    path: 'contratos/modificar/:idContrato', component: RegistroContratosComponent
  },
  {
    path: 'contratos', component: ContratosComponent, children: [
      { path: ':idContrato', component: DetalleContratoComponent }
    ]
  },

  {
    path: 'intervinientes/registro/:idInterviniente', component: IntervinientesRegistroComponent
  },

  {
    path: 'tipos', component: TiposComponent, children: [
      { path: 'rol/registro', component: RegistroRolComponent },
      { path: 'rol', component: RolesComponent },
      { path: 'contrato', component: Tipos_contratoComponent },
      { path: 'interviniente', component: Tipos_intervinienteComponent },
      { path: 'duracion', component: Tipos_duracionComponent },]
  },

  { path: '**', pathMatch: 'full', redirectTo: '/' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

