import { ColumnDef } from '@tanstack/react-table';
import { Users } from 'lucide-react';
import { ILeague } from '../../../../types/league/leagueData';

export const columns: ColumnDef<{ league: ILeague }>[] = [
  {
    accessorKey: 'leagueIcon',
    header: () => <Users className="-ml-2 h-6 w-6 text-primary" />,
  },
  {
    accessorKey: 'name',
    header: 'Name',
    accessorFn: (row) => row.league.name,
  },
];
