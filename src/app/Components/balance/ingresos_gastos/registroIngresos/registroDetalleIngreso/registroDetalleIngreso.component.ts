import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as dayjs from 'dayjs';

import { IngresosServices } from 'src/app/services/balance/ingresos.services';
import { ingresoDetalleInterface } from 'src/app/interfaces/balance/ingresos.interface';

import { ContratosService } from 'src/app/services/contratos/contratos.service';
import { IntervinientesServices } from 'src/app/services/contratos/intervinientes.Service';

@Component({
  selector: 'app-registroDetalleIngreso',
  templateUrl: './registroDetalleIngreso.component.html',
  styleUrls: ['./registroDetalleIngreso.component.css']
})
export class RegistroDetalleIngresoComponent implements OnInit {
  registroForm: FormGroup;

  constructor() { 
    this.registroForm = new FormGroup({
      id: new FormControl(),    
      concepto_detalle: new FormControl(),     
      base_imponible: new FormControl(),
      impIVa: new FormControl(),     
      usuario_id: new FormControl(),
      create_time: new FormControl(),
      update_time: new FormControl(),
      borrado: new FormControl()
    })
  }

  ngOnInit() {
  }

}
