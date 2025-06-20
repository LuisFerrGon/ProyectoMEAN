//cliente/src/app/editar/editar.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ServicioUsuario } from '../../../services/usuarios/usuarios';
@Component({
	selector: 'app-editar',
	standalone: false,
	templateUrl: './editar.html',
	styleUrl: './editar.css'
})
export class ComponenteEditar implements OnInit{
	id!: string | null;
	formEditar = new FormGroup({
		_id: new FormControl(''),
		name: new FormControl(''),
		email: new FormControl(''),
		password: new FormControl('')
	});
	constructor(
		private servicioUsuario: ServicioUsuario,
		private route: ActivatedRoute,
		private router: Router,
		private formBuilder: FormBuilder
	){};
	ngOnInit(): void {
		this.id = this.route.snapshot.paramMap.get('id');
		this.servicioUsuario.getInfoUsuario(this.id).subscribe({
			next: data => {
				this.formEditar = this.formBuilder.group({
					_id: [data._id],
					name: [data.name],
					email: [data.email],
					password: [data.password]
				});
			},
			error: error => {
				console.log(error);
			}
		});
	};
// Contenido nuevo
	editar(){
		this.servicioUsuario.editarUsuario(this.formEditar.value);
		this.router.navigate(['']);
	};
// Fin contenido nuevo
}
