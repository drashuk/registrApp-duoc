import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicsesionPageRoutingModule } from './inicsesion-routing.module';

import { InicsesionPage } from './inicsesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicsesionPageRoutingModule
  ],
  declarations: [InicsesionPage]
})
export class InicsesionPageModule {}
