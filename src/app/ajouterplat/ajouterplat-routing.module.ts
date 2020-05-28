import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterplatPage } from './ajouterplat.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterplatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterplatPageRoutingModule {}
