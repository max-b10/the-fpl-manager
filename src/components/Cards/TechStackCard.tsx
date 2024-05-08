import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../UI/organisms/Card';

interface TechStackCardProps {
  title: string;
  Icon: React.ReactElement;
  description: string;
}

const TechStackCard: React.FC<TechStackCardProps> = ({
  title,
  Icon,
  description,
}) => (
  <Card className="w-48 max-w-[70vw] border border-primary p-4 sm:max-w-[325px] md:w-full">
    <div className="flex justify-center">{Icon}</div>
    <CardHeader className="items-centerspace-y-0 flex justify-center pb-2">
      <CardTitle className=" text-center text-xl font-bold">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col items-center gap-4 py-4">
        <div className="flex w-full justify-between">
          <span className="text-lg font-medium">{description}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default TechStackCard;
