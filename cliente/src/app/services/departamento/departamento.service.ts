import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private urlMostrar="http://localhost:8080/departamentos";
  private urlGetByID="http://localhost:8080/getByID";
  private urlEditar="http://localhost:8080/editar";

  constructor(private http: HttpClient) { };

  getDepartamentos(): Observable<any>{
    return this.http.get(this.urlMostrar);
  };

  findDepartamentoByID(): Observable<any>{
    return this.http.post(this.urlGetByID, { withCredentials:true});
  };

  cambiarDepartamento(data: any){
    return this.http.post(this.urlEditar, data);
  }
}
