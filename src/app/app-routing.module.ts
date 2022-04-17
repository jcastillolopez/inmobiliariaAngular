import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesComponent } from './Components/clientes/clientes.component';
import { InmueblesComponent } from './Components/inmuebles/inmuebles.component';
import { RegistroInmuebleComponent } from './Components/inmuebles/registroInmueble/registroInmueble.component';
import { ProveedoresComponent } from './Components/proveedores/proveedores.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { LoginComponent } from './Components/usuarios/login/login.component';
import { RegistroClientesComponent } from './Components/clientes/registroClientes/registroClientes.component';
import { RegistroProveedoresComponent } from './Components/proveedores/registroProveedores/registroProveedores.component';
import { RegistroUsuariosComponent } from './Components/usuarios/registroUsuarios/registroUsuarios.component';
import { BalanceComponent } from './Components/balance/balance.component';
import { ContratosComponent } from './Components/contratos/contratos.component';
import { TiposComponent } from './Components/tipos/tipos.component';
import { DetalleClienteComponent } from './Components/clientes/detalleCliente/detalleCliente.component';
import { DetalleInmuebleComponent } from './Components/inmuebles/detalleInmueble/detalleInmueble.component';
import { DetalleProveedorComponent } from './Components/proveedores/detalleProveedor/detalleProveedor.component';
import { RegistroContratosComponent } from './Components/contratos/registroContratos/registroContratos.component';
import { DetalleContratoComponent } from './Components/contratos/detalleContrato/detalleContrato.component';
import { RolesComponent } from './Components/tipos/roles/roles.component';
import { Tipos_contratoComponent } from './Components/tipos/tipos_contrato/tipos_contrato.component';
import { Tipos_intervinienteComponent } from './Components/tipos/tipos_interviniente/tipos_interviniente.component';
import { Tipos_duracionComponent } from './Components/tipos/tipos_duracion/tipos_duracion.component';
import { DetalleUsuarioComponent } from './Components/usuarios/detalle.Usuario/detalle.Usuario.component';
import { RegistroRolComponent } from './Components/tipos/roles/registroRol/registroRol.component';
import { IntervinientesRegistroComponent } from './Components/contratos/registroContratos/intervinientesRegistro/intervinientesRegistro.component';
import { ListaIntervinientesComponent } from './Components/contratos/registroContratos/intervinientesContrato/listaIntervinientes/listaIntervinientes.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: 'inicio', component: InicioComponent },

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

  { path: 'proveedores/registro', component: RegistroProveedoresComponent },
  { path: 'proveedores/modificar/:idProveedor', component: RegistroProveedoresComponent },
  {
    path: 'proveedores', component: ProveedoresComponent, children: [
      { path: ':idProveedor', component: DetalleProveedorComponent }]
  },

  { path: 'balance', component: BalanceComponent },

  {
    path: 'contratos/registro', component: RegistroContratosComponent, 
  },
  {
    path: 'contratos/modificar/:idContrato', component: RegistroContratosComponent, children: [
      {
        path: 'intervinientes/modificar/:idContrato', component: IntervinientesRegistroComponent
      }]
  },
  {
    path: 'contratos', component: ContratosComponent, children: [
      { path: ':idContrato', component: DetalleContratoComponent }    
           ] },     

  {
    path: 'intervinientes/registro', component: IntervinientesRegistroComponent, children: [
     
        {path: 'intervinientes/registro', component: ListaIntervinientesComponent}
    ] },
   
   
  {
    path: 'tipos', component: TiposComponent, children: [
      { path: 'rol/registro', component: RegistroRolComponent },
      { path: 'rol', component: RolesComponent },
      { path: 'contrato', component: Tipos_contratoComponent },
      { path: 'interviniente', component: Tipos_intervinienteComponent },
      { path: 'duracion', component: Tipos_duracionComponent },]
  },

  { path: '**', pathMatch: 'full', redirectTo: '/inicio' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

