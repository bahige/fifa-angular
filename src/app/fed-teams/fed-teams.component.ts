import { Component, OnInit } from '@angular/core';
import { Team } from '../modals/team';
import { TeamsService } from '../services/teams.service';
import { TeamcarrierService } from '../services/teamcarrier.service';

@Component({
  selector: 'app-fed-teams',
  templateUrl: './fed-teams.component.html',
  styleUrls: ['./fed-teams.component.css'],
})
export class FedTeamsComponent implements OnInit {
  teams: Team[];
  teamsFed: Team[] = [];
  errorMsg: string;
  federation: string;
  constructor(
    private teamsService: TeamsService,
    private teamCarrier: TeamcarrierService
  ) {}

  ngOnInit(): void {
    this.federation = this.teamCarrier.federation;
    this.teamsService.getTeams().subscribe(
      (data) => {
        this.teams = data;
        this.teams.forEach((team) => {
          if (team.federation === this.federation) {
            this.teamsFed.push(team);
          }
        });
      },
      (error) => (this.errorMsg = error)
    );
  }
}
