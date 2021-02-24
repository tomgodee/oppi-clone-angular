import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.scss']
})
export class PollListComponent implements OnInit {
  events: string[] = [];
  opened: boolean;

  constructor() { 
    this.opened = true;
  }

  ngOnInit(): void {
  }

}
