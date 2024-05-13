import React, { ReactElement } from 'react';
import { Card } from '../../UI/organisms/Card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../../UI/molecules/Collapsible/Collapsible';

interface TechStackCardProps {
  icon: ReactElement;
  title: string;
  description: string;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const TechStackCard: React.FC<TechStackCardProps> = ({
  icon,
  title,
  description,
  isOpen,
  onOpenChange,
}) => {
  return (
    <Card
      data-cy="tech-stack-card"
      className="sm:min-w-2/5 sm:min-w-2/5 flex min-w-full cursor-pointer flex-col items-center justify-between border border-primary p-4 px-4 hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800"
    >
      <Collapsible
        open={isOpen}
        onOpenChange={onOpenChange}
        className="flex w-full flex-col space-y-2"
      >
        <CollapsibleTrigger asChild>
          <div className="flex w-full items-center justify-between px-3">
            <div className="flex w-full items-center justify-between">
              <div data-cy="icon" className="mr-2 text-primary">
                {icon}
              </div>
              <div>{title}</div>
            </div>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            {description}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default TechStackCard;
