import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../shared/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
   login_failed: boolean = false;

  constructor(
    private service: AuthentificationService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  onSubmit(email: HTMLInputElement, password: HTMLInputElement) {
    console.log(email.value);
    console.log(password.value);

    if (this.service.login(email.value, password.value)) {
      this.router.navigate(['/person']);
    } else {
      this.login_failed = true;
    }
  }
 // public isLoginFailed(): boolean {
  //  return this.login_failed;
 // }
}
