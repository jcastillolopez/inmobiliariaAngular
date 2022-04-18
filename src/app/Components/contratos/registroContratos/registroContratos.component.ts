import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as dayjs from 'dayjs';

import { ContratosService } from 'src/app/services/contratos/contratos.service';

import { IntervinientesServices } from 'src/app/services/contratos/intervinientes.Service';
import { intervinienteInterface } from 'src/app/interfaces/contratos/intervinientes.Interface';
@Component({
  selector: 'app-registroContratos',
  templateUrl: './registroContratos.component.html',
  styleUrls: ['./registroContratos.component.css']
})
export class RegistroContratosComponent implements OnInit {

  registroForm: FormGroup;
  selectInmueble: any;
  selectTipoPeriodo: any;
  selectTipoContrato: any;
  ListaIntervinientes: intervinienteInterface[] = [];
  
  constructor(
    private activateRouter: ActivatedRoute,
    private contratosService: ContratosService,
    private intervinienteService:IntervinientesServices

  ) {
    this.selectTipoPeriodo = [];
    this.selectInmueble = [];
    this.selectTipoContrato = [];
    this.registroForm = new FormGroup({
      id: new FormControl(),
      alias: new FormControl(),
      fecha_contrato: new FormControl(),
      valor_contrato: new FormControl(),     
      borrado: new FormControl(),
      create_time: new FormControl(),
      update_time: new FormControl(),
      usuario_id: new FormControl(),
      inmuebles_id: new FormControl(),
      tipos_contratos_id: new FormControl(),
      tipo_contrato: new FormControl(),
      fecha_inicio: new FormControl(),
      fecha_fin: new FormControl(),
      tipo_periodo_id: new FormControl(),
      tipo_periodo: new FormControl(),
      cantidad_periodo: new FormControl(),
    })
  }

  async ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      let response = await this.intervinienteService.getByContrato(params['idContrato'])
      this.ListaIntervinientes = response;
      
    });


    this.activateRouter.params.subscribe(async params => {
      if (params['idContrato']) {
        let response = await this.contratosService.getById(params['idContrato'])
        let contrato = response[0]
        contrato.fecha_contrato = dayjs(contrato.fecha_contrato).format('YYYY-MM-DD')
        contrato.fecha_inicio = dayjs(contrato.fecha_inicio).format('YYYY-MM-DD')
        contrato.fecha_fin = dayjs(contrato.fecha_fin).format('YYYY-MM-DD')
        this.registroForm.setValue(contrato)
        
      } 
    })
    this.selectTipoPeriodo = await this.contratosService.selectPeriodo();    

    this.selectInmueble = await this.contratosService.selectAlias();    

    this.selectTipoContrato = await this.contratosService.selectTipoContrato(); 
    
  }  
    async enviar() {
      if (this.activateRouter.snapshot.params['idContrato']) {
        await this.contratosService.update(this.registroForm.value);    
      } else {
        const newContrato = await this.contratosService.create(this.registroForm.value);
        
      }
}
} 

