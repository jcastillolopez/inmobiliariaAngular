import { Component, OnInit } from '@angular/core';

import { InmueblesService } from 'src/app/services/inmuebles.service';
import { inmuebleInterface } from 'src/app/interfaces/inmueble.interface';
@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.css']
})
export class InmueblesComponent implements OnInit {
  arrListaInmuebles:inmuebleInterface[];
  administrador_id: any;
  usuario_id: any;
  username:any;
  constructor(
    private inmueblesservices: InmueblesService) { 
    this.arrListaInmuebles = [];
    }

  async ngOnInit() {
    this.administrador_id = parseInt(sessionStorage.getItem('administrador_id'));
    this.usuario_id = parseInt(sessionStorage.getItem('usuario_id'));
    this.username = (sessionStorage.getItem('username'));
    
   
   
    this.arrListaInmuebles = await this.inmueblesservices.getByUsuario(this.usuario_id);
    console.log(this.arrListaInmuebles)

 

  }
  
}
