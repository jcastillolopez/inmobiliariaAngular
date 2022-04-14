import { Component, OnInit } from '@angular/core';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { inmuebleInterface } from 'src/app/interfaces/inmueble.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalleInmueble',
  templateUrl: './detalleInmueble.component.html',
  styleUrls: ['./detalleInmueble.component.css']
})
export class DetalleInmuebleComponent implements OnInit {
  inmueble: inmuebleInterface
  
  constructor(
    private inmuebleService: InmueblesService,
    private activateRouter: ActivatedRoute) { 
    
      this.inmueble = {
        alias: "",       
        refcatastral: "",       
        localidad: "",
        direccion: "",
        cp: "",
        borrado: false,
        id: 0,
        
      }   
    
    }

  ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      let response = await this.inmuebleService.getById(params['idInmueble'])
      this.inmueble = response[0]
console.log(this.inmueble)
    })
  }

}
