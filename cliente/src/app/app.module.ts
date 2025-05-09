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

import { DepartamentoService } from "./services/departamento/departamento.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations:[
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TablaComponent,
    NuevoComponent,
    MirarComponent,
    EditarComponent,
    BorrarComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers:[
    provideClientHydration(withEventReplay()),
    DepartamentoService
  ],
  bootstrap:[
    AppComponent
  ]
})
export class AppModule { }
