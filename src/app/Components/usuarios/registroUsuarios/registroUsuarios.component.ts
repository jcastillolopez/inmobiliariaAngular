import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegistroUsuariosService } from '../../../services/usuariosServices/registroUsuarios.service';
import { rolInterface } from 'src/app/interfaces/tiposInterfaces/rolInterface';
import { ActivatedRoute,Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-registroUsuarios',
  templateUrl: './registroUsuarios.component.html',
  styleUrls: ['./registroUsuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {
  registroForm: FormGroup;
  selectRol: any;

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private registroUsuariosService: RegistroUsuariosService,

  ) {
    this.selectRol = [];
    this.registroForm = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      repite_password: new FormControl(),
      rol: new FormControl(),
      Roles_id :new FormControl(),

    });
  }

 async ngOnInit() {
   this.selectRol = await this.registroUsuariosService.selectRol();    

 }
  
  async registrarse() {
    if (this.registroForm.value.password !== this.registroForm.value.repite_password) {
     console.log('no es valido')
    } else {  
      const newUsuario = await this.registroUsuariosService.create(this.registroForm.value);
      console.log(newUsuario);
    }
      
    }
  }

