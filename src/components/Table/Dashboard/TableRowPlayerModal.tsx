import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '../../../UI/organisms/Dialog';
import { TableRow, TableCell } from '../../../UI/organisms/Table';
import { IPick } from '../../../types/squad/squadPicks';
import { CardContent, CardHeader, CardTitle } from '../../../UI/organisms/Card';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../UI/molecules/Avatar/Avatar';
import { IPlayerData } from '../../../types/player/playerData';

interface TableRowModalProps {
  player: IPick;
  playerData: IPlayerData;
}

const TableRowModal: React.FC<TableRowModalProps> = ({
  player,
  playerData,
}) => {
  return (
    <Dialog key={player.element}>
      <DialogTrigger asChild>
        <TableRow key={player.element} className="cursor-pointer bg-accent">
          <TableCell>
            <Avatar className="sm:flex">
              <AvatarImage src={playerData.image} alt="Avatar" />

              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
          </TableCell>
          <TableCell>
            <div className="font-medium">{playerData.name}</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              {playerData.club}
            </div>
          </TableCell>
          <TableCell className="font-medium">{playerData.price}</TableCell>
          <TableCell className="font-medium">{playerData.ownership}</TableCell>
          <TableCell>
            <div className="font-medium">{playerData.totalPoints}</div>
          </TableCell>
        </TableRow>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] p-4 sm:max-w-[425px]">
        <div className="flex justify-center">
          <Avatar className="h-32 w-32 border border-primary sm:flex">
            <AvatarImage src={playerData.image} alt="Avatar" />

            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
        </div>
        <CardHeader className="items-centerspace-y-0 flex justify-center pb-2">
          <CardTitle className=" text-center text-2xl font-bold">
            {playerData.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="flex w-full justify-between">
              <span className="text-xs text-muted-foreground">Club:</span>
              <span className="text-lg font-medium">{playerData.club}</span>
            </div>
            <div className="flex w-full justify-between">
              <span className="text-xs text-muted-foreground">Price:</span>
              <span className="text-lg font-medium">{playerData.price}</span>
            </div>
            <div className="flex w-full justify-between">
              <span className="text-xs text-muted-foreground">
                Ownership (%):
              </span>
              <span className="text-lg font-medium">
                {playerData.ownership}
              </span>
            </div>
            <div className="flex w-full justify-between">
              <span className="text-xs text-muted-foreground">
                Total Points:
              </span>
              <span className="text-lg font-medium">
                {playerData.totalPoints}
              </span>
            </div>
          </div>
        </CardContent>
      </DialogContent>
    </Dialog>
  );
};

export default TableRowModal;
