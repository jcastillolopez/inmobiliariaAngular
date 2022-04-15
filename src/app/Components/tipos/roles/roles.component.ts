import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/services/TiposServices/RolesService';
import {rolInterface} from 'src/app/interfaces/tiposInterfaces/rolInterface'

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  arrListaTiposRol: rolInterface[];
  constructor(
    private rolService: RolesService) { 
    this.arrListaTiposRol = []
    }

  async ngOnInit() {
    this.arrListaTiposRol = await this.rolService.getAll();
    console.log(this.arrListaTiposRol);
  };

}
