import { Component } from '@angular/core';
import { AuthentificationService } from '../shared/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private service: AuthentificationService,
    private route: Router) {
    
    this.service.logout();

  this.route.navigate(["/login"])  }
}
