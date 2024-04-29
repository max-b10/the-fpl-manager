import { ColumnDef } from '@tanstack/react-table';
import { ILeague } from '../../../../types/league/leagueData';

export const leagueColumns: ColumnDef<{ league: ILeague }>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    accessorFn: (row) => row.league.name,
  },
  {
    accessorKey: 'rank',
    header: 'Rank',
  },
  {
    accessorKey: 'members',
    header: 'Members',
  },
];
