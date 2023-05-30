import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { Http, HttpResponse } from '@capacitor-community/http'
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent  implements OnInit {

  public producto = new Producto();

  constructor(
    private route: Router,
    public productService: ProductoService
  ) { }

  ngOnInit() {}

  onCreate(producto: Producto){
    console.log(producto);
    // this.producto = producto;
    // this.productService.doPost(this.producto)
    this.route.navigate(['/products']);
  }

}
