//cliente/services/usuarios/usuarios.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class ServicioUsuario {
	private urlMostrar = "http://localhost:8080/users";
	private urlGetByID = "http://localhost:8080/getByID/";
	private urlEditar = "http://localhost:8080/editar";
	private urlEliminar = "http://localhost:8080/eliminar/";
// Contenido nuevo
	private urlCrear = "http://localhost:8080/crear";
// Fin contenido nuevo
	constructor(private http: HttpClient) { }
	getUsuarios(): Observable<any>{
		return this.http.get(this.urlMostrar);
	}
// Contenido nuevo
	crearUsuario(datos: any | null){
		this.http.post(this.urlCrear, datos).subscribe();
	}
// Fin contenido nuevo
	getInfoUsuario(id: string | null): Observable<any>{
		return this.http.get(this.urlGetByID+id);
	}
	editarUsuario(datos: any | null){
		this.http.post(this.urlEditar, datos).subscribe();
	}
	eliminarUsuario(id: string | null | undefined){
		this.http.post(this.urlEliminar+id, null).subscribe();
	}
}
