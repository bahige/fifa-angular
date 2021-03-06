import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PlayersModalComponent } from './players-modal/players-modal.component';

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
    PlayersModalComponent,
  ],
  entryComponents: [PlayersModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule,
  ],
  providers: [TeamsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
