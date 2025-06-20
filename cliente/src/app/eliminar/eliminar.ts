//cliente/src/app/eliminar/eliminar.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ServicioUsuario } from '../../../services/usuarios/usuarios';
@Component({
  selector: 'app-eliminar',
  standalone: false,
  templateUrl: './eliminar.html',
  styleUrl: './eliminar.css'
})
export class ComponenteEliminar implements OnInit{
	id!: string | null;
	formEliminar = new FormGroup({
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
				this.formEliminar = this.formBuilder.group({
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
  eliminar(){
    this.servicioUsuario.eliminarUsuario(this.formEliminar.value._id);
    this.router.navigate(['']);
  };
// Fin contenido nuevo
}
