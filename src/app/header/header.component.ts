import { Component, OnInit } from '@angular/core';
import { ADMIN_ACCESS_TOKEN } from '../../constants/localStorage';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showLogoutBtn: boolean

  constructor(
    private router: Router,
  ) { 
    this.showLogoutBtn = false;
  }

  ngOnInit(): void {
  }

  toggle = () => {
    this.showLogoutBtn = !this.showLogoutBtn;
  }

  logout = () => {
    localStorage.removeItem(ADMIN_ACCESS_TOKEN);
    this.router.navigate(['login']);
  }
}
