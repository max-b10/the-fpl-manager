import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../UI/organisms/Table';
import TableRowModal from './TableRowPlayerModal';
import { IPick } from '../../../types/squad/squadPicks';
import { IPlayerData } from '../../../types/player/playerData';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DashboardTable<
  TData extends { player: IPick; playerData: IPlayerData },
  TValue,
>({ columns, data }: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow hoverEffect={false} key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => {
                return (
                  <TableHead
                    className={`${index === 0 ? 'pl-6 text-center' : ''}`}
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table
              .getRowModel()
              .rows.map((row) => (
                <TableRowModal
                  key={row.id}
                  player={row.original.player}
                  playerData={row.original.playerData}
                />
              ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
