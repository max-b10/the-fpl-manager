import { Card, CardContent, CardHeader, CardTitle } from '../UI/organisms/Card';
import { Avatar, AvatarImage } from '../UI/molecules/Avatar/Avatar';

interface DashboardCardProps {
  name?: string;
  totalRankMean?: string;
  src?: string;
}
const ManagerCard: React.FC<DashboardCardProps> = ({
  name,
  totalRankMean,
  src,
}) => (
  <Card className="w-64 max-w-[90vw] border border-primary p-4 sm:max-w-[425px] md:w-full">
    <div className="flex justify-center">
      <Avatar className="h-32 w-32 border border-secondary-foreground sm:flex">
        <AvatarImage src={src} alt="Avatar" />
      </Avatar>
    </div>
    <CardHeader className="items-centerspace-y-0 flex justify-center pb-2">
      <CardTitle className=" text-center text-2xl font-bold">{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col items-center gap-4 py-4">
        <div className="flex w-full justify-between">
          <span className="text-xs text-muted-foreground">Average Rank:</span>
          <span className="text-lg font-medium">{totalRankMean}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);
export default ManagerCard;
