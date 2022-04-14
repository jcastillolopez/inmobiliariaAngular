import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegistroUsuariosService } from '../../../services/registroUsuarios.service';

@Component({
  selector: 'app-registroUsuarios',
  templateUrl: './registroUsuarios.component.html',
  styleUrls: ['./registroUsuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {
  registroForm: FormGroup;
  constructor(
    private registroUsuariosService: RegistroUsuariosService) {
    this.registroForm = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),

    });
  }

  ngOnInit() {
  }
  async registrarse() {
    const newUsuario = await this.registroUsuariosService.create(this.registroForm.value);
    console.log(newUsuario);
  }
}
