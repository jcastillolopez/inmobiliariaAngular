import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as dayjs from 'dayjs';

import { IngresosServices } from 'src/app/services/balance/ingresos.services';
import { ingresoInterface } from 'src/app/interfaces/balance/ingresos.interface';
import { ContratosService } from 'src/app/services/contratos/contratos.service';

@Component({
  selector: 'app-registroIngresos',
  templateUrl: './registroIngresos.component.html',
  styleUrls: ['./registroIngresos.component.css']
})
export class RegistroIngresosComponent implements OnInit {

  registroForm: FormGroup;
  selectInmueble: any;
  selectProveedor: any;
  selectTipoConcepto: any;


  constructor(
    private activateRouter: ActivatedRoute,
    private ingresoService: IngresosServices,
    private contratosService:ContratosService,
  ) {
    this.selectInmueble = [];
    this.selectProveedor = [];
    this.selectInmueble = [];
    this.selectTipoConcepto = [];

    this.registroForm = new FormGroup({
      id: new FormControl(),
      fecha_concepto: new FormControl(),
      concepto: new FormControl(),
      ingreso: new FormControl(),
      gasto: new FormControl(),
      proveedores_id: new FormControl(),
      inmuebles_id: new FormControl(),
      fecha_factura: new FormControl(),
      numero_factura: new FormControl(),
      usuario_id: new FormControl(),
      create_time: new FormControl(),
      update_time: new FormControl(),

    })
  }

  async ngOnInit() {
   
    this.selectInmueble = await this.contratosService.selectAlias();

    this.selectProveedor = await this.contratosService.selectCliente(); 

    this.selectTipoConcepto = await this.contratosService.selectTipoContrato(); 
    






   }
  

  enviar(){}
}
