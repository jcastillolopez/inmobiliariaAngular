import { Component, OnInit } from '@angular/core';
import { IngresosServices } from 'src/app/services/balance/ingresos.services';
import { ingresoInterface } from 'src/app/interfaces/balance/ingresos.interface';

@Component({
  selector: 'app-ingresos_gastos',
  templateUrl: './ingresos_gastos.component.html',
  styleUrls: ['./ingresos_gastos.component.css']
})
export class Ingresos_gastosComponent implements OnInit {

  

  constructor(
    private ingresosService: IngresosServices) { 
    
    }

  ngOnInit() {
  }

}
