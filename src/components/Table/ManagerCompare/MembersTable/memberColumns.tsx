import { ColumnDef } from '@tanstack/react-table';
import { ITeamEntry } from '../../../../types/league/leagueData';

export const memberColumns: ColumnDef<{ member: ITeamEntry }>[] = [
  {
    accessorKey: 'teamAndManager',
    header: 'Team & Manager',
    accessorFn: (row) => row.member.player_name,
  },
  {
    accessorKey: 'total',
    header: 'TOT',
    accessorFn: (row) => row.member.total,
  },
];
