import { Component, OnInit } from '@angular/core';
import { InmueblesService } from 'src/app/services/inmuebles.service';
@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.css']
})
export class InmueblesComponent implements OnInit {
  arrListaInmuebles: any[];
  constructor(
    private inmueblesservices: InmueblesService) { 
    this.arrListaInmuebles = [];
    }

   async ngOnInit() {
    this.arrListaInmuebles = await this.inmueblesservices.getAll();
  }

}
