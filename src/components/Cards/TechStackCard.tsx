import { ReactElement } from 'react';
import { Card } from '../../UI/organisms/Card';

interface TechStackCardProps {
  icon: ReactElement;
}

const TechStackCard: React.FC<TechStackCardProps> = ({ icon }) => (
  <Card className="flex items-center justify-center border border-primary p-4 sm:max-w-[325px]">
    <div className="text-primary">{icon}</div>
  </Card>
);

export default TechStackCard;
