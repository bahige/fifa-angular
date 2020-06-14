import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeimageComponent } from './homeimage/homeimage.component';
import { AllteamsComponent } from './allteams/allteams.component';
import { FedTeamsComponent } from './fed-teams/fed-teams.component';
import { DetailedTeamComponent } from './detailed-team/detailed-team.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeimageComponent },

  { path: 'all', component: AllteamsComponent },
  { path: 'all/:name', component: DetailedTeamComponent },

  { path: 'afc', component: FedTeamsComponent },
  { path: 'afc/:name', component: DetailedTeamComponent },

  { path: 'caf', component: FedTeamsComponent },
  { path: 'caf/:name', component: DetailedTeamComponent },

  { path: 'concacaf', component: FedTeamsComponent },
  { path: 'concacaf/:name', component: DetailedTeamComponent },

  { path: 'conmebol', component: FedTeamsComponent },
  { path: 'conmebol/:name', component: DetailedTeamComponent },

  { path: 'uefa', component: FedTeamsComponent },
  { path: 'uefa/:name', component: DetailedTeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
