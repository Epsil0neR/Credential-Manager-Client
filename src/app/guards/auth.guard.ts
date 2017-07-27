import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import { environment } from '../../environments/index'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    let rv = false;
    if (environment.Expires != null) {
      let now = Date.now();
      rv = environment.Expires.getTime() > now;
    }

    if (!rv)
      this.router.navigate(['/login'])

    return rv;
  }
}
