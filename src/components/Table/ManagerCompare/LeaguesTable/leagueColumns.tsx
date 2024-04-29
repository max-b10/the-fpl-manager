import { ColumnDef } from '@tanstack/react-table';
// import { Users } from 'lucide-react';
import { ILeague } from '../../../../types/league/leagueData';

export const leagueColumns: ColumnDef<{ league: ILeague }>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    accessorFn: (row) => row.league.name,
  },
  {
    accessorKey: 'rank',
    // header: () => <Users className="-ml-2 h-6 w-6 text-primary" />,
    header: 'Rank',
  },
  {
    accessorKey: 'members',
    // header: () => <Users className="-ml-2 h-6 w-6 text-primary" />,
    header: 'Members',
  },
];
