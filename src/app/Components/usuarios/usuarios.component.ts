import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RegistroUsuariosService } from '../../services/usuariosServices/registroUsuarios.service';
import { usuarioInterface } from '../../interfaces/usuario.interface'
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  arrListaUsuarios: usuarioInterface[];
  administrador_id: number;
  usuario_id: any;
  username:any;
  constructor(
    private usuariosService: RegistroUsuariosService,
    private activateRouter: ActivatedRoute
  ) {
    this.arrListaUsuarios = []
  }

  async ngOnInit() {
    this.administrador_id = parseInt(sessionStorage.getItem('administrador_id'));
    this.usuario_id = parseInt(sessionStorage.getItem('usuario_id'));
    this.username = (sessionStorage.getItem('username'));
    
    this.activateRouter.params.subscribe(async params => {
     /* let response = await this.usuariosService.getByCreator(params['administrador_id'])
      console.log( this.administrador_id)
      console.log(this.arrListaUsuarios)
      console.log( params)
      this.arrListaUsuarios = response[0]*/
      this.arrListaUsuarios = await this.usuariosService.getAll();
    })

  };
}



