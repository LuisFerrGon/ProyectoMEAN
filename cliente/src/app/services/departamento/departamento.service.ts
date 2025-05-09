import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private apiURL="http://localhost:8080/departamentos";

  constructor(private http: HttpClient) { }

  getDepartamentos(): Observable<any>{
    return this.http.get(this.apiURL);
  }
}
