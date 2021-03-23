import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { PollService } from '../poll.service';
import { UserInterface, Group, PollResultInterface, } from '../../types/types';

import { Store, select } from '@ngrx/store';
 
import { selectBookCollection, selectBooks } from '../state/books/books.selectors';
import { selectUser } from '../state/user/user.selectors';
import {
  retrievedBookList,
  addBook,
  removeBook,
} from '../state/books/books.actions';
import { GoogleBooksService } from '../book-list/books.service';
// import { saveUser } from '../state/user/user.actions';
 
@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {
  sidebarOpened: boolean;
  sidebarRowHighlighted: boolean[];
  pollResult: PollResultInterface;
  selectedGroup: Group;
  selectedMcqGroup: string;
  selectedMcqQuestion: string;

  selectedPollLanguage: string;

  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));
  // user$ = this.store.pipe(select(selectUser));
 
  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }
 
  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private pollService: PollService,

    private booksService: GoogleBooksService,
    private store: Store,
  ) { 
    this.sidebarOpened = false;
    this.sidebarRowHighlighted = [true, false, false];
    this.pollResult = {
      poll: {
        openedAt: 0,
        closedAt: 0,
      },
      groups: {
        list: [] as Group[],
      }
    } as PollResultInterface;
    this.selectedGroup = {} as Group;
    this.selectedMcqGroup = '';
    this.selectedMcqQuestion = '';

    this.selectedPollLanguage = '';
  }

  ngOnInit(): void {
    const pollId = Number(this.route.snapshot.paramMap.get('id'));
    this.pollService.getPollResult(pollId).subscribe(response => {
      this.pollResult = response;
      this.selectedGroup = this.pollResult.groups.list[0];
      this.selectedPollLanguage = this.pollResult.poll.language;
    });

    this.booksService
    .getBooks()
    .subscribe((books) => {
      this.store.dispatch(retrievedBookList({ books }))
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

  clickGroup = (group: Group) => {
    this.selectedGroup = group;
  }

  savePollDetail = () => {
    const data = {
      description: this.pollResult.poll.description,
      language: this.selectedPollLanguage,
      name: this.pollResult.poll.title,
      question: this.pollResult.poll.question,
      video_urls: [],
    };
    this.pollService.updatePollDetail(this.pollResult.poll.id, data).subscribe(response => {
      console.log('response', response);
    });
  }
}
