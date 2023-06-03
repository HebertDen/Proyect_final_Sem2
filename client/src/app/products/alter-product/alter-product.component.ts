import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-alter-product',
  templateUrl: './alter-product.component.html',
  styleUrls: ['./alter-product.component.scss'],
})
export class AlterProductComponent  implements OnInit {
  public nombre: string = '';
  public precio: number = 0;
  public detalle: string = '';
  public categoria: number = 0;
  public producto: Producto = new Producto();
  public id: string = '';

  constructor(
    public route: Router,
    public router: ActivatedRoute,
    public productoService: ProductoService
  ) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id') || '';
    this.productoService.doGet(this.id).then((res: any) => {
      this.producto = res.data;
    });
  }

  onUpdate(){
    console.log(this.detalle);
    console.log(this.categoria);
    // this.producto.nombre = this.nombre;
    // this.producto.precio = this.precio;
    // this.producto.detalle = this.detalle;
    // this.producto.categoria = this.categoria;
    // this.productoService.doPut(this.producto).then((res: any) => {
    //   console.log('Actualizado: ', res);
    // })
    // this.route.navigate(['/products']);
  }

}
