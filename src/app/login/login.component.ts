import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ADMIN_ACCESS_TOKEN } from '../../constants/localStorage';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.email = 'admin@example.com';
    this.password = 'testtest';
   }

  ngOnInit(): void {
  }

  click = () => {
    this.authenticationService.signin(this.email, this.password).subscribe(response => {
      if (response.token) {
        localStorage.setItem(ADMIN_ACCESS_TOKEN, response.token);
        this.router.navigate(['poll-list']);
      }
    });
  }

}
