import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { RegistroUsuariosService } from 'src/app/services/usuariosServices/registroUsuarios.service';
@Component({
  selector: 'app-registro',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registroForm: FormGroup;
  usuarioLogin: any;
  usuario_id: any;
  administrador_id: any;

  constructor(
    private activateRouter: ActivatedRoute,
    private registroUsuariosService: RegistroUsuariosService,
  ) {
    this.usuario_id = {};
    this.usuarioLogin = {};
    this.registroForm = new FormGroup({
      email: new FormControl('', [
        Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/)]
              ),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      password: new FormControl('', [
        Validators.pattern(/^[A-Za-z0-9!.]{3,14}$/)
      ]),
      administrador_id: new FormControl()

    })
  }

  async ngOnInit() {

  }
  async loguearse() {

    const result = await this.registroUsuariosService.login(this.registroForm.value);
    console.log(result)
    this.usuarioLogin = result.data;
    this.usuario_id = result.data.usuario_id;
    this.administrador_id = result.data.administrador_id;
    sessionStorage.setItem('usuario_id', JSON.stringify(this.usuario_id));
    sessionStorage.setItem('administrador_id', JSON.stringify(this.administrador_id));
  }
  checkError(fieldName: string, errorType: string) {
    return this.registroForm.get(fieldName).hasError(errorType) && this.registroForm.get(fieldName).touched
  }
}

