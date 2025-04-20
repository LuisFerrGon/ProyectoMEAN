import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablaComponent } from './tabla/tabla.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EditarComponent } from './editar/editar.component';
import { MirarComponent } from './mirar/mirar.component';
import { BorrarComponent } from './borrar/borrar.component';

const routes: Routes = [
  {
    path: '', component: TablaComponent
  },
  {
    path: 'tabla', component: TablaComponent
  },
  {
    path: 'nuevo', component: NuevoComponent
  },
  {
    path: 'editar', component: EditarComponent
  },
  {
    path: 'mirar', component: MirarComponent
  },
  {
    path: 'borrar', component: BorrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
