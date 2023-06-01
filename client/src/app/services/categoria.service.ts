import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '@capacitor-community/http';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  public urlServer = environment.URL + '/categorias';

  constructor() { }

  // Example of a GET request
  doGetAll = async () => {
    const options = {
      url: this.urlServer,
      headers: { accept: 'application/json'}
    };
    const response: HttpResponse = await Http.get(options);
    return response;
  }

  doGet = async (id: number) => {
    const options = {
      url: this.urlServer + '/' + id,
      headers: { accept: 'application/json'}
    };
    const response: HttpResponse = await Http.get(options);
    return response;
  }

  doPost = async ( producto: any ) => {
    const options = {
      url: this.urlServer,
      headers: { accept: 'application/json', 'Content-Type': 'application/json'},
      data: { nombre: producto.nombre, precio: producto.precio, detalle: producto.detalle, categoria: producto.categoria }
    };

    const response: HttpResponse = await CapacitorHttp.post(options);
    return response;
  };

}
