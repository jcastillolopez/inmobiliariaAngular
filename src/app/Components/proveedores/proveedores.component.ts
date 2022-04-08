import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  arrListaProveedores: any[];
  constructor(
    private proveedoresService: ProveedoresService) { 
    this.arrListaProveedores = [];
   }
   async ngOnInit() {
    this.arrListaProveedores = await this.proveedoresService.getAll();
};

}
