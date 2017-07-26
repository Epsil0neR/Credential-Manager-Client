import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import { environment } from '../../environments/index'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (environment.Expires == null)
            return false;

        let now = Date.now();
        let rv = environment.Expires.getTime() > now;

        if (!rv)
            this.router.navigate(['/login'])

        return rv;
    }
}
