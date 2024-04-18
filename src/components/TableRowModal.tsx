import { Dialog, DialogContent, DialogTrigger } from '../UI/organisms/Dialog';
import { TableRow, TableCell } from '../UI/organisms/Table';
import { IPick } from '../types/squad/squadPicks';
import { CardContent, CardHeader, CardTitle } from '../UI/organisms/Card';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../UI/molecules/Avatar/Avatar';

interface TableRowModalProps {
  player: IPick;
  getPlayerName: (id: number) => string;
  getPlayerClub: (id: number) => string;
  getPlayerPrice: (id: number) => string;
  getPlayerTotalPoints: (id: number) => string;
  getPlayerImage: (id: number) => string;
}

const TableRowModal: React.FC<TableRowModalProps> = ({
  player,
  getPlayerName,
  getPlayerClub,
  getPlayerPrice,
  getPlayerTotalPoints,
  getPlayerImage,
}) => {
  return (
    <Dialog key={player.element}>
      <DialogTrigger asChild>
        <TableRow key={player.element} className="cursor-pointer bg-accent">
          <TableCell>
            <Avatar className="sm:flex">
              <AvatarImage src={getPlayerImage(player.element)} alt="Avatar" />

              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
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
        <div className="flex justify-center">
          <Avatar className="h-32 w-32 sm:flex">
            <AvatarImage src={getPlayerImage(player.element)} alt="Avatar" />

            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
        </div>
        <CardHeader className="justify-centeritems-centerspace-y-0 flex pb-2">
          <CardTitle className=" text-center text-2xl font-bold">
            {getPlayerName(player.element)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="flex w-full justify-between">
              <span className="text-xs text-muted-foreground">Club:</span>
              <span className="text-lg font-medium">
                {getPlayerClub(player.element)}
              </span>
            </div>
            <div className="flex w-full justify-between">
              <span className="text-xs text-muted-foreground">Price:</span>
              <span className="text-lg font-medium">
                {getPlayerPrice(player.element)}
              </span>
            </div>
            <div className="flex w-full justify-between">
              <span className="text-xs text-muted-foreground">
                Total Points:
              </span>
              <span className="text-lg font-medium">
                {getPlayerTotalPoints(player.element)}
              </span>
            </div>
          </div>
        </CardContent>
      </DialogContent>
    </Dialog>
  );
};

export default TableRowModal;
