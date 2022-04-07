import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class registroUsuariosService {

  constructor(private httpClient: HttpClient) {

  }
  
  create(formValue: any) {
    return firstValueFrom(
    this.httpClient.post<any>('http://localhost:3000/api/usuarios/registro', formValue)
    )}
}
