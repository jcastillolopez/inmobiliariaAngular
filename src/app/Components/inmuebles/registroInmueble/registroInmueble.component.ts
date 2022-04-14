import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registroInmueble',
  templateUrl: './registroInmueble.component.html',
  styleUrls: ['./registroInmueble.component.css']
})
export class RegistroInmuebleComponent implements OnInit {

  registroForm: FormGroup;

  constructor(
    private inmueblesService: InmueblesService,
    private activateRouter: ActivatedRoute
  ) {

    this.registroForm = new FormGroup({
      id: new FormControl(),
      alias: new FormControl(),
      refcatastral: new FormControl(),
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
      if (params['idInmueble']) {
        let response = await this.inmueblesService.getById(params['idInmueble'])
        this.registroForm.setValue(response[0])
      }
    })
  }

  async enviar() {
    if (this.activateRouter.snapshot.params['idInmueble']) {
      await this.inmueblesService.update(this.registroForm.value);
    } else {
      const newInmueble = await this.inmueblesService.create(this.registroForm.value);
    }
  }
}
