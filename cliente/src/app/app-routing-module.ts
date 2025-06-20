//cliente/src/app/app-routing-module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteUsuarios } from './usuarios/usuarios';
import { ComponenteMostrar } from './mostrar/mostrar';
import { ComponenteEditar } from './editar/editar';
import { ComponenteEliminar } from './eliminar/eliminar';
// Contenido nuevo
import { ComponenteCrear } from './crear/crear';
// Fin contenido nuevo

const routes: Routes = [
	{ path:'', component: ComponenteUsuarios },
	{ path:'mostrar/:id', component: ComponenteMostrar },
	{ path:'editar/:id', component: ComponenteEditar },
	{ path:'eliminar/:id', component: ComponenteEliminar },
// Contenido nuevo
	{ path:'crear', component: ComponenteCrear },
// Fin contenido nuevo
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
