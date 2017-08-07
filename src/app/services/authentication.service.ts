import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { RequestOptionsService } from './requestsoptions.service';
import { environment } from '../../environments/index'
import { User } from './../models/User';

const HeaderKey = 'Auth-Expires';

@Injectable()
export class AuthenticationService {
  constructor(
    private http: Http,
    // private requestOptions: RequestOptionsService
  ) { }

  login(username: string, password: string) {
    let headers = new Headers();
    // this.requestOptions.mergeHeaders(headers);
    // headers.set('Test1', '3');
    // headers.append('Test4', '5');
    // headers.set('Test3', '3');
    return this.http.post(
      environment.GetFullPath('User/SignIn'),
      JSON.stringify({ username: username, password: password }),
      // {
      //   headers: headers,
      // }
    ).map((response: Response) => {
      if (!response.headers.has(HeaderKey))
        return false;

      let dateString = response.headers.get(HeaderKey);
      environment.Expires = new Date(dateString);
      environment.AuthId = response.text();

      return true;
    });
  }

  logout() {
    // TODO: Call API method /LogOut.
    environment.AuthId = null;
    environment.Expires = null;
  }

  register(user: User) {
    return this.http.post(
      environment.GetFullPath('User/SingUp'),
      JSON.stringify(user)
    )
  }
}
