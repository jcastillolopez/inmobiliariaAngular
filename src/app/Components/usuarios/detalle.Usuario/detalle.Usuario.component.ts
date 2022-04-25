import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { usuarioInterface } from 'src/app/interfaces/usuario.interface';
import { RegistroUsuariosService } from 'src/app/services/usuariosServices/registroUsuarios.service';
@Component({
  selector: 'app-detalle.Usuario',
  templateUrl: './detalle.Usuario.component.html',
  styleUrls: ['./detalle.Usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
  usuario: usuarioInterface;
  username: any;
  usuario_id: any;
  administrador_id: any;
  usuarioLogin = {};
  constructor(
    private activateRouter: ActivatedRoute,
    private usuarioService: RegistroUsuariosService,
  ) {
    this.username = "";
    this.usuario_id = 0;
    this.usuarioLogin = {};
    this.administrador_id = 0;
    this.usuario = {
      id: 0,
      email: "",
      password: "",
     rol_id:0,
    }

  }



  ngOnInit() {
    this.administrador_id = parseInt(sessionStorage.getItem('administrador_id'));
    this.usuario_id = parseInt(sessionStorage.getItem('usuario_id'));
    this.username = (sessionStorage.getItem('username'));

    this.activateRouter.params.subscribe(async params => {
      let response = await this.usuarioService.getById(params['idUsuarios'])
      console.log(response)
      this.usuario = response[0]

    })
  }

}
