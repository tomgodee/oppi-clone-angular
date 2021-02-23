import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { PollListComponent } from './poll-list/poll-list.component';

const routes: Routes = [
  { component: LoginComponent, path: 'login'},
  { component: HelpComponent, path: 'help'},
  { component: PollListComponent, path: 'poll-list'},
  { component: LoginComponent, path: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// admin@example.com
// testtest