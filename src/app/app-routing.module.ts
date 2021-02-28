import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { PollListComponent } from './poll-list/poll-list.component';

const routes: Routes = [
  { component: HelpComponent, path: 'help'},
  { component: LoginComponent, path: 'login'},
  { component: PollListComponent, path: 'poll-list'},
  { component: LoginComponent, path: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
