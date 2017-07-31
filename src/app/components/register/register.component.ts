import { environment } from './../../../environments/index';
import { Router } from '@angular/router';
import { User } from './../../models/User';
import { Component } from '@angular/core';
import { AuthenticationService } from 'app/services/authentication.service';

@Component({
  moduleId: module.id,
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  model: User = new User();
  loading: boolean = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  register() {
    this.authenticationService.register(this.model)
      .subscribe(
      response => {
        // TODO: Update AuthKey and Expires
       },
      error => { }
      )
  }
}
