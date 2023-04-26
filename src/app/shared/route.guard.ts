import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthentificationService } from './authentification.service';


@Injectable({
  providedIn: 'root',
})
export class RouteGuard implements CanActivate {
  constructor(
    private router:Router, private service: AuthentificationService) { }

  canActivate() {
  
    if (this.service.isLogginIn()) {
      return true;
    } else {
      console.log("Not allowed!");
      this.router.navigate(['login'] )   ;
      return false;
}
  }
}
