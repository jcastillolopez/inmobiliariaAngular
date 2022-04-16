import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { intervinienteInterface } from 'src/app/interfaces/contratos/intervinientes.Interface';
import { IntervinientesServices } from 'src/app/services/contratos/intervinientes.Service';


@Component({
  selector: 'app-listaIntervinientes',
  templateUrl: './listaIntervinientes.component.html',
  styleUrls: ['./listaIntervinientes.component.css']
})
export class ListaIntervinientesComponent implements OnInit {

  interviniente: intervinienteInterface

  constructor(
    private activateRouter: ActivatedRoute,
    private intervinienteServices: IntervinientesServices) {
    this.interviniente = {
      id: 0,
      contrato_id: 0,
      tipo_interviniente_id: 0,
      cliente_id: 0,
      propiedad_cantidad: 0,
      borrado: false,

    }


  }

  ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      let response = await this.intervinienteServices.getByContrato(params['idContrato'])
      this.interviniente = response[0]
      console.log(this.interviniente)
    })
  }

}
