import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetokPage } from './resetok.page';

const routes: Routes = [
  {
    path: '',
    component: ResetokPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetokPageRoutingModule {}
