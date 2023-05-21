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
  doGet = async () => {
    const options = {
      url: this.urlServer,
      // headers: { 'X-Fake-Header': 'Max was here' },
      // params: { },
    };
    const response: HttpResponse = await Http.get(options);
    return response;
  }

  doPost = async ( nombre: string ) => {
    const options = {
      url: this.urlServer,
      headers: { accept: 'application/json', 'Content-Type': 'application/json'},
      data: { nombre: nombre }
    };

    const response: HttpResponse = await CapacitorHttp.post(options);
  };

}
