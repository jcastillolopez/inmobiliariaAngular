import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegistroUsuariosService } from '../../../services/usuariosServices/registroUsuarios.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-registroUsuarios',
  templateUrl: './registroUsuarios.component.html',
  styleUrls: ['./registroUsuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {
  registroForm: FormGroup;
  selectRol: any;
  administrador_id: number;
  usuario_id: any;
  username: any;
  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private registroUsuariosService: RegistroUsuariosService,

  ) {
    this.selectRol = [];
    this.registroForm = new FormGroup({
      id: new FormControl(),
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      rol: new FormControl(),
      rol_id: new FormControl(),
      borrado: new FormControl(),
      create_time: new FormControl(new Date),
      update_time: new FormControl(new Date),
      administrador_id: new FormControl(parseInt(sessionStorage.getItem('administrador_id'))),
      repite_password: new FormControl(''),
    });
  }

  async ngOnInit() {
    this.administrador_id = parseInt(sessionStorage.getItem('administrador_id'));
    this.usuario_id = parseInt(sessionStorage.getItem('usuario_id'));
    this.username = (sessionStorage.getItem('username'));
    this.selectRol = await this.registroUsuariosService.selectRol();

    this.activateRouter.params.subscribe(async params => {
      if (params['idUsuario']) {
        let response = await this.registroUsuariosService.getById(params['idUsuario'])
        this.registroForm.patchValue(response[0])

      }
    })

  }

  async registrarse() {
    if (this.activateRouter.snapshot.params['idUsuario']) {
      return await this.registroUsuariosService.update(this.registroForm.value);

    }

    if (this.registroForm.value.password === this.registroForm.value.repite_password) {
      const newUsuario = await this.registroUsuariosService.create(this.registroForm.value);
    } else {


    }

  }
}

