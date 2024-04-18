import { Card, CardContent, CardHeader, CardTitle } from '../UI/organisms/Card';
import { ReactNode } from 'react';

interface CarouselCardProps {
  title: string;
  icon: ReactNode;
  content: ReactNode;
  footer: ReactNode;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  icon,
  content,
  footer,
}) => (
  <Card className="border-primary">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>

    <CardContent className="flex aspect-square items-center justify-center p-6">
      <div className="flex flex-col">
        <div>
          <span className="text-2xl font-bold">{content}</span>
          <span className="text-xs text-muted-foreground"> pts</span>
        </div>
        <div>
          <span className="text-xs font-bold">{footer}</span>
          <span className="text-xs text-muted-foreground"> rank</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default CarouselCard;
