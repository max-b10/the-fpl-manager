import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../UI/organisms/Card';
import { Avatar, AvatarImage } from '../UI/molecules/Avatar/Avatar';

import { IFormData } from '../types/FormData';

interface IManagerProfileProps {
  name?: string;
  region?: string;
  seasonsPlayed?: number;
  totalRankMean?: string;
  id?: string;
  src?: string;
  onSubmit: (data: IFormData) => void;
  showIcon: boolean;
  reverse?: boolean;
}

const ManagerProfile: React.FC<IManagerProfileProps> = ({
  name,
  region,
  seasonsPlayed,
  totalRankMean,
  src,
  reverse,
  // id,
  // onSubmit,
  // showIcon,
}) => {
  return (
    <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
      <div>
        <div className="flex justify-center">
          <Avatar className="h-32 w-32 border border-secondary-foreground sm:flex">
            <AvatarImage src={src} alt="Avatar" />
          </Avatar>
        </div>
        <CardHeader className="items-centerspace-y-0 flex justify-center pb-2">
          <CardTitle className=" text-center text-2xl font-bold">
            {name}
          </CardTitle>
          <CardDescription>{region}</CardDescription>
        </CardHeader>
      </div>

      <Card
        className={`border border-primary p-4  ${reverse ? 'flex-col-reverse' : ''}`}
      >
        <CardContent>
          <div className="flex flex-col items-center gap-4 py-4">
            <div
              className={`flex w-full justify-between ${reverse ? 'flex-row-reverse' : ''}`}
            >
              <span className="text-xs text-muted-foreground">
                Average Rank
              </span>
              <span className="text-lg font-medium">{totalRankMean}</span>
            </div>
            <div
              className={`flex w-full justify-between ${reverse ? 'flex-row-reverse' : ''}`}
            >
              <span className="text-xs text-muted-foreground">
                Seasons Played
              </span>
              <span className="text-lg font-medium">{seasonsPlayed}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManagerProfile;
