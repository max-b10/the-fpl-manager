import { ColumnDef } from '@tanstack/react-table';
import { Star } from 'lucide-react';
import { IPlayerData } from '../../../types/player/playerData';
import { IPick } from '../../../types/squad/squadPicks';

type PlayerData = {
  player: IPick;
  playerData: IPlayerData;
};

export const columns: ColumnDef<PlayerData>[] = [
  {
    accessorKey: 'playerImage',
    header: () => <Star />,
  },
  {
    accessorKey: 'Player',
    header: 'Player',
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
  {
    accessorKey: 'ownership',
    header: 'Ownership %',
  },
  {
    accessorKey: 'totalPoints',
    header: 'Total Points',
  },
];
