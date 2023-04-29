import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthentificationService } from '../shared/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login_failed: boolean = false;
  @ViewChild('email')
  emailElement!: ElementRef;
  @ViewChild('password')
  passwordElement!: ElementRef;

  constructor(
    private service: AuthentificationService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  onSubmit() {
    let email = this.emailElement.nativeElement.value;
    let password = this.passwordElement.nativeElement.value;

    if (this.service.login(email, password)) {
      this.router.navigate(['/person']);
    } else {
      this.login_failed = true;
    }
  }
 // public isLoginFailed(): boolean {
  //  return this.login_failed;
 // }
}
