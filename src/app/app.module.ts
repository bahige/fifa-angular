import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeimageComponent } from './homeimage/homeimage.component';
import { TeamsService } from './services/teams.service';
import { AllteamsComponent } from './allteams/allteams.component';
import { FedTeamsComponent } from './fed-teams/fed-teams.component';
import { DetailedTeamComponent } from './detailed-team/detailed-team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeimageComponent,
    AllteamsComponent,
    FedTeamsComponent,
    DetailedTeamComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [TeamsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
