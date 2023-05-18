import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvocesPage } from './invoces.page';

const routes: Routes = [
  {
    path: '',
    component: InvocesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvocesPageRoutingModule {}
