import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvocesPageRoutingModule } from './invoces-routing.module';

import { InvocesPage } from './invoces.page';
import { ListInvocesComponent } from './list-invoces/list-invoces.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvocesPageRoutingModule
  ],
  declarations: [InvocesPage, ListInvocesComponent]
})
export class InvocesPageModule {}
