import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IntervinientesServices {

  constructor(private httpClient: HttpClient) {

  }
  getAll() {    
    return firstValueFrom(
     this.httpClient.get<any>('http://localhost:3000/api/intervinientes')
     );  
   }
  create(formValue: any) {
    return firstValueFrom(
    this.httpClient.post<any>('http://localhost:3000/api/intervinientes/registro', formValue)
    )
  }
  update(formValue: any) {    
    return firstValueFrom(
      this.httpClient.put<any>('http://localhost:3000/api/intervinientes/'+ formValue.id, formValue)     
    )    
  }
  getByContrato(pid: number) {
    return firstValueFrom(this.httpClient.get<any>(`http://localhost:3000/api/intervinientes/${pid}`))
  }
  selectClientes() {
    return firstValueFrom(
      this.httpClient.get<any>('http://localhost:3000/api/clientes/select')
    )
  }
  selectTipocontrato() {
    return firstValueFrom(
      this.httpClient.get<any>('http://localhost:3000/api/tipos/contrato/select')
    )
  }
}