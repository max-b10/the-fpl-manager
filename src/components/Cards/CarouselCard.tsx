import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../UI/organisms/Card';
import { ReactNode } from 'react';

interface ICarouselCardProps {
  title: string;
  icon: ReactNode;
  totalPoints: number;
  rank: number;
}

const CarouselCard: React.FC<ICarouselCardProps> = ({
  title,
  icon,
  totalPoints,
  rank,
}) => {
  const formattedTotalPoints = totalPoints.toLocaleString();
  const formattedRank = rank.toLocaleString();
  return (
    <Card className="border-primary">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>

      <CardContent className="flex items-center justify-center p-6">
        <div className="flex flex-col">
          <div>
            <span className="text-2xl font-bold">{formattedTotalPoints}</span>
            <span className="text-xs text-muted-foreground"> pts</span>
          </div>
          <div>
            <span className="text-xs font-bold">{formattedRank}</span>
            <span className="text-xs text-muted-foreground"> rank</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarouselCard;
