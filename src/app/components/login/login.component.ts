import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'app/services/authentication.service';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  model: any;
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    console.log('LOGIN: created');
   }

  ngOnInit(): void {
    this.authenticationService.logout();
    console.log('LOGIN: initialized');
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
      data => {
        // TODO: Update Expires
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.loading = false;
        // TODO: Show message with details
      }
      )
  }
}
