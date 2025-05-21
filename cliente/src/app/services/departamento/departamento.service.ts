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
		return this.http.get(this.urlGetByID, { withCredentials:true});
	};

	cambiarDepartamento(data: any){
		return this.http.post(this.urlEditar, data);
	}

	editarDepartamento(codigo: string, datos: any): Observable<any>{
		// console.log("departamento.service.ts/editarDepartamento()");
		// console.log(codigo);
		// console.log(datos);
		// return this.http.put(this.urlEditar+'/'+codigo, datos);
		return this.http.put(this.urlEditar, datos);
	}
}