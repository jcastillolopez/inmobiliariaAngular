import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as dayjs from 'dayjs';

import { IngresosServices } from 'src/app/services/balance/ingresos.services';
import { ingresoInterface } from 'src/app/interfaces/balance/ingresos.interface';

import { ContratosService } from 'src/app/services/contratos/contratos.service';
import { IntervinientesServices } from 'src/app/services/contratos/intervinientes.Service';
import { firstValueFrom } from 'rxjs';
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
  resultado: number



  constructor(
    private activateRouter: ActivatedRoute,
    private ingresoService: IngresosServices,
    private contratosService: ContratosService,
    private intervinienteService: IntervinientesServices,
  ) {
    this.selectInmueble = [];
    this.selectProveedor = [];
    this.selectInmueble = [];
    this.selectTipoConcepto = [];
    this.resultado = 0

    this.registroForm = new FormGroup({
      id: new FormControl(),
      fecha_concepto: new FormControl(new Date),
      concepto: new FormControl(),
      tipo_concepto_id: new FormControl(),
      ingreso: new FormControl(0),
      iva_porcentaje: new FormControl(21),
      gasto: new FormControl(0),
      proveedores_id: new FormControl(),
      inmuebles_id: new FormControl(),
      fecha_factura: new FormControl(new Date),
      numero_factura: new FormControl(),
      usuario_id: new FormControl(),
      create_time: new FormControl(),
      update_time: new FormControl(),
      borrado: new FormControl()
    })
  }

  async ngOnInit() {

    console.log(typeof (this.registroForm.value.gasto))
    this.selectInmueble = await this.contratosService.selectAlias();

    this.selectProveedor = await this.contratosService.selectCliente();

    this.selectTipoConcepto = await this.ingresoService.selectTipoConcepto();


    this.activateRouter.params.subscribe(async params => {
      if (params['idIngreso']) {
        let response = await this.ingresoService.getById(params['idIngreso'])
        let ingreso = response[0]
        ingreso.fecha_concepto = dayjs(ingreso.fecha_contrato).format('YYYY-MM-DD')
        ingreso.fecha_factura = dayjs(ingreso.fecha_inicio).format('YYYY-MM-DD')
        this.registroForm.setValue(ingreso)

      }
    })

  }


  async enviar() {
    if (this.activateRouter.snapshot.params['idingreso']) {
      await this.ingresoService.update(this.registroForm.value);
    } else {
      const newIngreso = await this.ingresoService.create(this.registroForm.value);

    }
  }
}
