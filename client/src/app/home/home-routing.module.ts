import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ListInvocesComponent } from './list-invoces/list-invoces.component';
import { CreateInvoceComponent } from './create-invoce/create-invoce.component';
import { AlterInvoceComponent } from './alter-invoce/alter-invoce.component';
import { ShowInvoceComponent } from './show-invoce/show-invoce.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: '', component: ListInvocesComponent },
      { path: 'create', component: CreateInvoceComponent },
      { path: 'alter/:id', component: AlterInvoceComponent },
      { path: 'show/:id', component: ShowInvoceComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
