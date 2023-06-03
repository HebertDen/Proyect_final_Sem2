import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-list-invoces',
  templateUrl: './list-invoces.component.html',
  styleUrls: ['./list-invoces.component.scss'],
})
export class ListInvocesComponent  implements OnInit {

  public facturas: Array<Factura> = [];
  public cantidad: number = 0;

  constructor(
    public facturaService: FacturaService
  ) { }

  ngOnInit() {
    this.facturaService.doGetCount().then((res: any) => {
      this.cantidad = res.data.count;
    })
    this.facturaService.doGetAll().then((res: any) => {
      this.facturas = res.data;
    })
  }

}
