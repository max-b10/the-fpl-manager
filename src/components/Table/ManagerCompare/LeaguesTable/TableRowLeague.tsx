import { TableRow, TableCell } from '../../../../UI/organisms/Table';
import { ILeague } from '../../../../types/league/leagueData';

interface TableRowLeagueProps {
  league: ILeague;
  onRowClick: (league: ILeague) => void;
}

const TableRowLeague: React.FC<TableRowLeagueProps> = ({
  league,
  onRowClick,
}) => {
  console.log(league);
  return (
    <TableRow
      key={league.id}
      className="cursor-pointer bg-accent"
      onClick={() => onRowClick(league)}
    >
      <TableCell></TableCell>
      <TableCell>
        <div className="font-medium">{league.name}</div>
      </TableCell>
    </TableRow>
  );
};

export default TableRowLeague;
