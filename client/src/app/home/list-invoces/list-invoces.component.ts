import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from 'src/app/models/factura';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-list-invoces',
  templateUrl: './list-invoces.component.html',
  styleUrls: ['./list-invoces.component.scss'],
})
export class ListInvocesComponent implements OnInit {

  public facturas: Array<Factura> = [];
  public cantidad: number = 0;

  constructor(
    public route: Router,
    public facturaService: FacturaService
  ) { }

  ngOnInit() {
    this.countInvoces();
    this.facturaService.doGetAll().then((res: any) => {
      this.facturas = res.data;
    });
  }

  countInvoces() {
    this.facturaService.doGetCount().then((res: any) => {
      this.cantidad = res.data.count;
    });
  }

  onDelete(id: string) {
    const indice = this.facturas.findIndex((valorActual: any, index: any, array: any[]) => {
      if (valorActual.id === id) {
        return true;
      }
      return false;
    });
    console.log('Indice: ', indice);
    this.facturas.splice(indice, 1);
    this.facturaService.doDelete(id).then((res: any) => {
      console.log('Eliminada: ', res.status);
    });
    if (this.facturas.length === 0) {
      this.cantidad = 0;
    } else {
      this.cantidad--;
    }
  }

}
