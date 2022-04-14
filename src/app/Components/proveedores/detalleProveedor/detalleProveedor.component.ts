import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { proveedorInterface } from 'src/app/interfaces/proveedores.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalleProveedor',
  templateUrl: './detalleProveedor.component.html',
  styleUrls: ['./detalleProveedor.component.css']
})
  
  
export class DetalleProveedorComponent implements OnInit {

  proveedor:proveedorInterface

  constructor(
    private activateRouter: ActivatedRoute,
    private proveedorService: ProveedoresService) {
      this.proveedor = {
        nombre: "",
        apellidos: "",        
        nie: "",
        email: "",
        tlf: "",
        tlf_movil: "",
        localidad: "",
        direccion: "",
        cp: "",
        borrado: false,
        id: 0,         
      }
    
     }

  ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      let response = await this.proveedorService.getById(params['idProveedor'])
      this.proveedor = response[0]
      console.log (response)

    })
  }

}
