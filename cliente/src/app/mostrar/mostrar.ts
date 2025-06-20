//cliente/src/app/mostrar/mostrar.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ServicioUsuario } from '../../../services/usuarios/usuarios';

@Component({
	selector: 'app-mostrar',
	standalone: false,
	templateUrl: './mostrar.html',
	styleUrl: './mostrar.css'
})
export class ComponenteMostrar implements OnInit{
	id!: string | null;
	formMostrar = new FormGroup({
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
				this.formMostrar = this.formBuilder.group({
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
	volver(){
		this.router.navigate(['']);
	}
}
