import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardCodedAuthenticationService } from './hard-coded-authentication.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate {


  constructor(private authenticate: HardCodedAuthenticationService,
    private router:Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authenticate.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
