import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../UI/organisms/Card';
import { IPast } from '../../types/manager/managerHistory';

interface IBestSeasonProps {
  bestRank?: number;
  bestSeason?: IPast;
}

const BestSeasonCard: React.FC<IBestSeasonProps> = ({
  bestSeason,
  bestRank,
}) => {
  const formattedBestRank = bestRank?.toLocaleString();
  const formattedBestPoints = bestSeason?.total_points.toLocaleString();

  const ListItem = ({ label, value }: { label: string; value: string }) => (
    <li className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span>{value}</span>
    </li>
  );

  return (
    <Card className="flex flex-grow flex-col border border-primary">
      <CardHeader className="mb-4 flex flex-row items-start rounded-tl-lg rounded-tr-lg bg-muted/50 px-4 py-3">
        <div>
          <CardTitle className="flex items-center text-lg">
            Best Season
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex">
        <div className="flex min-w-full justify-between">
          <ul className="grid w-full gap-4">
            <ListItem label="Season" value={bestSeason?.season_name || ''} />
            <ListItem label="Points" value={formattedBestPoints || ''} />
            <ListItem label="Rank" value={formattedBestRank || ''} />
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default BestSeasonCard;
