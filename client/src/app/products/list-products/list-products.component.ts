import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Categoria } from 'src/app/models/categoria';
import { Producto } from 'src/app/models/producto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {

  public productos: Array<Producto> = [];
  public producto: Producto = new Producto;
  public categoria: Categoria = new Categoria;
  public cantidad: number = 0;

  constructor(
    public productoService: ProductoService,
    public categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.productoService.doGetCount().then((res: any) => {
      this.cantidad = res.data.count;
    });

    this.productoService.doGetAll().then((res: any) => {
      this.productos = res.data;
    });
  }

  onDelete(id: any) {
    this.productoService.doDelete(id).then((res: any) => {
      console.log("Eliminado", res);
    })
  }

}
