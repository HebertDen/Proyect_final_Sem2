import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsPage } from './products.page';
import { ListProductsComponent } from './list-products/list-products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { AlterProductComponent } from './alter-product/alter-product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage,
    children: [
      { path: '', component: ListProductsComponent },
      { path: 'create', component: CreateProductComponent },
      { path: 'alter/:id', component: AlterProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule { }
