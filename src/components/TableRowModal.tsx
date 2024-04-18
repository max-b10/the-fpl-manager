import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../UI/organisms/Dialog';
import { TableRow, TableCell } from '../UI/organisms/Table';
import { User } from 'lucide-react';
import { IPick } from '../types/squad/squadPicks';
import { CardContent } from '../UI/organisms/Card';

interface TableRowModalProps {
  player: IPick;
  getPlayerName: (id: number) => string;
  getPlayerClub: (id: number) => string;
  getPlayerPrice: (id: number) => string;
  getPlayerTotalPoints: (id: number) => string;
}

const TableRowModal: React.FC<TableRowModalProps> = ({
  player,
  getPlayerName,
  getPlayerClub,
  getPlayerPrice,
  getPlayerTotalPoints,
}) => {
  return (
    <Dialog key={player.element}>
      <DialogTrigger asChild>
        <TableRow key={player.element} className="bg-accent">
          <TableCell>
            <User className="h-8 w-8 text-primary" />
          </TableCell>
          <TableCell>
            <div className="font-medium">{getPlayerName(player.element)}</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              {getPlayerClub(player.element)}
            </div>
          </TableCell>
          <TableCell className="font-medium">
            {getPlayerPrice(player.element)}
          </TableCell>
          <TableCell className="font-medium">ownership %</TableCell>
          <TableCell>
            <div className="font-medium">
              {getPlayerTotalPoints(player.element)}
            </div>
          </TableCell>
        </TableRow>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <DialogTitle className="text-sm font-medium">
            Edit profile
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>

        <CardContent>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <div id="name" className="col-span-3 text-2xl font-bold">
                {getPlayerName(player.element)}
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <div id="club" className="col-span-3 text-2xl font-bold">
                {getPlayerClub(player.element)}
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <div id="price" className="col-span-3 text-2xl font-bold">
                {getPlayerPrice(player.element)}
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <div id="points" className="col-span-3 text-2xl font-bold">
                {getPlayerTotalPoints(player.element)}
              </div>
            </div>
          </div>
        </CardContent>
      </DialogContent>
    </Dialog>
  );
};

export default TableRowModal;
