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
  public arrayCantidad: Array<any> = [];
  public productos: Array<Producto> = [];
  public subtotal: number = 0;
  public total: number = 0;

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

  sendInvoce(factura: Factura){
    this.facturaService.doPost(factura).then((res: any) => {
      console.log('Enviada: ', res.status);
    })
  }

  onCreate() {
    console.log("hola");
    let date: Date = new Date();
    let count: number = 0;
    let subtotal: number = 0;
    let total: number = 0;
    let descuento: number = 0;
    let iva: number = 0.19;
    let min: number = 1;
    let max: number = 9999999;
    for (let i = 0; i < this.productos.length; i++) {
      let item: Item = new Item();
      for (let index = 0; index < this.arrayAux.length; index++) {
        if (this.arrayAux[index].detalle == this.productos[i].detalle) {
          count++;
          item.detalle = this.arrayAux[index].detalle;
          item.valor_unitario = this.arrayAux[index].valor_unitario;
          item.cantidad = count;
          item.importe = item.valor_unitario * count;
        }
      }
      if (item.cantidad !== 0) {
        this.articulos.push(item);
      }
      count = 0;
    }
    this.factura.numero = min + Math.floor(Math.random() * max)
    this.factura.articulos = this.articulos;
    this.factura.fecha = date.toLocaleDateString();
    this.factura.hora = date.toLocaleTimeString();
    this.articulos.forEach(articulo => {
      subtotal = subtotal + articulo.importe;
    });
    this.factura.iva = iva * subtotal;
    iva = 1.19;
    if (subtotal > 100000) {
      descuento = 20000;
    } else{
      descuento = 0;
    }
    this.factura.subtotal = subtotal;
    this.factura.descuento = descuento;
    total = (subtotal * iva) - descuento;
    this.factura.total = total;
    this.sendInvoce(this.factura);
    this.route.navigate(['/home']);
  }

  onCart(detalle: string, precio: number) {
    let item: Item = new Item();
    item.detalle = detalle;
    item.valor_unitario = precio;
    console.log('Producto: ' + item.detalle + ', insertado.');
    this.arrayAux.push(item);
  }

}
