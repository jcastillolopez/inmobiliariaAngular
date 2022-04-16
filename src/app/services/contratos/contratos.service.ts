import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContratosService {

  constructor(private httpClient: HttpClient) {

  }
  getAll() {    
    return firstValueFrom(
     this.httpClient.get<any>('http://localhost:3000/api/contratos')
     );  
   }
  create(formValue: any) {
    return firstValueFrom(
    this.httpClient.post<any>('http://localhost:3000/api/contratos/registro', formValue)
    )
  }
  update(formValue: any) {    
    return firstValueFrom(
      this.httpClient.put<any>('http://localhost:3000/api/contratos/'+ formValue.id, formValue)     
    )    
  }
  getById(pid: number) {
    return firstValueFrom(this.httpClient.get<any>(`http://localhost:3000/api/contratos/${pid}`))
  }
  selectAlias() {
    return firstValueFrom(
      this.httpClient.get<any>('http://localhost:3000/api/inmuebles/select')
    )
  }
  selectTipoContrato() {
    return firstValueFrom(
      this.httpClient.get<any>('http://localhost:3000/api/tipos/contrato/select')
    )
  }
  selectCliente() {
    return firstValueFrom(
      this.httpClient.get<any>('http://localhost:3000/api/clientes/select')
    )
  }
  selectTipoInterviniente() {
    return firstValueFrom(
      this.httpClient.get<any>('http://localhost:3000/api/tipos/interviniente/select')
    )
  }
}