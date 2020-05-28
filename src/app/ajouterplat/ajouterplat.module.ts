import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterplatPageRoutingModule } from './ajouterplat-routing.module';

import { AjouterplatPage } from './ajouterplat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterplatPageRoutingModule
  ],
  declarations: [AjouterplatPage]
})
export class AjouterplatPageModule {}
