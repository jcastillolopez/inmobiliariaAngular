
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private httpClient: HttpClient) {
  }
  getAll() {
    return firstValueFrom(
      this.httpClient.get<any>('http://localhost:3000/api/tipos/periodo')
    );
  }
  create(formValue: any) {
    return firstValueFrom(
      this.httpClient.post<any>('http://localhost:3000/api/tipos/periodo/registro', formValue)
    )
  }
  update(formValue: any) {    
    return firstValueFrom(
      this.httpClient.put<any>('http://localhost:3000/api/tipos/periodo/'+ formValue.id, formValue)     
    )    
  }
  getById(pid: number) {
    return firstValueFrom(this.httpClient.get<any>(`http://localhost:3000/api/tipos/periodo/${pid}`))
    }
    selectTipoInterviniente() {
        return firstValueFrom(
          this.httpClient.get<any>('http://localhost:3000/api/tipos/periodo/select')
        )
      } 
}
