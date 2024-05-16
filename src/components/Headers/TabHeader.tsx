import { CircleArrowLeft } from 'lucide-react';

interface TabHeaderProps {
  headerText?: string;
  subText?: string;
  showBackIcon?: boolean;
  onBackClick?: () => void;
}

const TabHeader: React.FC<TabHeaderProps> = ({
  headerText,
  subText,
  showBackIcon = false,
  onBackClick,
}) => {
  return (
    <div
      data-cy="header"
      className="flex flex-col-reverse justify-between px-6 pb-6 pt-0 sm:flex-row sm:px-6 lg:px-8"
    >
      <div className="flex flex-col items-start sm:flex-row sm:items-center">
        {showBackIcon && (
          <CircleArrowLeft
            className="mr-3 h-8 w-8 cursor-pointer"
            onClick={onBackClick}
          />
        )}
        <div>
          <h1 className="text-3xl font-bold tracking-tight ">{headerText}</h1>
          <p className="text-s text-muted-foreground">{subText}</p>
        </div>
      </div>
    </div>
  );
};

export default TabHeader;
