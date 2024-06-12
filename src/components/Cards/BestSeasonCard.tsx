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
  isLeftColumn?: boolean;
}

const BestSeasonCard: React.FC<IBestSeasonProps> = ({
  isLeftColumn,
  bestSeason,
  bestRank,
}) => {
  const formattedBestRank = bestRank?.toLocaleString();
  const formattedBestPoints = bestSeason?.total_points.toLocaleString();

  const flexDirection = isLeftColumn ? '' : 'flex-row-reverse';
  const marginDirection = isLeftColumn ? 'mr-4' : 'ml-4';

  return (
    <Card className="flex flex-grow flex-col border border-primary">
      <CardHeader
        className={`mb-4 flex flex-row items-start rounded-tl-lg rounded-tr-lg bg-muted/50 px-4 py-3 ${!isLeftColumn ? 'justify-end' : ''}`}
      >
        <div>
          <CardTitle className="flex items-center text-lg">
            Best Season
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex">
        <div className={`flex min-w-full justify-between`}>
          <ul className="grid w-full gap-4">
            <li
              className={`flex items-center justify-between ${flexDirection}`}
            >
              <span className={`${marginDirection} text-muted-foreground`}>
                Season
              </span>
              <span>{bestSeason?.season_name}</span>
            </li>
            <li
              className={`flex items-center justify-between ${flexDirection}`}
            >
              <span className={`${marginDirection} text-muted-foreground`}>
                Points
              </span>
              <span>{formattedBestPoints}</span>
            </li>
            <li
              className={`flex items-center justify-between ${flexDirection}`}
            >
              <span className={`${marginDirection} text-muted-foreground`}>
                Rank
              </span>
              <span>{formattedBestRank}</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default BestSeasonCard;
