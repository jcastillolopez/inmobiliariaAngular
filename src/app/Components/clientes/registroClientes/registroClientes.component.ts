import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-registroClientes',
  templateUrl: './registroClientes.component.html',
  styleUrls: ['./registroClientes.component.css']
})
export class RegistroClientesComponent implements OnInit {
  registroForm: FormGroup;
  constructor() {
    this.registroForm = new FormGroup({
      nombre: new FormControl,
      apellidos: new FormControl,
      email: new FormControl,
      nie: new FormControl,
      tlf: new FormControl,      
      tlfmovil: new FormControl,
      localidad: new FormControl,
      direccion: new FormControl,
      cp: new FormControl,
      borrado: new FormControl
      })
  
   }

  ngOnInit() {
  }
  registrarse(){
  
  }
}
