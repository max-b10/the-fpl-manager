import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../UI/organisms/Card';
import { Avatar, AvatarImage } from '../../UI/molecules/Avatar/Avatar';
import { CircleUser } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../UI/molecules/Tooltip/Tooltip';
import { IFormData } from '../../types/FormData';
import { useForm } from 'react-hook-form';

interface DashboardCardProps {
  name?: string;
  seasonsPlayed?: number;
  totalRankMean?: string;
  id?: string;
  src?: string;
  onSubmit: (data: IFormData) => void;
  showIcon: boolean;
}

const ManagerCard: React.FC<DashboardCardProps> = ({
  name,
  seasonsPlayed,
  totalRankMean,
  src,
  id,
  onSubmit,
  showIcon,
}) => {
  const { handleSubmit: handleFormSubmit, getValues } = useForm({
    defaultValues: {
      id: id,
    },
  });

  const handleClick = () => {
    handleFormSubmit((data) => {
      const updatedId = getValues('id') || ''; // Get the updated id from the form, or use '' if it's undefined
      onSubmit({ ...data, id: updatedId }); // Pass the updated id to onSubmit
    })();
  };
  return (
    <Card className="relative w-64 max-w-[90vw] border border-primary p-4 sm:max-w-[425px] md:w-full">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {showIcon && (
              <div
                onClick={handleClick}
                className="absolute right-2 top-2 h-6 w-6 cursor-pointer overflow-hidden rounded-full hover:bg-slate-100/50"
              >
                <CircleUser />
              </div>
            )}
          </TooltipTrigger>
          <TooltipContent>
            <p>View profile</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="flex justify-center">
        <Avatar className="h-32 w-32 border border-secondary-foreground sm:flex">
          <AvatarImage src={src} alt="Avatar" />
        </Avatar>
      </div>
      <CardHeader className="items-centerspace-y-0 flex justify-center pb-2">
        <CardTitle className=" text-center text-2xl font-bold">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="flex w-full justify-between">
            <span className="text-xs text-muted-foreground">Average Rank:</span>
            <span className="text-lg font-medium">{totalRankMean}</span>
          </div>
          <div className="flex w-full justify-between">
            <span className="text-xs text-muted-foreground">
              Seasons Played
            </span>
            <span className="text-lg font-medium">{seasonsPlayed}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ManagerCard;
