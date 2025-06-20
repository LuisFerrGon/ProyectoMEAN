//cliente/src/app/crear/crear.ts
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ServicioUsuario } from '../../../services/usuarios/usuarios';

@Component({
  selector: 'app-crear',
  standalone: false,
  templateUrl: './crear.html',
  styleUrl: './crear.css'
})
export class ComponenteCrear{
	formCrear = new FormGroup({
		name: new FormControl(''),
		email: new FormControl(''),
		password: new FormControl('')
	});
	constructor(
		private servicioUsuario: ServicioUsuario,
		private router: Router
	){};
	crear(){
		this.servicioUsuario.crearUsuario(this.formCrear.value);
		// this.router.navigate(['']);
	};
}
