import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { ADMIN_ACCESS_TOKEN } from '../../constants/localStorage';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarEvent = new EventEmitter<boolean>();
  @Input() sidebarOpened!: boolean;
  showLogoutBtn: boolean;

  constructor(
    private router: Router,
  ) { 
    this.showLogoutBtn = false;
  }

  ngOnInit(): void {
  }

  toggleSidebarEventEmitter = () => {
    this.toggleSidebarEvent.emit(!this.sidebarOpened);
  }

  toggle = () => {
    this.showLogoutBtn = !this.showLogoutBtn;
  }

  logout = () => {
    localStorage.removeItem(ADMIN_ACCESS_TOKEN);
    this.router.navigate(['login']);
  }
}
