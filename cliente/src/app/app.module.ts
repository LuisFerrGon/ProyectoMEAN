import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TablaComponent } from './tabla/tabla.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { MirarComponent } from './mirar/mirar.component';
import { EditarComponent } from './editar/editar.component';
import { BorrarComponent } from './borrar/borrar.component';

import { PruebaService } from "./services/prueba/prueba.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TablaComponent,
    NuevoComponent,
    MirarComponent,
    EditarComponent,
    BorrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    PruebaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
