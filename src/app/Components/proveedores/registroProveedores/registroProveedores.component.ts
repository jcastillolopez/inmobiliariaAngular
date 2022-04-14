import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registroProveedores',
  templateUrl: './registroProveedores.component.html',
  styleUrls: ['./registroProveedores.component.css']
})
export class RegistroProveedoresComponent implements OnInit {
  registroForm: FormGroup;
  constructor(
    private proveedoresService: ProveedoresService,
    private activateRouter: ActivatedRoute
  ) {
    this.registroForm = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      apellidos: new FormControl(),
      email: new FormControl(),
      nie: new FormControl(),
      tlf: new FormControl(),
      tlf_movil: new FormControl(),
      localidad: new FormControl(),
      direccion: new FormControl(),
      cp: new FormControl(),     
      borrado: new FormControl(),
      create_time: new FormControl(),
      update_time: new FormControl(),
      usuario_id: new FormControl()
    })
  }

  ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      if (params['idProveedor']) {
        let response = await this.proveedoresService.getById(params['idProveedor'])
        this.registroForm.setValue(response[0])
        console.log(response)
      }
    })
  }
  async enviar() {
    if (this.activateRouter.snapshot.params['idProveedor']) {
      await this.proveedoresService.update(this.registroForm.value);
    } else {
      const newProveedor = await this.proveedoresService.create(this.registroForm.value);
    }
  }
}
