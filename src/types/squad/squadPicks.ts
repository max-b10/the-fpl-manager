interface IAutomaticSub {
  entry: number;
  element_in: number;
  element_out: number;
  event: number;
}

interface IEntryHistory {
  event: number;
  points: number;
  total_points: number;
  rank: number;
  rank_sort: number;
  overall_rank: number;
  percentile_rank: number;
  bank: number;
  value: number;
  event_transfers: number;
  event_transfers_cost: number;
  points_on_bench: number;
}

export interface IPick {
  element: number;
  position: number;
  multiplier: number;
  is_captain: boolean;
  is_vice_captain: boolean;
}

export interface ISquad {
  active_chip: string | null;
  automatic_subs: IAutomaticSub[];
  entry_history: IEntryHistory;
  picks: IPick[];
}
