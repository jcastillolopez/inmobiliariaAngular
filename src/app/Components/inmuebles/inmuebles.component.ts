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
  
  constructor(
    private inmueblesservices: InmueblesService) { 
    this.arrListaInmuebles = [];
    }

  async ngOnInit() {

    let usuario_id = JSON.parse(sessionStorage.getItem('usuario_id'));
   
    this.arrListaInmuebles = await this.inmueblesservices.getByUsuario(usuario_id);
    console.log(this.arrListaInmuebles)

 

  }
  
}
