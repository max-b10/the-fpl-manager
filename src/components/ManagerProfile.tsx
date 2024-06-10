import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../UI/organisms/Card';
import { Avatar, AvatarImage } from '../UI/molecules/Avatar/Avatar';

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
    <Card className="flex w-full border border-primary">
      <CardContent>
        <div className="flex">
          <div>
            <div className="flex justify-center">
              <Avatar className="sm:h-30 sm:w-30 h-24 w-24 border border-secondary-foreground">
                <AvatarImage src={src} alt="Avatar" />
              </Avatar>
            </div>
            <CardHeader className="flex justify-start">
              <CardTitle className="text-lg font-bold">{name}</CardTitle>
              <CardDescription className="flex justify-start">
                {region}
              </CardDescription>
            </CardHeader>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex w-full justify-between">
              <span className="text-xs text-muted-foreground">
                Average Rank
              </span>
              <span className="text-lg font-medium">{totalRankMean}</span>
            </div>
            <div className="flex w-full justify-between">
              <span className="text-xs text-muted-foreground">
                Seasons Played
              </span>
              <span className="text-lg font-medium">{seasonsPlayed}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ManagerProfile;
