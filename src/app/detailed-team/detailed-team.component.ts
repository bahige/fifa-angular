import { Component, OnInit } from '@angular/core';
import { Team } from '../modals/team';
import { TeamcarrierService } from '../services/teamcarrier.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-team',
  templateUrl: './detailed-team.component.html',
  styleUrls: ['./detailed-team.component.css'],
})
export class DetailedTeamComponent implements OnInit {
  team: Team;

  constructor(
    private teamCarrier: TeamcarrierService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.team = this.teamCarrier.team;
  }

  selectCountry(team: Team) {
    this.router.navigate([team.country], { relativeTo: this.activatedRoute });
    this.teamCarrier.team = team;
  }
}
