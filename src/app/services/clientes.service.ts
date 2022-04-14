import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) {
  }
  getAll() {
    return firstValueFrom(
      this.httpClient.get<any>('http://localhost:3000/api/clientes')
    );
  }
  create(formValue: any) {
    return firstValueFrom(
      this.httpClient.post<any>('http://localhost:3000/api/clientes/registro', formValue)
    )
  }
  update(formValue: any) {    
    return firstValueFrom(
      this.httpClient.put<any>('http://localhost:3000/api/clientes/'+ formValue.id, formValue)     
    )    
  }
  getById(pid: number) {
    return firstValueFrom(this.httpClient.get<any>(`http://localhost:3000/api/clientes/${pid}`))
  }
}
