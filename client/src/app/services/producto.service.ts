import { Injectable } from '@angular/core';
import { Http, HttpResponse } from '@capacitor-community/http';
import { CapacitorHttp } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public urlServer = environment.URL + '/productos';

  constructor() { }

  doGet = async () => {
    const options = {
      url: this.urlServer,
      // headers: { 'X-Fake-Header': 'Max was here' },
      // params: { },
    };
    const response: HttpResponse = await Http.get(options);
    return response;
  }

  doPost = async ( producto: Producto ) => {
    const options = {
      url: this.urlServer,
      headers: { accept: 'application/json', 'Content-Type': 'application/json'},
      data: { nombre: producto.nombre, precio: producto.precio, detalle: producto.detalle, categoria: producto.categoria }
    };
    const response: HttpResponse = await CapacitorHttp.post(options);
    return response;
  };
}
