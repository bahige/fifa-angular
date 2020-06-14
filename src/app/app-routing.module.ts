import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeimageComponent } from './homeimage/homeimage.component';
import { AllteamsComponent } from './allteams/allteams.component';
import { FedTeamsComponent } from './fed-teams/fed-teams.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeimageComponent },
  { path: 'all', component: AllteamsComponent },
  { path: 'afc', component: FedTeamsComponent },
  { path: 'caf', component: FedTeamsComponent },
  { path: 'concacaf', component: FedTeamsComponent },
  { path: 'conmebol', component: FedTeamsComponent },
  { path: 'uefa', component: FedTeamsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
