import IdForm from './IdForm';
import { IFormData } from '../types/FormData';
import { CircleArrowLeft } from 'lucide-react';

interface HeaderProps {
  headerText?: string;
  subText?: string;
  handleSubmit: (data: IFormData) => void;
  showIdForm?: boolean;
  showBackIcon?: boolean;
  onBackClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  headerText,
  subText,
  handleSubmit,
  showBackIcon = false,
  showIdForm = true,
  onBackClick,
}) => {
  return (
    <div className="flex flex-col justify-between px-6 py-6 sm:flex-row sm:px-6 lg:px-8">
      <div className="flex items-center">
        {showBackIcon && (
          <CircleArrowLeft
            className="mr-3 cursor-pointer text-primary"
            onClick={onBackClick}
          />
        )}
        <div>
          <h1 className="text-3xl font-bold tracking-tight ">{headerText}</h1>
          <p className="text-s text-muted-foreground">{subText}</p>
        </div>
      </div>
      {showIdForm && (
        <div className="mt-4 sm:mt-0">
          <IdForm onSubmit={handleSubmit} />
        </div>
      )}
    </div>
  );
};

export default Header;
