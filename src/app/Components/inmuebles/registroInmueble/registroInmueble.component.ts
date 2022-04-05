import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-registroInmueble',
  templateUrl: './registroInmueble.component.html',
  styleUrls: ['./registroInmueble.component.css']
})
export class RegistroInmuebleComponent implements OnInit {
  registroForm: FormGroup;
  constructor() {
    this.registroForm = new FormGroup({
      alias: new FormControl,      
      refcatastral: new FormControl,
      localidad: new FormControl,
      direccion: new FormControl,
      cp: new FormControl,
     
      })
   }

  ngOnInit() {
  }
  registrarse(){
  
  }
}
