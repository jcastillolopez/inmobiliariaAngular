import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContratosService } from 'src/app/services/contratos/contratos.service';
import { contratoInterface } from 'src/app/interfaces/contratos/contratos.interface';

import { IntervinientesServices } from 'src/app/services/contratos/intervinientes.Service';
import { intervinienteInterface } from 'src/app/interfaces/contratos/intervinientes.Interface';
@Component({
  selector: 'app-detalleContrato',
  templateUrl: './detalleContrato.component.html',
  styleUrls: ['./detalleContrato.component.css']
})

export class DetalleContratoComponent implements OnInit {

  contrato: contratoInterface;
  ListaIntervinientes: intervinienteInterface[]=[];
  
  constructor(
    private activateRouter: ActivatedRoute,
    private contratoService: ContratosService,
    private intervinienteservice: IntervinientesServices) {

    this.contrato = {
      id: 0,
      alias: "",
      fecha_contrato: new Date(),
      valor_contrato: 0,
      tipos_contratos_id: 0,
      borrado: false,
      tipo_contrato: "",
    };
  }

  ngOnInit() {

    this.activateRouter.params.subscribe(async params => {
      let response = await this.intervinienteservice.getByContrato(params['idContrato'])
      this.ListaIntervinientes = response;
      console.log(this.ListaIntervinientes)
    })

    this.activateRouter.params.subscribe(async params => {
      let response = await this.contratoService.getById(params['idContrato'])
      this.contrato = response[0]

    })
  }

}
