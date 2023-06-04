import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from 'src/app/models/factura';
import { Item } from 'src/app/models/item';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-show-invoce',
  templateUrl: './show-invoce.component.html',
  styleUrls: ['./show-invoce.component.scss'],
})
export class ShowInvoceComponent  implements OnInit {

  public factura: Factura = new Factura();
  public articulos: Array<Item> = [];
  public id: string = '';

  constructor(
    public route: Router,
    public router: ActivatedRoute,
    public facturaService: FacturaService
  ) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id') || '';
    this.facturaService.doGet(this.id).then((res: any) => {
      this.factura = res.data;
      this.articulos = res.data.articulos;
      console.log(res);
      console.log(res.data.articulos);
    })
  }

}
