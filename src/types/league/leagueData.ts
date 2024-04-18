export interface ILeagueData {
  last_updated_data: string;
  league: ILeague;
  standings: IStandings;
}

interface IStandings {
  has_next: boolean;
  page: number;
  results: ITeamEntry[];
}
interface ITeamEntry {
  id: number;
  event_total: number;
  player_name: string;
  rank: number;
  last_rank: number;
  rank_sort: number;
  total: number;
  entry: number;
  entry_name: string;
}

export interface ILeague {
  id: number;
  name: string;
  created: string;
  closed: boolean;
  max_entries: null | number;
  league_type: string;
  scoring: string;
  admin_entry: number;
  start_event: number;
  code_privacy: string;
  has_cup: boolean;
  cup_league: null | number;
  rank_count: number;
}
