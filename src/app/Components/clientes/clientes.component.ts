import { Component, OnInit } from '@angular/core';

import { ClientesService } from 'src/app/services/clientes.service';
import { clienteInterface } from 'src/app/interfaces/cliente_interface';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  arrListaClientes:clienteInterface[];
  administrador_id: any;
  usuario_id: any;
  username:any;
  constructor(
    private clientesService: ClientesService) { 
    
    this.arrListaClientes = [];
    }

  async ngOnInit() {
    this.administrador_id = parseInt(sessionStorage.getItem('administrador_id'));
    this.usuario_id = parseInt(sessionStorage.getItem('usuario_id'));
    this.username =(sessionStorage.getItem('username'));
    
      this.arrListaClientes = await this.clientesService.getAll();  
  };
 
}