import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-content',
  templateUrl: './login-content.component.html',
  styleUrls: ['./login-content.component.scss'],
})
export class LoginContentComponent implements OnInit {

  public email: string = "";
  public password: string = "";

  constructor(
    public route: Router,
    public loginService: LoginService
  ) { }

  ngOnInit() { }

  onLogin() {
    this.loginService.doPost(this.email, this.password).then(async (res: any) => {
      console.log(res);
      await Preferences.set({
        key: 'token',
        value: res.data.token,
      });
      if (res.status === 200) {
        this.onQuienSoy();
        this.route.navigate(['/home']);
      }
    });
  }

  async onQuienSoy() {
    const { value } = await Preferences.get({ key: 'token' });
    if (value) {
      this.loginService.Quien(value).then((res: any) => {
        console.log('Este: ', res);
      });
    }
  }

}
