import { Component, NgModule } from '@angular/core';
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
import { RegistroUsuariosComponent } from './Components/usuarios/login/registroUsuarios/registroUsuarios.component';
import { BalanceComponent } from './Components/balance/balance.component';
import { ContratosComponent } from './Components/contratos/contratos.component';
import { TiposComponent } from './Components/tipos/tipos.component';
import { DetalleClienteComponent } from './Components/clientes/detalleCliente/detalleCliente.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: 'inicio', component: InicioComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/login', component: LoginComponent },
  { path: 'usuarios/registro', component: RegistroUsuariosComponent },
  { path: 'clientes/registro', component: RegistroClientesComponent },
  {
    path: 'clientes', component: ClientesComponent, children: [
      { path: ':idCliente', component: DetalleClienteComponent }
    ]
  },

  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'proveedores/registro', component: RegistroProveedoresComponent },
  { path: 'inmuebles', component: InmueblesComponent },
  { path: 'inmuebles/registro', component: RegistroInmuebleComponent },
  { path: 'balance', component: BalanceComponent },
  { path: 'contratos', component: ContratosComponent },
  { path: 'tipos', component: TiposComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
