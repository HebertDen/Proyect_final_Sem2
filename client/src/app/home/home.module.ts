import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ListInvocesComponent } from './list-invoces/list-invoces.component';
import { CreateInvoceComponent } from './create-invoce/create-invoce.component';
import { AlterInvoceComponent } from './alter-invoce/alter-invoce.component';
import { ShowInvoceComponent } from './show-invoce/show-invoce.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ListInvocesComponent, CreateInvoceComponent, AlterInvoceComponent, ShowInvoceComponent]
})
export class HomePageModule {}
