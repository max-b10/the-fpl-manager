import { Separator } from '../../UI/molecules/Separator/Separator';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../UI/organisms/Card';

interface HistoryCardProps {
  bestRank: number;
  worstRank: number;
  seasonsPlayed: number;
  rankMean: number;
  pointsMean: number;
  subText?: string;
  lowestPoints: number;
  highestPoints: number;
  bestSeasonName?: string;
  worstSeasonName?: string;
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  rankMean,
  pointsMean,
  subText,
  bestRank,
  worstRank,
  seasonsPlayed,
  lowestPoints,
  highestPoints,
  bestSeasonName,
  worstSeasonName,
}) => (
  <>
    <Card className="h-full overflow-scroll border-primary p-0">
      <CardHeader className="mb-4 flex flex-row items-start rounded-tl-lg rounded-tr-lg bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            History Summary
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="text-m">
        <div className="grid gap-3">
          <div className="my-1 font-semibold">Best Season</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Season</span>
              <span>{bestSeasonName}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Rank</span>
              <span>{bestRank}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Total points</span>
              <span>{highestPoints}</span>
            </li>
          </ul>
          <Separator />
          <div className="my-1 font-semibold">Worst Season</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Season</span>
              <span>{worstSeasonName}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Rank</span>
              <span>{worstRank}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Total points</span>
              <span>{lowestPoints}</span>
            </li>
          </ul>
          <Separator />
          <div className="my-1 font-semibold">Summary</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Seasons Played</span>
              <span>{seasonsPlayed}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">{subText}</span>
              <span>{rankMean}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Mean points</span>
              <span>{pointsMean}</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </>
);

export default HistoryCard;
