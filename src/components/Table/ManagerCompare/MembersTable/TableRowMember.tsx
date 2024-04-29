import { useNavigate } from 'react-router-dom';
import { TableRow, TableCell } from '../../../../UI/organisms/Table';
import { ITeamEntry } from '../../../../types/league/leagueData';

interface TableRowMemberProps {
  member: ITeamEntry;
}

const TableRowMember: React.FC<TableRowMemberProps> = ({ member }) => {
  const navigate = useNavigate();
  const handleRowClick = () => {
    navigate(`/compareDetails/${member.entry}`);
  };
  return (
    <TableRow
      onClick={handleRowClick}
      key={member.id}
      className="cursor-pointer bg-accent"
    >
      <TableCell className="sm:table-cell">
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">
            {member.entry_name}
          </p>
          <p className="text-sm text-muted-foreground">{member.player_name}</p>
        </div>
      </TableCell>
      <TableCell className="sm:table-cell">
        <div className="grid gap-1">
          <p className="text-sm ">{member.total}</p>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default TableRowMember;
