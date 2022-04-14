import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registroClientes',
  templateUrl: './registroClientes.component.html',
  styleUrls: ['./registroClientes.component.css']
})
  
export class RegistroClientesComponent implements OnInit {

  registroForm: FormGroup;

  constructor(
    private clientesService: ClientesService,
    private activateRouter: ActivatedRoute
  ) {
    this.registroForm = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      apellidos: new FormControl(),
      email: new FormControl(),
      nie: new FormControl(),
      fecha_nacimiento: new FormControl(),
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
      if (params['idCliente']) {
        let response = await this.clientesService.getById(params['idCliente'])
        this.registroForm.setValue(response[0])
      } 
    })
  }
  async enviar() {
    if (this.activateRouter.snapshot.params['idCliente']) {
      await this.clientesService.update(this.registroForm.value);    
    } else {
      const newCliente = await this.clientesService.create(this.registroForm.value);
    }
  }
}
