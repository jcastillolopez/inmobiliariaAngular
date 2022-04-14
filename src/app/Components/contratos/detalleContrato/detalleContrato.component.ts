import { Component, OnInit } from '@angular/core';
import { ContratosService } from 'src/app/services/contratos.service';
import { contratoInterface } from 'src/app/interfaces/contratos.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalleContrato',
  templateUrl: './detalleContrato.component.html',
  styleUrls: ['./detalleContrato.component.css']
})
  
export class DetalleContratoComponent implements OnInit {

  contrato: contratoInterface

  constructor(
    private activateRouter: ActivatedRoute,
    private contratoService: ContratosService) { 
    
    this.contrato = {
        id: 0,
        alias: "",       
        fecha_contrato: new Date(),
        valor_contrato: 0,
        tipos_contratos_id: 0,
      borrado: false,
      tipo_contrato: "",
       
       
      }
    }

  ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      let response = await this.contratoService.getById(params['idContrato'])
      this.contrato = response[0]
      console.log(this.contrato)
    })
  }

}
