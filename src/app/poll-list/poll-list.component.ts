import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.scss']
})
export class PollListComponent implements OnInit {
  events: string[] = [];
  sidebarOpened: boolean;
  sidebarRowHighlighted: boolean[];

  constructor() { 
    this.sidebarOpened = true;
    this.sidebarRowHighlighted = [true, false, false];
  }

  ngOnInit(): void {
  }

  toggleSidebar = (sidebarOpened: boolean) => {
    console.log('sidebarOpened', sidebarOpened);
    this.sidebarOpened = sidebarOpened;
  }

  clickRow = (rowNum: number) => {
    this.sidebarRowHighlighted = this.sidebarRowHighlighted.map((row, index) => {
      if (index === rowNum - 1) row = true;
      else row = false;
      return row;
    });
  }

}
