import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContratosService } from 'src/app/services/contratos/contratos.service';

@Component({
  selector: 'app-registroContratos',
  templateUrl: './registroContratos.component.html',
  styleUrls: ['./registroContratos.component.css']
})
export class RegistroContratosComponent implements OnInit {

  registroForm: FormGroup;
  selectInmueble: any;
  selectTipoContrato: any;
  
  constructor(
    private activateRouter: ActivatedRoute,
    private contratosService: ContratosService

  ) {
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
      tipos_contratos_id:new FormControl()
    })
  }

  async ngOnInit() {

    this.activateRouter.params.subscribe(async params => {
      if (params['idContrato']) {
        let response = await this.contratosService.getById(params['idContrato'])
        this.registroForm.setValue(response[0])
        console.log(response)
      } 
    })
    this.selectInmueble = await this.contratosService.selectAlias(); 
    console.log(this.selectInmueble);

    this.selectTipoContrato = await this.contratosService.selectTipoContrato(); 
    console.log(this.selectTipoContrato);
  }  
    async enviar() {
      if (this.activateRouter.snapshot.params['idContrato']) {
        await this.contratosService.update(this.registroForm.value);    
      } else {
        const newContrato = await this.contratosService.create(this.registroForm.value);
        console.log(newContrato)
      }
}
} 

