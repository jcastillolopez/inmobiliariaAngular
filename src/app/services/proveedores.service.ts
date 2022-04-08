import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(private httpClient: HttpClient) {    
  }
  getAll() {    
    return firstValueFrom(
     this.httpClient.get<any>('http://localhost:3000/api/proveedores')
     );  
   }
  create(formValue: any) {
    return firstValueFrom(
    this.httpClient.post<any>('http://localhost:3000/api/proveedores/registro', formValue)
    )}
}
