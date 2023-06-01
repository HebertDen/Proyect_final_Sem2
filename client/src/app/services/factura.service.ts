import { Injectable } from '@angular/core';
import { Http, HttpResponse } from '@capacitor-community/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  public urlServer = environment.URL + '/facturas';

  constructor() { }

  doGetAll = async () => {
    const options = {
      url: this.urlServer,
      headers: { accept: 'application/json'}
    };
    const response: HttpResponse = await Http.get(options);
    return response;
  }

}
