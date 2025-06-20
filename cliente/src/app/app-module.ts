//cliente/src/app/app-module.ts
import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
// Contenido nuevo
import { ReactiveFormsModule } from '@angular/forms';
// Fin contenido nuevo
import { provideHttpClient } from '@angular/common/http';

import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { ComponenteUsuarios } from './usuarios/usuarios';
import { ComponenteMostrar } from './mostrar/mostrar';
import { ComponenteEditar } from './editar/editar';
import { ComponenteEliminar } from './eliminar/eliminar';
import { ComponenteCrear } from './crear/crear';

@NgModule({
	declarations: [
		App,
		ComponenteUsuarios,
		ComponenteMostrar,
		ComponenteEditar,
  ComponenteEliminar,
  ComponenteCrear
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
// Contenido nuevo
		ReactiveFormsModule
// Fin contenido nuevo
	],
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZonelessChangeDetection(),
		provideClientHydration(withEventReplay()),
		provideHttpClient()
	],
	bootstrap: [App]
})
export class AppModule {}
