import { Button } from '../../UI/molecules/Button/Button';
import { Input } from '../../UI/molecules/Input/Input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from '../../UI/organisms/Form/Form';
import { useForm } from 'react-hook-form';
import { IFormData } from '../../types/FormData';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import ButtonClick from '../Animations/ButtonClick';

interface IdFormProps {
  onSubmit: (data: IFormData) => void;
}

const IdForm = ({ onSubmit }: IdFormProps) => {
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const form = useForm({
    defaultValues: {
      id: '',
    },
  });

  const handleSubmit = form.handleSubmit(onSubmit);

  return (
    <Form {...form}>
      <form className="flex w-full justify-end" onSubmit={handleSubmit}>
        <FormField
          control={form.control}
          name="id"
          rules={{
            required: 'Enter Id',
            min: { value: 1, message: 'ID must be at least 1' },
            max: {
              value: 10819231,
              message: 'ID must be at most 10819231',
            },
          }}
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormControl>
                  <Input
                    type="number"
                    className="no-spinner w-full md:w-40"
                    placeholder={fplIdString}
                    {...field}
                  />
                </FormControl>
              </div>
            </FormItem>
          )}
        />

        <ButtonClick>
          <Button className="ml-2 md:w-24" type="submit">
            Change Id
          </Button>
        </ButtonClick>
      </form>
    </Form>
  );
};

export default IdForm;
