import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablaComponent } from './tabla/tabla.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  {
    path: '', component: TablaComponent
  },
  {
    path: 'tabla', component: TablaComponent
  },
  {
    path: 'editar', component: EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
