import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../UI/organisms/Card';
import { ReactNode } from 'react';

interface DashboardCardProps {
  title: string;
  icon: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
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
    <CardContent>
      <div className="text-2xl font-bold">{content}</div>
      <div className="flex text-xs text-muted-foreground">{footer}</div>
    </CardContent>
  </Card>
);

export default DashboardCard;
