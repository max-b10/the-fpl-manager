import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../UI/organisms/Card';
import { Avatar, AvatarImage } from '../../UI/molecules/Avatar/Avatar';

interface IManagerProfileProps {
  name?: string;
  region?: string;
  seasonsPlayed?: number;
  totalRankMean?: string;
  id?: string;
  src?: string;
}

const ManagerProfile: React.FC<IManagerProfileProps> = ({
  name,
  region,
  seasonsPlayed,
  totalRankMean,
  src,
}) => {
  return (
    <Card className="flex min-w-full flex-grow flex-col border border-primary">
      <CardHeader className="mb-4 flex flex-row items-start rounded-tl-lg rounded-tr-lg bg-muted/50 p-4">
        <div>
          <CardTitle className="mb-2 flex items-center">{name}</CardTitle>
          <CardDescription className="flex justify-start">
            {region}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex">
        <div className="flex min-w-full justify-between">
          <div>
            <div className="flex justify-center">
              <Avatar className="sm:h-30 sm:w-30 h-24 w-24 border border-secondary-foreground">
                <AvatarImage src={src} alt="Avatar" />
              </Avatar>
            </div>
          </div>
          <div className="flex flex-grow justify-end">
            <ul className="grid gap-4">
              <li className="flex items-center justify-between">
                <span className="mr-4 text-muted-foreground">
                  Seasons Played
                </span>
                <span>{seasonsPlayed}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="mr-4 text-muted-foreground">Average Rank</span>
                <span>{totalRankMean}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="mr-4 text-muted-foreground">Mean points</span>
                <span>12,345</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ManagerProfile;
