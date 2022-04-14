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

  constructor(
    private clientesService: ClientesService) { 
    this.arrListaClientes = [];
    }

  async ngOnInit() {
      this.arrListaClientes = await this.clientesService.getAll();  
  };
 
}
