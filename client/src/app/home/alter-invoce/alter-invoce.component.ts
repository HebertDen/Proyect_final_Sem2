import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from 'src/app/models/factura';
import { Item } from 'src/app/models/item';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-alter-invoce',
  templateUrl: './alter-invoce.component.html',
  styleUrls: ['./alter-invoce.component.scss'],
})
export class AlterInvoceComponent implements OnInit {

  public id!: string;
  public factura!: Factura;
  public articulos: Array<any> = [];
  public articuloEliminado: any;

  constructor(
    public route: Router,
    public router: ActivatedRoute,
    public facturaService: FacturaService
  ) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id') || '';
    this.facturaService.doGet(this.id).then((res: any) => {
      this.factura = res.data;
      this.articulos = this.factura.articulos;
    });
  }

  onUpdate(id: any) {
    if(!this.factura.articulos || this.factura.total === 0 ){
      this.facturaService.doDelete(this.id).then((res: any) => {
        if(res.status === 204){
          console.log('Eliminado: ', res.status);
        } else {
          console.log('Error: ', res.error.message);
        }
      });
    } else {
      this.articuloEliminado = {};
      this.facturaService.doPut(this.factura, id).then((res: any) => {
        if (res.status === '200') {
          console.log('Actualizado: ', res.messsage);
          console.log('Actualizado1: ', res);
        } else {
          console.log(res.message);
        }
      });
    }
    this.route.navigate(['/home']);
  }

  order() {
    let date: Date = new Date();
    let subtotal: number = this.factura.subtotal;
    let total: number = this.factura.total;
    let descuento: number = 0;
    let iva: number = 0.19;

    this.factura.fecha = date.toLocaleDateString();
    this.factura.hora = date.toLocaleTimeString();
    subtotal = subtotal - this.articuloEliminado.importe;
    this.factura.iva = iva * subtotal;
    iva = 1.19;
    if (subtotal > 100000) {
      descuento = 20000;
    } else {
      descuento = 0;
    }
    this.factura.subtotal = subtotal;
    this.factura.descuento = descuento;
    total = (subtotal * iva) - descuento;
    this.factura.total = total;
    console.log(this.factura);
  }

  onDelete(detalle: any) {
    console.log(this.articulos);
    const indice = this.articulos.findIndex((valorActual: any, index: any, array: any[]) => {
      if (valorActual.detalle === detalle) {
        return true;
      }
      return false;
    });
    this.articulos.map((value: any, index: number) => {
      if (index === indice) {
        this.articuloEliminado = value;
      }
    });
    console.log('Indice: ', indice);
    this.articulos.splice(indice, 1);
    console.log('Hola: ', this.articulos);
    this.factura.articulos = this.articulos;
    console.log('Hola: ', this.factura);
    this.order();
  }

}
