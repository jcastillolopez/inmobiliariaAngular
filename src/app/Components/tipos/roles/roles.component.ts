import { Component, OnInit } from '@angular/core';
import { TiposService } from 'src/app/services/tipos.service';
import { tipoInterface } from 'src/app/interfaces/interface.tipo';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  arrListaTiposRol: tipoInterface[];
  constructor(
    private TiposService: TiposService) { 
    this.arrListaTiposRol = []
    }

  async ngOnInit() {
    this.arrListaTiposRol = await this.TiposService.getAll();
  };

}
