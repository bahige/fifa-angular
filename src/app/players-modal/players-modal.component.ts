import { Component, OnInit, Inject } from '@angular/core';
import { TeamcarrierService } from '../services/teamcarrier.service';
import { Team } from '../modals/team';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-players-modal',
  templateUrl: './players-modal.component.html',
  styleUrls: ['./players-modal.component.css'],
})
export class PlayersModalComponent implements OnInit {
  team: Team;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) // private teamCarrier: TeamcarrierService
  {}

  ngOnInit(): void {
    // this.team = this.teamCarrier.team;
  }
}
