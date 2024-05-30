import { Separator } from '../../UI/molecules/Separator/Separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../UI/organisms/Card';

interface HistoryCardProps {
  bestFinish: string;
  worstFinish: string;
  seasonsPlayed: string;
  headerText?: string;
  subText?: string;
  lowestPoints?: string;
  highestPoints?: string;
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  headerText,
  subText,
  bestFinish,
  worstFinish,
  seasonsPlayed,
  lowestPoints,
  highestPoints,
}) => (
  <Card className="overflow-hidden border border-primary">
    <CardHeader className="flex flex-row items-start bg-muted/50">
      <div className="grid gap-0.5">
        <CardTitle className="group flex items-center gap-2 text-lg">
          {headerText}
        </CardTitle>
        <CardDescription>{subText}</CardDescription>
      </div>
    </CardHeader>

    <CardContent className="p-6 text-sm">
      <div className="grid gap-3">
        <div className="font-semibold">Summary</div>
        <ul className="grid gap-3">
          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">Best finish</span>
            <span>{bestFinish}</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">Worst finish</span>
            <span>{worstFinish}</span>
          </li>
        </ul>
        <Separator />
        <ul className="grid gap-3">
          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">Highest points</span>
            <span>{highestPoints}</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">Lowest points</span>
            <span>{lowestPoints}</span>
          </li>
          <Separator />

          <li className="flex items-center justify-between">
            <span className="text-muted-foreground">Seasons Played</span>
            <span>{seasonsPlayed}</span>
          </li>
        </ul>
      </div>
    </CardContent>
  </Card>
);

export default HistoryCard;
