import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicsesionPage } from './inicsesion.page';

const routes: Routes = [
  {
    path: '',
    component: InicsesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicsesionPageRoutingModule {}
