import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../UI/organisms/Card';
import { CircleUser } from 'lucide-react';
import { useNavigationWithId } from '../../hooks/useNavigationWithId';
import { Button } from '../../UI/molecules/Button/Button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../UI/molecules/Tooltip/Tooltip';

interface IManagerSummaryProps {
  seasonsPlayed?: number;
  totalRankMean?: number;
  totalPointsMean?: number;
  id: string;
  showUserIcon?: boolean;
}

const ManagerSummaryCard: React.FC<IManagerSummaryProps> = ({
  seasonsPlayed,
  totalRankMean,
  totalPointsMean,
  id,
  showUserIcon = false,
}) => {
  const navigateWithId = useNavigationWithId();

  const handleClick = () => {
    const data = { id };
    navigateWithId(data);
  };
  const formattedTotalRankMean = totalRankMean?.toLocaleString();
  const formattedTotalPointsMean = totalPointsMean?.toLocaleString();

  return (
    <Card className="flex min-w-full flex-grow flex-col border border-primary">
      <CardHeader
        className={`mb-4 flex flex-row items-start rounded-tl-lg rounded-tr-lg bg-muted/50 px-4 py-3 `}
      >
        <div className={`flex w-full justify-between `}>
          <div>
            <CardTitle className="mb-2 flex items-center text-lg">
              Manager Summary
            </CardTitle>
          </div>
          <TooltipProvider>
            {showUserIcon && (
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    onClick={handleClick}
                    className="m-0 flex items-start justify-center rounded-full bg-transparent p-0 text-primary hover:cursor-pointer hover:bg-transparent"
                  >
                    <CircleUser className="h-6 w-6 "></CircleUser>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Manager</p>
                </TooltipContent>
              </Tooltip>
            )}
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent className="px-3">
        <div className="flex min-w-full justify-between">
          <div className="mr-2 flex flex-grow">
            <ul className="jus grid gap-4">
              <li className="flex items-center justify-between">
                <span className="mr-4 text-muted-foreground md:mr-6">
                  Seasons played
                </span>
                <span>{seasonsPlayed}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="mr-4 text-muted-foreground md:mr-6">
                  Average rank
                </span>
                <span>{formattedTotalRankMean}</span>
              </li>

              <li className="flex items-center justify-between">
                <span className="mr-4 text-muted-foreground md:mr-6">
                  Mean points
                </span>
                <span>{formattedTotalPointsMean}</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ManagerSummaryCard;
