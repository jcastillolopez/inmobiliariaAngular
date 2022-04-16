import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContratosService } from 'src/app/services/contratos/contratos.service';
import { IntervinientesServices } from 'src/app/services/contratos/intervinientes.Service';


@Component({
  selector: 'app-intervinientesRegistro',
  templateUrl: './intervinientesRegistro.component.html',
  styleUrls: ['./intervinientesRegistro.component.css']
})
export class IntervinientesRegistroComponent implements OnInit {
  registroForm: FormGroup;
  selectCliente: any;  
  selectTipoInterviniente: any;

  constructor(
    private activateRouter: ActivatedRoute,
    private contratosService: ContratosService,
    private intervinienteService:IntervinientesServices
  ) {
    this.selectCliente = [];
    this.selectTipoInterviniente = [];
    this.registroForm = new FormGroup({
      id: new FormControl(),
      contrato_id: new FormControl(),
      cliente_id: new FormControl(),
      propiedad_cantidad: new FormControl(),
      tipo_interviniente_id:new FormControl(),
      borrado: new FormControl(),
      create_time: new FormControl(),
      update_time: new FormControl(),
      usuario_id: new FormControl(),
      
    })
   }

   async ngOnInit() {

    this.activateRouter.params.subscribe(async params => {
      if (params['idContrato']) {
        let response = await this.contratosService.getById(params['idContrato'])
        this.registroForm.setValue(response[0])
        
      } 
    })
    this.selectCliente = await this.contratosService.selectCliente(); 
     console.log(this.selectCliente);
     
    this.selectTipoInterviniente = await this.contratosService.selectTipoInterviniente(); 
    console.log(this.selectTipoInterviniente);
  }  
  async enviar() {
      console.log(this.registroForm.value)
      if (this.activateRouter.snapshot.params['idInterviniente']) {
        await this.intervinienteService.update(this.registroForm.value); 
        console.log(this.registroForm.value)
      } else {
        const newInterviniente = await this.intervinienteService.create(this.registroForm.value);
        console.log(newInterviniente)
      }
}
} 
