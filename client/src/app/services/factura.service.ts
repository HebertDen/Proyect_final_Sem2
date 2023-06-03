import { Injectable } from '@angular/core';
import { Http, HttpResponse } from '@capacitor-community/http';
import { environment } from 'src/environments/environment';
import { Factura } from '../models/factura';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  public urlServer = environment.URL + '/facturas';

  constructor() { }

  doGetCount = async () => {
    const options = {
      url: this.urlServer + '/count',
      header: { accept: 'application/json' }
    };
    const response: HttpResponse = await Http.get(options);
    return response;
  }

  doGetAll = async () => {
    const options = {
      url: this.urlServer,
      headers: { accept: 'application/json'}
    };
    const response: HttpResponse = await Http.get(options);
    return response;
  }

  doGet = async (id: any) => {
    const options = {
      url: this.urlServer + '/' + id,
      headers: { accept: 'application/json'}
    };
    const response: HttpResponse = await Http.get(options);
    return response;
  }

  doPost = async ( factura: Factura ) => {
    console.log(factura);
    const options = {
      url: this.urlServer,
      headers: { accept: 'application/json', 'Content-Type': 'application/json' },
      data: { numero: factura.numero, fecha: factura.fecha, hora: factura.hora, articulos: factura.articulos, subtotal: factura.subtotal, iva: factura.iva, descuento: factura.descuento, total: factura.total }
    };
    const response: HttpResponse = await Http.post(options);
    return response;
  };

  doPut = async ( factura: Factura ) => {
    console.log(factura);
    const options = {
      url: this.urlServer,
      headers: { accept: 'application/json', 'Content-Type': 'application/json' },
      data: { numero: factura.numero, fecha: factura.fecha, hora: factura.hora, articulos: factura.articulos, subtotal: factura.subtotal, iva: factura.iva, descuento: factura.descuento, total: factura.total }
    };
    const response: HttpResponse = await CapacitorHttp.put(options);
    return response;
  };

  doDelete = async ( id: any ) => {
    const options = {
      url: this.urlServer + '/' + id,
      headers: { accept: 'application/json' }
    };
    const response: HttpResponse = await CapacitorHttp.delete(options);
    return response;
  };

}
