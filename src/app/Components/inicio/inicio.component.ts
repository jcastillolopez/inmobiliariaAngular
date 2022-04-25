import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  administrador_id: any;
  usuario_id: any;
  username:any;
  constructor(
    private router:Router
  ) {
   
 }

  ngOnInit() {
    this.administrador_id = parseInt(sessionStorage.getItem('administrador_id'));
    this.usuario_id = parseInt(sessionStorage.getItem('usuario_id'));
    this.username =(sessionStorage.getItem('username'));
   
  } 
 
}
