import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { InmueblesComponent } from './Components/inmuebles/inmuebles.component';
import { ProveedoresComponent } from './Components/proveedores/proveedores.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/usuarios' },
  { path: 'clientes', component: ClientesComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'inmuebles', component: InmueblesComponent },
  { path: 'usuarios', component: UsuariosComponent},
  { path: '', pathMatch: 'full', redirectTo: '/usuarios' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
