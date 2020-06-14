import { Component, OnInit } from '@angular/core';
import { Team } from '../modals/team';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-allteams',
  templateUrl: './allteams.component.html',
  styleUrls: ['./allteams.component.css'],
})
export class AllteamsComponent implements OnInit {
  public teams: Team[] = [];
  public errorMsg: string = ' ';

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.teamsService.getTeams().subscribe(
      (data) => (this.teams = data),
      (error) => (this.errorMsg = error)
    );
  }
}
