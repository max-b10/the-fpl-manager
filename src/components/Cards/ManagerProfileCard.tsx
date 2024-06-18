import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../UI/organisms/Card';
import { Avatar, AvatarImage } from '../../UI/molecules/Avatar/Avatar';
import { CircleUser } from 'lucide-react';
import { useNavigationWithId } from '../../hooks/useNavigationWithId';
import { Button } from '../../UI/molecules/Button/Button';

interface IManagerProfileProps {
  name?: string;
  region?: string;
  seasonsPlayed?: number;
  totalRankMean?: number;
  totalPointsMean?: number;
  id: string;
  src?: string;
}

const ManagerProfileCard: React.FC<IManagerProfileProps> = ({
  name,
  region,
  seasonsPlayed,
  totalRankMean,
  totalPointsMean,
  src,
  id,
}) => {
  const navigateWithId = useNavigationWithId();

  const handleClick = () => {
    const data = { id };
    navigateWithId(data);
  };
  const formattedTotalRankMean = totalRankMean?.toLocaleString();
  const formattedTotalPointsMean = totalPointsMean?.toLocaleString();

  return (
    <Card className="flex min-w-full flex-grow flex-col border border-primary">
      <CardHeader
        className={`mb-4 flex flex-row items-start rounded-tl-lg rounded-tr-lg bg-muted/50 px-4 py-3 `}
      >
        <div className={`flex w-full justify-between `}>
          <div>
            <CardTitle className="mb-2 flex items-center">{name}</CardTitle>
            <CardDescription>{region}</CardDescription>
          </div>

          <Button
            onClick={handleClick}
            className="m-0 flex items-start justify-center rounded-full bg-transparent p-0 text-primary hover:cursor-pointer hover:bg-transparent"
          >
            <CircleUser className="h-6 w-6 "></CircleUser>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-3">
        <div className="flex min-w-full justify-between">
          <div>
            <div className="flex justify-center">
              <Avatar className="sm:h-30 sm:w-30 h-24 w-24 border border-secondary-foreground">
                <AvatarImage src={src} alt="Avatar" />
              </Avatar>
            </div>
          </div>
          <div className="mr-2 flex flex-grow justify-end">
            <ul className="jus grid gap-4">
              <li className="flex items-center justify-between">
                <span className="mr-4 text-muted-foreground md:mr-6">
                  Seasons Played
                </span>
                <span>{seasonsPlayed}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="mr-4 text-muted-foreground md:mr-6">
                  Average Rank
                </span>
                <span>{formattedTotalRankMean}</span>
              </li>

              <li className="flex items-center justify-between">
                <span className="mr-4 text-muted-foreground md:mr-6">
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
