import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.css']
})
export class TiposComponent implements OnInit {
  administrador_id: any;
  usuario_id: any;
  username:any;
  constructor() { }

  ngOnInit() {
    this.administrador_id = parseInt(sessionStorage.getItem('administrador_id'));
    this.usuario_id = parseInt(sessionStorage.getItem('usuario_id'));
    this.username =(sessionStorage.getItem('username'));
  }

}
