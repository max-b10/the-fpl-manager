interface ICurrent {
  event: number;
  points: number;
  total_points: number;
  rank: number;
  rank_sort: number;
  overall_rank: number;
  percentile_rank: number | null;
  bank: number;
  value: number;
  event_transfers: number;
  event_transfers_cost: number;
  points_on_bench: number;
}

export interface IPast {
  season_name: string;
  total_points: number;
  rank: number;
}

interface IChips {
  name: string;
  time: string;
  event: number;
}

export interface IManagerHistory {
  current: ICurrent[];
  past: IPast[];
  chips: IChips[];
}
