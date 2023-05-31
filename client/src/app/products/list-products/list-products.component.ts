import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {

  public productos: Array<Producto> = [];

  constructor(
    public productoService: ProductoService
  ) { }

  ngOnInit() {
    this.productoService.doGet().then((res: any) => {
      this.productos = res;
      res.foreach((element: { nombre: any; precio: any; detalle: any; categoria: any; }) =>{
       console.log("Nombre: ", element.nombre);
       console.log("Precio: ", element.precio);
       console.log("Detalle: ", element.detalle);
       console.log("Categoria: ", element.categoria.nombre);
      });
    });
  }

  onDelete(id: any) {
    console.log('ID: ', id);
  }

}
