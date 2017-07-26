import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/index'

const HeaderKey = 'Auth-Expires';

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  login(username: string, password: string) {
    return this.http.post(
      environment.GetFullPath('User/SignIn'),
      JSON.stringify({ username: username, password: password })
    ).map((response: Response) => {
      if (!response.headers.has(HeaderKey))
        return false;

      let dateString = response.headers.get(HeaderKey);
      environment.Expires = new Date(dateString);
      environment.ApiKey = response.text();

      return true;
    });
  }

  logout() {
    environment.ApiKey = null;
    environment.Expires = null;
  }

  register(user: User) {
    return this.http.post(
      environment.GetFullPath('User/SingUp'),
      JSON.stringify(user)
    )
  }
}
