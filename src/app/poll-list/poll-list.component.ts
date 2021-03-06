import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { PollService } from '../poll.service';
import { UserInterface, PollListInterface, PollRow } from '../../types/types';
import { debounce, repeat } from 'lodash';

import { Store, select } from '@ngrx/store';
import { saveUser } from '../state/user/user.actions';

import { Observable } from 'rxjs';

interface Query {
  search: string;
}
@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.scss']
})
export class PollListComponent implements OnInit {
  events: string[] = [];
  sidebarOpened: boolean;
  sidebarRowHighlighted: boolean[];
  user: UserInterface;
  pollList: PollListInterface;
  displayedColumns: string[];
  query: Query;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private pollService: PollService,
    private store: Store,
  ) { 
    this.sidebarOpened = false;
    this.sidebarRowHighlighted = [true, false, false];
    this.user = {} as UserInterface;
    this.pollList = {} as PollListInterface;
    this.displayedColumns = ['title', 'question', 'openedAt', 'closedAt', 'participantCount', 'status', 'action'];
    this.query = {
      search: '',
    } as Query;

    this.changeKeyword = debounce(this.changeKeyword, 1000)
  }

  ngOnInit(): void {
    this.authenticationService.getCurrentUserInfo().subscribe((response) => {
      this.user = response;
      this.store.dispatch(saveUser(response));
    });

    this.pollService.getPollList().subscribe((response) => {
      this.pollList = response;
    });
  }

  toggleSidebar = (sidebarOpened: boolean) => {
    this.sidebarOpened = sidebarOpened;
  }

  clickRow = (rowNum: number) => {
    this.sidebarRowHighlighted = this.sidebarRowHighlighted.map((row, index) => {
      if (index === rowNum - 1) row = true;
      else row = false;
      return row;
    });
  }

  changeKeyword = (event: any) => {
    this.query.search = event;
    this.pollService.getPollList(this.query).subscribe(response => {
      this.pollList = response;
    });
  }

  handleClickPoll = (row: PollRow) => {
    this.router.navigate([`poll-detail/${row.id}`]);
  }
}
