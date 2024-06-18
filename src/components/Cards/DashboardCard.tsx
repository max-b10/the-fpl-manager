import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../UI/organisms/Card';
import { ReactNode } from 'react';

interface DashboardCardProps {
  title: string;
  icon: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
  'data-cy'?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  icon,
  content,
  footer,
  'data-cy': dataCy,
}) => (
  <Card data-cy={dataCy} className="border-primary">
    <CardHeader className="mb-4 flex flex-row items-center justify-between rounded-tl-lg rounded-tr-lg bg-muted/50 px-4 py-3">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <div></div>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{content}</div>
      <div className="flex text-xs text-muted-foreground">{footer}</div>
    </CardContent>
  </Card>
);

export default DashboardCard;
