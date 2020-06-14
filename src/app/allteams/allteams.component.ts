import { Component, OnInit } from '@angular/core';
import { Team } from '../modals/team';
import { TeamsService } from '../services/teams.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamcarrierService } from '../services/teamcarrier.service';

@Component({
  selector: 'app-allteams',
  templateUrl: './allteams.component.html',
  styleUrls: ['./allteams.component.css'],
})
export class AllteamsComponent implements OnInit {
  public teams: Team[] = [];
  public errorMsg: string = ' ';

  constructor(
    private teamsService: TeamsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private teamCarrier: TeamcarrierService
  ) {}

  ngOnInit(): void {
    this.teamsService.getTeams().subscribe(
      (data) => (this.teams = data),
      (error) => (this.errorMsg = error)
    );
  }

  selectTeam(team: Team) {
    this.router.navigate([team.country], { relativeTo: this.activatedRoute });
    this.teamCarrier.team = team;
  }
}
