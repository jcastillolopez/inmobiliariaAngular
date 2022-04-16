import { Component, OnInit } from '@angular/core';
import { contratoInterface } from 'src/app/interfaces/contratos/contratos.interface';
import { ContratosService } from 'src/app/services/contratos/contratos.service';
@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {
  arrListaContratos: contratoInterface[];
  
 

  constructor(
    private contratosService: ContratosService) { 
    this.arrListaContratos = [];
   
   
    }

  async ngOnInit() {   
    this.arrListaContratos = await this.contratosService.getAll(); 
    console.log(this.arrListaContratos);
   
   
   }

}
