//cliente/src/app/usuarios/usuarios.ts
import { Component, OnInit } from '@angular/core';
import { ServicioUsuario } from '../../../services/usuarios/usuarios';
// Contenido nuevo
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// Fin contenido nuevo
@Component({
	selector: 'app-usuarios',
	standalone: false,
	templateUrl: './usuarios.html',
	styleUrl: './usuarios.css'
})
export class ComponenteUsuarios implements OnInit{
	usuarios: any[] = [];
	constructor(
		private servicioUsuario: ServicioUsuario,
		// Contenido nuevo
		private http: HttpClient,
		private router: Router
		// Fin contenido nuevo
	){}
	ngOnInit(): void {
		this.servicioUsuario.getUsuarios().subscribe(
			data => this.usuarios = data,
			error => console.error('Error al cargar usuarios', error)
		)
	}
}
