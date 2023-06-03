import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from 'src/app/models/factura';
import { Item } from 'src/app/models/item';
import { Producto } from 'src/app/models/producto';
import { FacturaService } from 'src/app/services/factura.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-create-invoce',
  templateUrl: './create-invoce.component.html',
  styleUrls: ['./create-invoce.component.scss'],
})
export class CreateInvoceComponent implements OnInit {

  public factura: Factura = new Factura();
  public articulos: Array<any> = [];
  public arrayAux: Array<any> = [];
  public productos: Array<Producto> = [];
  public cantidad: number = 0;

  constructor(
    public route: Router,
    public facturaService: FacturaService,
    public productoService: ProductoService
  ) { }

  ngOnInit() {
    this.productoService.doGetAll().then((res: any) => {
      this.productos = res.data;
    });
  }

  onCreate() {
    console.log("hola");
    console.log(this.articulos);
    // this.route.navigate(['/home']);
  }

  onCart(detalle: string, precio: number) {
    let item: Item = new Item();
    let count: number = 0;
    item.detalle = detalle;
    item.valor_unitario = precio;
    console.log(item);
    this.arrayAux.push(item);
    console.log('arrauAxu: ', this.arrayAux);
    this.productos.forEach(producto => {
      this.arrayAux.forEach(element => {
        if (element.detalle === producto.detalle) {
          count++;
          console.log('elemento: ', element.detalle);
        }
        item.detalle = element.detalle;
        item.valor_unitario = element.valor_unitario;
      });
      console.log('count: ', count);
      console.log('item: ', item);
      item.cantidad = count;
      item.importe = item.valor_unitario * count;
      if (this.articulos.length === 0) {
        this.articulos.push(item);
      } else {
        this.articulos.map(function (dato) {
          if (dato.detalle === producto.detalle) {
            dato.cantidad = item.cantidad;
            dato.valor_unitario = item.valor_unitario;
            console.log('dato: ', dato);
          }
          return dato;
        });
      }
      count = 0;
    });
    console.log('articulos: ', this.articulos);

    // this.productos.forEach(producto => {
    //   this.arrayAux.forEach(element => {
    //     if (element.detalle === producto.detalle) {
    //       count++;
    //     }
    //   });
    //   console.log(count);
    //   if (count !== 0) {
    //     const indice = this.articulos.findIndex((elemento, index) => {
    //       if (elemento.detalle === producto.detalle) {
    //         return true;
    //       }
    //       return false;
    //     });
    //     console.log(indice);
    //     this.articulos.splice(indice, 1);
    //     item.importe = item.valor_unitario * count;
    //     item.cantidad = count;
    //     console.log(item);
    //     this.articulos.push(item);
    //     console.log(this.articulos);
    //   }
    //   count = 0;
    // });
  }

}
