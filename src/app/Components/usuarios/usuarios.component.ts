import { Component, OnInit } from '@angular/core';
import { RegistroUsuariosService } from '../../services/registroUsuarios.service';
import { usuarioInterface } from '../../interfaces/interface_usuario'
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  arrListaUsuarios: usuarioInterface[];

  constructor(
    private usuariosService: RegistroUsuariosService
  ) { this.arrListaUsuarios = [] }

  async ngOnInit() {
    this.arrListaUsuarios = await this.usuariosService.getAll();

  };
}



