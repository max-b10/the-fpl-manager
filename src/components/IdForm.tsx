import { Button } from '../UI/molecules/Button/Button';
import { Input } from '../UI/molecules/Input/Input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../UI/organisms/Form/Form';
import { useForm } from 'react-hook-form';
import { IFormData } from '../types/FormData';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

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
      <form
        className="-mx-auto flex w-full items-center"
        onSubmit={handleSubmit}
      >
        <FormField
          control={form.control}
          name="id"
          rules={{
            required: 'ID is required',
            min: { value: 1, message: 'ID must be at least 1' },
            max: {
              value: 10819231,
              message: 'ID must be at most 10819231',
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  className="no-spinner w-full md:w-40"
                  placeholder={fplIdString}
                  {...field}
                />
              </FormControl>
              {error && <FormMessage>{error.message}</FormMessage>}
            </FormItem>
          )}
        />
        <Button className="ml-2 md:w-24" type="submit">
          Change Id
        </Button>
      </form>
    </Form>
  );
};

export default IdForm;
