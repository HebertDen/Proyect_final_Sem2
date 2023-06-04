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
  public categoria: Categoria = new Categoria;
  public cantidad: number = 0;

  constructor(
    public productoService: ProductoService,
    public categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.countProducts();
    this.productoService.doGetAll().then((res: any) => {
      this.productos = res.data;
    });
  }

  countProducts(){
    this.productoService.doGetCount().then((res: any) => {
      this.cantidad = res.data.count;
    });
  }

  onDelete(id: any) {
    const indice = this.productos.findIndex((valorActual: any, index: any, array: any[]) => {
      if (valorActual.id === id) {
        return true;
      }
      return false;
    });
    console.log('Indice: ', indice);
    this.productos.splice(indice, 1);
    this.productoService.doDelete(id).then((res: any) => {
      console.log('Eliminado: ', res.status);
    });
    if (this.productos.length === 0) {
      this.cantidad = 0;
    } else {
      this.cantidad--;
    }
  }

}
