import { Component, OnInit } from '@angular/core';
import { CredentialsModel } from '../models/credentials.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: CredentialsModel = {
    login: '',
    password: ''
  };

  authenticationFailed = false;

  authenticate() {
    this.authenticationFailed = false;
    this.userService.authenticate(this.credentials)
      .subscribe(
        () => this.router.navigate(['/']),
        () => this.authenticationFailed = true
      );
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

}
