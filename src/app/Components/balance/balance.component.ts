import { Component, OnInit } from '@angular/core';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { inmuebleInterface } from 'src/app/interfaces/inmueble.interface';
@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  administrador_id: any;
  usuario_id: any;
  username: any;
  arrListaInmuebles:inmuebleInterface[];
  constructor(
    private inmueblesservices: InmueblesService
  ) { 
    this.arrListaInmuebles = [];
  }

 async ngOnInit() {
    this.administrador_id = parseInt(sessionStorage.getItem('administrador_id'));
    this.usuario_id = parseInt(sessionStorage.getItem('usuario_id'));
   this.username = (sessionStorage.getItem('username'));
   
   this.arrListaInmuebles = await this.inmueblesservices.getByUsuario(this.usuario_id);
  }
 
}
