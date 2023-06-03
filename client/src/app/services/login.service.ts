import { Injectable } from '@angular/core';
import { Http, HttpResponse } from '@capacitor-community/http';
import { CapacitorHttp } from '@capacitor/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public urlServer = environment.URL;

  constructor() { }

  doPost = async (email: string, password: string) => {
    const options = {
      url: this.urlServer + '/users/login',
      headers: { accept: 'application/json', 'Content-Type': 'application/json' },
      data: { email: email, password: password }
    };
    const response: HttpResponse = await CapacitorHttp.post(options);
    return response;
  };

  Quien = async (token: string) => {
    const options = {
      url: this.urlServer + '/whoAmI',
      headers: { accept: 'application/json', 'Authorization': 'Bearer ' + token }
    };
    const response: HttpResponse = await CapacitorHttp.get(options);
    return response;
  };

}
