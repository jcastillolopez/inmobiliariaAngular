import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { clienteInterface } from 'src/app/interfaces/cliente_interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalleCliente',
  templateUrl: './detalleCliente.component.html',
  styleUrls: ['./detalleCliente.component.css']
})


export class DetalleClienteComponent implements OnInit {

  cliente: clienteInterface

  constructor(
    private clienteService: ClientesService,
    private activateRouter: ActivatedRoute) {

    this.cliente = {
      nombre: "",
      apellidos: "",
      fecha_nacimiento: new Date(),
      nie: "",
      email: "",
      tlf: "",
      tlf_movil: "",
      localidad: "",
      direccion: "",
      cp: "",
      borrado: false
    }
  }

  ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      let response = await this.clienteService.getById(params['idCliente'])
      this.cliente = response[0]

    })

  }

}
