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
  public nombre: string = '';
  public precio: number = 0;
  public detalle: string = '';
  public categoria: number = 0;

  constructor(
    private route: Router,
    public productService: ProductoService
  ) { }

  ngOnInit() {}

  onCreate(){
    this.producto.nombre = this.nombre;
    this.producto.precio = this.precio;
    this.producto.detalle = this.detalle;
    this.producto.categoria = this.categoria;
    console.log(this.producto);
    this.productService.doPost(this.producto).then((res: any) => {
      console.log('Info: ', res );
    });
    this.route.navigate(['/products']);
  }

}
