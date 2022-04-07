import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InmueblesService } from 'src/app/services/inmuebles.service';
@Component({
  selector: 'app-registroInmueble',
  templateUrl: './registroInmueble.component.html',
  styleUrls: ['./registroInmueble.component.css']
})
export class RegistroInmuebleComponent implements OnInit {

  registroForm: FormGroup;

  constructor(private inmueblesService: InmueblesService) {
    
    this.registroForm = new FormGroup({
      alias: new FormControl(),      
      refcatastral: new FormControl(),
      localidad: new FormControl(),
      direccion: new FormControl(),
      cp: new FormControl(),
      })
   }

  ngOnInit() {
  }
  
  async registrarse(){
    const newInmueble = await this.inmueblesService.create(this.registroForm.value);
    console.log(newInmueble);
  }
}
