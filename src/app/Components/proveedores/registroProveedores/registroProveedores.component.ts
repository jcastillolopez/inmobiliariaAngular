import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProveedoresService } from 'src/app/services/proveedores.service';
@Component({
  selector: 'app-registroProveedores',
  templateUrl: './registroProveedores.component.html',
  styleUrls: ['./registroProveedores.component.css']
})
export class RegistroProveedoresComponent implements OnInit {
  registroForm: FormGroup;
  constructor(
    private proveedoresService:ProveedoresService
  ) {
    this.registroForm = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      email: new FormControl(),
      nie: new FormControl(),
      tlf: new FormControl(),      
      tlfmovil: new FormControl(),
      localidad: new FormControl(),
      direccion: new FormControl(),
      cp: new FormControl(),
      borrado: new FormControl()
    })
   }

  ngOnInit() {
  }
  async registrarse(){
    const newProveedor = await this.proveedoresService.create(this.registroForm.value);
    console.log(newProveedor);
  }
}
