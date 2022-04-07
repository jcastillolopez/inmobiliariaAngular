import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
@Component({
  selector: 'app-registroClientes',
  templateUrl: './registroClientes.component.html',
  styleUrls: ['./registroClientes.component.css']
})
export class RegistroClientesComponent implements OnInit {

  registroForm: FormGroup;

  constructor(private clientesService: ClientesService) {
    this.registroForm = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      email: new FormControl(),
      nie: new FormControl(),
      fecha_nacimiento: new FormControl(),
      tlf: new FormControl(),
      tlfmovil: new FormControl(),
      localidad: new FormControl(),
      direccion: new FormControl(),
      cp: new FormControl()
    });

  }

  ngOnInit() {
  }
  async registrarse() {
    const newCliente = await this.clientesService.create(this.registroForm.value);
    console.log(newCliente);
  }
}
