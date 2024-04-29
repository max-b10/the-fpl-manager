import IdForm from './IdForm';
import { IFormData } from '../types/FormData';

interface HeaderProps {
  headerText?: string;
  subText?: string;
  handleSubmit: (data: IFormData) => void;
}

const Header: React.FC<HeaderProps> = ({
  headerText,
  subText,
  handleSubmit,
}) => {
  return (
    <div className="flex flex-col justify-between px-6 py-6 sm:flex-row sm:px-6 lg:px-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight ">{headerText}</h1>
        <p className="text-s text-muted-foreground">{subText}</p>
      </div>
      <div className="mt-4 sm:mt-0">
        <IdForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Header;
