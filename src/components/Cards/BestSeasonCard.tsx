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
}) => {
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
              className={`flex items-center justify-between ${!isLeftColumn ? 'flex-row-reverse' : ''}`}
            >
              <span
                className={`${isLeftColumn ? 'mr-4' : 'ml-4'} text-muted-foreground`}
              >
                Season
              </span>
              <span>{bestSeason?.season_name}</span>
            </li>
            <li
              className={`flex items-center justify-between ${!isLeftColumn ? 'flex-row-reverse' : ''}`}
            >
              <span
                className={`${isLeftColumn ? 'mr-4' : 'ml-4'} text-muted-foreground`}
              >
                Points
              </span>
              <span>{bestSeason?.total_points}</span>
            </li>
            <li
              className={`flex items-center justify-between ${!isLeftColumn ? 'flex-row-reverse' : ''}`}
            >
              <span
                className={`${isLeftColumn ? 'mr-4' : 'ml-4'} text-muted-foreground`}
              >
                Rank
              </span>
              <span>127,988</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default BestSeasonCard;
