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

  doGetCount = async () => {
    const options = {
      url: this.urlServer + '/count',
      header: { accept: 'application/json' }
    };
    const response: HttpResponse = await Http.get(options);
    return response;
  }

  doPost = async ( producto: Producto ) => {
    console.log(producto);
    producto.categoria = producto.categoria.valueOf();
    console.log(producto.categoria.valueOf());
    const options = {
      url: this.urlServer,
      headers: { accept: 'application/json', 'Content-Type': 'application/json' },
      data: { nombre:  producto.nombre, precio: producto.precio, detalle: producto.detalle, categoria_id: producto.categoria }
    };
    const response: HttpResponse = await CapacitorHttp.post(options);
    return response;
  };

  doPut = async ( producto: Producto, id: any ) => {
    const options = {
      url: this.urlServer + '/' + id,
      headers: { accept: 'application/json', 'Content-Type': 'application/json'},
      data: { nombre: producto.nombre, precio: producto.precio, detalle: producto.detalle, categoria_id: producto.categoria }
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
