import { Component, OnInit } from '@angular/core';
import { TeamcarrierService } from '../services/teamcarrier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private teamCarrier: TeamcarrierService,
    private router: Router
  ) {}

  federation: string = '';
  federationLowerCase: string = '';

  ngOnInit(): void {}

  changeToCaf() {
    this.federation = 'CAF';
    this.teamCarrier.federation = this.federation;
    this.federationLowerCase = this.federation.toLowerCase();
    this.router.navigate([this.federationLowerCase]);
  }

  changeToAfc() {
    this.federation = 'AFC';
    this.teamCarrier.federation = this.federation;
    this.federationLowerCase = this.federation.toLowerCase();
    this.router.navigate([this.federationLowerCase]);
  }

  changeToConcacaf() {
    this.federation = 'CONCACAF';
    this.teamCarrier.federation = this.federation;
    this.federationLowerCase = this.federation.toLowerCase();
    this.router.navigate([this.federationLowerCase]);
  }

  changeToConmebol() {
    this.federation = 'CONMEBOL';
    this.teamCarrier.federation = this.federation;
    this.federationLowerCase = this.federation.toLowerCase();
    this.router.navigate([this.federationLowerCase]);
  }

  changeToUefa() {
    this.federation = 'UEFA';
    this.teamCarrier.federation = this.federation;
    this.federationLowerCase = this.federation.toLowerCase();
    this.router.navigate([this.federationLowerCase]);
  }
}
