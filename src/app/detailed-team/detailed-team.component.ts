import { Component, OnInit } from '@angular/core';
import { Team } from '../modals/team';
import { TeamcarrierService } from '../services/teamcarrier.service';

@Component({
  selector: 'app-detailed-team',
  templateUrl: './detailed-team.component.html',
  styleUrls: ['./detailed-team.component.css'],
})
export class DetailedTeamComponent implements OnInit {
  team: Team;
  displayProperty: string = 'none';

  constructor(private teamCarrier: TeamcarrierService) {}

  ngOnInit(): void {
    this.team = this.teamCarrier.team;
  }

  displayModal() {
    this.displayProperty = 'block';
  }

  closeModal() {
    this.displayProperty = 'none';
  }
}
