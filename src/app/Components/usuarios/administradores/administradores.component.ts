import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdministradoreService } from 'src/app/services/usuariosServices/administradores.service';
import { ActivatedRoute, Router, } from '@angular/router';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {

  registroForm: FormGroup;
  result: any;

  constructor(
    private administradorService: AdministradoreService,
    private activateRouter: ActivatedRoute,
    private router: Router,
  ) {
    this.result = "";
    this.registroForm = new FormGroup({
      id: new FormControl(),

      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.maxLength(60),
        Validators.minLength(3),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/)
      ]),
      nie: new FormControl('', [
        this.dniValidator
      ]),
      fecha_nacimiento: new FormControl('', [
        Validators.required]),
      tlf: new FormControl(),
      tlf_movil: new FormControl('', [
        Validators.required]),
      localidad: new FormControl('', [
        Validators.required]),
      direccion: new FormControl('', [
        Validators.required]),
      cp: new FormControl('', [
        Validators.required,
        Validators.maxLength(5),
        Validators.minLength(5),
      ]),
      borrado: new FormControl(),
      create_time: new FormControl(),
      update_time: new FormControl(),
      usuario_id: new FormControl()
    })
  }

  ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      if (params['idAdministrador']) {
        let response = await this.administradorService.getById(params['idAdministrador'])
        this.registroForm.setValue(response[0])
      }
    })
  }
  async enviar() {
    if (this.registroForm.valid) {
      const newAdministrador = await this.administradorService.create(this.registroForm.value);
    } else { let result = 'hay datos no validos en el formulario' };

  }

  dniValidator(pControl: FormControl) {
    const value = pControl.value;
    const grupoLetras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (/^\d{8}[a-zA-Z]$/.test(value)) {
      const numero = value.substring(0, value.length - 1);
      const letra = value.substring(value.length - 1, value.length);
      const resto = numero % 23;
      const letraSeleccionada = grupoLetras.substring(resto, resto + 1);

      if (letraSeleccionada != letra.toUpperCase()) {
        return { dnivalidator: true };
      } else {
        return null;
      }
    } else {
      return { dnivalidator: true };
    }
  }


  checkError(fieldName: string, errorType: string) {
    return this.registroForm.get(fieldName).hasError(errorType) && this.registroForm.get(fieldName).touched
  }
}





