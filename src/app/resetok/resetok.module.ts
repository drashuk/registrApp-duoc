import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetokPageRoutingModule } from './resetok-routing.module';

import { ResetokPage } from './resetok.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetokPageRoutingModule
  ],
  declarations: [ResetokPage]
})
export class ResetokPageModule {}
