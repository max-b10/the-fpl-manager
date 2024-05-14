import React, { ReactElement } from 'react';
import { Card } from '../../UI/organisms/Card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../UI/molecules/Popover/Popover';

interface TechStackCardProps {
  icon: ReactElement;
  title: string;
  description: string;
  comments: string;
}
const TechStackCard: React.FC<TechStackCardProps> = ({
  icon,
  title,
  description,
  comments,
}) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Card
          data-cy="tech-stack-card"
          className="sm:min-w-2/5 sm:min-w-2/5 flex h-full  min-w-full cursor-pointer flex-col items-center justify-between border border-primary px-4 py-4 hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800 md:px-2 md:py-3"
        >
          <div className="flex w-full items-center justify-between px-3">
            <div className="flex w-full items-center justify-between">
              <div className="text-muted-foreground">{title}</div>
              <div data-cy="icon" className="mr-2 text-primary">
                {icon}
              </div>
            </div>
          </div>
          <div className="mt-3 flex-grow px-3 py-2 text-left font-mono text-sm">
            {description}
          </div>
        </Card>
      </PopoverTrigger>
      <PopoverContent>{comments}</PopoverContent>
    </Popover>
  );
};
export default TechStackCard;
