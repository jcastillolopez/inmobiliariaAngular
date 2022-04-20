import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistroUsuariosService {

  constructor(private httpClient: HttpClient) {

  }
  getAll() {

    return firstValueFrom(
      this.httpClient.get<any>('http://localhost:3000/api/usuarios')
    );
  }
  create(formValue: any) {
    return firstValueFrom(
      this.httpClient.post<any>('http://localhost:3000/api/usuarios/registro', formValue)
    )
  }
  selectRol() {
    return firstValueFrom(
      this.httpClient.get<any>('http://localhost:3000/api/tipos/rol/select')
    )
  }
  login(loginInformation) {
    return firstValueFrom(this.httpClient.post<any>('http://localhost:3000/api/usuarios/login', { email: loginInformation.email, password: loginInformation.password }))
  }
}

