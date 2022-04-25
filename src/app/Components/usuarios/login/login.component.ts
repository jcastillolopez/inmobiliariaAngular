import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

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
  username: string;
  administrador_id: any;
  noLogin: any;

  constructor(
    private activateRouter: ActivatedRoute,
    private registroUsuariosService: RegistroUsuariosService,
    private router: Router,
  ) {
    this.username = "";
    this.usuario_id = 0;
    this.usuarioLogin = {};
    this.noLogin = "";
    this.registroForm = new FormGroup({
      email: new FormControl('', [
        Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/)]
      ),      
      password: new FormControl('', [
        Validators.pattern(/^[A-Za-z0-9!.]{3,14}$/)
      ]),
      administrador_id: new FormControl()
    })
  }

  async ngOnInit() {

  }
  async loguearse() {
    console.log(this.registroForm.valid)
    if (this.registroForm.valid) {
      const result = await this.registroUsuariosService.login(this.registroForm.value);
      console.log(result)
      this.usuarioLogin = result.data;
      this.usuario_id = result.data.usuario_id;
      this.administrador_id = result.data.administrador_id;
      console.log(this.administrador_id)
      this.username = result.data.username;
      sessionStorage.setItem('usuario_id', this.usuario_id);
      sessionStorage.setItem('administrador_id', this.administrador_id);
      sessionStorage.setItem('username', this.username);
      if (this.administrador_id ) {
        this.router.navigate(['inicio']);     
      }    this.noLogin = 'El login no es correcto'   
    }
  
  }
    checkError(fieldName: string, errorType: string) {
      return this.registroForm.get(fieldName).hasError(errorType) && this.registroForm.get(fieldName).touched
    
  }

}