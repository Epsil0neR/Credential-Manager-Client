import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'app/services/authentication.service';
import { AlertService } from './../../services/alert.service';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  model = new User();
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
    // TODO: Remove from final version.
    this.model.username = 'test';
    this.model.password = 'abrakadabra';
  }

  ngOnInit(): void {
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
      data => {
        if (data) {
          this.router.navigate([this.returnUrl]);
        } else {
          // TODO: Show message that login/password doesn't matches.
        }
      },
      error => {
        this.loading = false;
        // TODO: Show message with details
        console.log(error);
        this.alertService.error(error);
      }
      )
  }
}
