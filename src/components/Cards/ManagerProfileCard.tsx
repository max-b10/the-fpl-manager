import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../UI/organisms/Card';
import { Avatar, AvatarImage } from '../../UI/molecules/Avatar/Avatar';
import { User } from 'lucide-react';

interface IManagerProfileProps {
  name?: string;
  region?: string;
  seasonsPlayed?: number;
  totalRankMean?: number;
  totalPointsMean?: number;
  id?: string;
  src?: string;
  isLeftColumn?: boolean;
}

const ManagerProfileCard: React.FC<IManagerProfileProps> = ({
  name,
  region,
  seasonsPlayed,
  totalRankMean,
  totalPointsMean,
  src,
  isLeftColumn,
}) => {
  const formattedTotalRankMean = totalRankMean?.toLocaleString();
  const formattedTotalPointsMean = totalPointsMean?.toLocaleString();
  const flexDirection = !isLeftColumn ? 'flex-row-reverse' : '';
  const marginDirection = isLeftColumn ? 'mr-4' : 'ml-4';
  return (
    <Card className="flex min-w-full flex-grow flex-col border border-primary">
      <CardHeader
        className={`mb-4 flex flex-row items-start rounded-tl-lg rounded-tr-lg bg-muted/50 px-4 py-3 ${!isLeftColumn ? 'justify-end' : ''}`}
      >
        <div
          className={`flex w-full justify-between ${!isLeftColumn ? 'flex-row-reverse' : ''}`}
        >
          <div>
            <CardTitle className="mb-2 flex items-center">{name}</CardTitle>
            <CardDescription
              className={`flex ${!isLeftColumn ? 'justify-end' : ''}`}
            >
              {region}
            </CardDescription>
          </div>
          <div className="my-auto flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary">
            <User></User>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div
          className={`flex min-w-full justify-between ${!isLeftColumn ? 'flex-row-reverse' : ''}`}
        >
          <div>
            <div className="flex justify-center">
              <Avatar className="sm:h-30 sm:w-30 h-24 w-24 border border-secondary-foreground">
                <AvatarImage src={src} alt="Avatar" />
              </Avatar>
            </div>
          </div>
          <div
            className={`flex flex-grow ${!isLeftColumn ? 'justify-start' : 'justify-end'}`}
          >
            <ul className="grid gap-4">
              <li
                className={`flex items-center justify-between ${flexDirection}`}
              >
                <span className={`${marginDirection} text-muted-foreground`}>
                  Seasons Played
                </span>
                <span>{seasonsPlayed}</span>
              </li>
              <li
                className={`flex items-center justify-between ${flexDirection}`}
              >
                <span className={`${marginDirection} text-muted-foreground`}>
                  Average Rank
                </span>
                <span>{formattedTotalRankMean}</span>
              </li>
              <li
                className={`flex items-center justify-between ${flexDirection}`}
              >
                <span className={`${marginDirection} text-muted-foreground`}>
                  Mean points
                </span>
                <span>{formattedTotalPointsMean}</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ManagerProfileCard;
