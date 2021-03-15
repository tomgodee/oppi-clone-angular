import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { PollService } from '../poll.service';
import { UserInterface, Group, PollResultInterface, } from '../../types/types';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private pollService: PollService,
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
      console.log('this.selectedPollLanguage', this.selectedPollLanguage);
    })
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
