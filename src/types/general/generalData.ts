import { IEvent } from './event';
import { IGameSettings } from './gameSettings';
import { IPhase } from './phase';
import { IPlayer } from './player';
import { ITeam } from './team';

export interface IGeneralData {
  events: IEvent[];
  game_settings: IGameSettings;
  phases: IPhase[];
  teams: ITeam[];
  total_players: number;
  elements: IPlayer[];
}
