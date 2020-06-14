import { Injectable } from '@angular/core';
import { Team } from '../modals/team';

@Injectable({
  providedIn: 'root',
})
export class TeamcarrierService {
  team: Team;
  federation: string = '';

  constructor() {}
}
