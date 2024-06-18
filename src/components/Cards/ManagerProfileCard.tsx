import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../UI/organisms/Card';
import { Avatar, AvatarImage } from '../../UI/molecules/Avatar/Avatar';

interface IManagerProfileProps {
  name: string;
  src?: string;
}

const ManagerProfileCard: React.FC<IManagerProfileProps> = ({ name, src }) => {
  return (
    <Card className="flex h-full min-w-full flex-grow flex-col border border-primary">
      <CardHeader className="mb-4 flex flex-row items-start rounded-tl-lg rounded-tr-lg bg-muted/50 px-4 py-3">
        <div className="flex w-full justify-center">
          <CardTitle className="mb-2 flex items-center overflow-hidden whitespace-nowrap text-lg">
            {name}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex w-full justify-center">
          <Avatar className="sm:h-30 sm:w-30 h-24 w-24 border border-secondary-foreground">
            <AvatarImage src={src} alt="Avatar" />
          </Avatar>
        </div>
      </CardContent>
    </Card>
  );
};

export default ManagerProfileCard;
