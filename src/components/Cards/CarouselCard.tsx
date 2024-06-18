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

  const ListItem = ({ label, value }: { label: string; value: string }) => (
    <li className="flex items-center justify-between">
      <span className="mr-4 text-muted-foreground">{label}</span>
      <span>{value}</span>
    </li>
  );

  return (
    <Card className="flex flex-grow flex-col border border-primary">
      <CardHeader className="mb-4 flex flex-row items-center justify-between space-y-0 rounded-tl-lg rounded-tr-lg bg-muted/50 px-6 py-3">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>

      <CardContent className="flex">
        <div className="flex min-w-full justify-between">
          <ul className="grid w-full gap-4">
            <ListItem label="Points" value={formattedTotalPoints} />
            <ListItem label="Rank" value={formattedRank} />
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarouselCard;
