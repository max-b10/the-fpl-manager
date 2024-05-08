import { ReactElement } from 'react';
import { Card } from '../../UI/organisms/Card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../UI/molecules/Tooltip/Tooltip';
interface TechStackCardProps {
  icon: ReactElement;
  title: string;
}

const TechStackCard: React.FC<TechStackCardProps> = ({ icon, title }) => (
  <TooltipProvider>
    <Card className="flex cursor-pointer items-center justify-center border border-primary p-4 hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800 sm:max-w-[325px]">
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="text-primary">{icon}</div>
          {/* <div
              onClick={handleClick}
              className="absolute right-2 top-2 h-6 w-6 cursor-pointer overflow-hidden rounded-full hover:bg-slate-100/50"
            >
            </div> */}
        </TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </Card>
  </TooltipProvider>
);

export default TechStackCard;
