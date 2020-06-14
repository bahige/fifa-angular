import { Player } from './player';

export class Team {
  id: number;
  flag: string;
  logo: string;
  titles: string;
  country: string;
  federation: string;
  appearances: string;
  players: Player[];
}
