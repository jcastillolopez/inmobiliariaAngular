import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup;

  constructor() {
    this.registroForm = new FormGroup({
      nombre: new FormControl,
      username: new FormControl,
      email: new FormControl,
      password: new FormControl,
      repitePassword:new FormControl      
    })
   }

  ngOnInit() {
  }
  registrarse(){
  
}
}
