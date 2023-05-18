import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePageRoutingModule } from './create-routing.module';

import { CreatePage } from './create.page';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePageRoutingModule
  ],
  declarations: [CreatePage, CategoryComponent, ProductComponent, ItemComponent]
})
export class CreatePageModule {}
