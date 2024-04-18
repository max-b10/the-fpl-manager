import { Button } from '../UI/molecules/Button/Button';
import { Input } from '../UI/molecules/Input/Input';
import { Card, CardContent, CardFooter } from '../UI/organisms/Card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../UI/organisms/Form';
import { useForm } from 'react-hook-form';
import { IFormData } from '../types/FormData';

interface IdFormProps {
  onSubmit: (data: IFormData) => void;
}

const IdForm = ({ onSubmit }: IdFormProps) => {
  const form = useForm({
    defaultValues: {
      id: '',
    },
  });

  const handleSubmit = form.handleSubmit(onSubmit);

  return (
    <Card className="m-auto flex border-primary">
      <Form {...form}>
        <form
          className="-mx-auto -mb-2 mt-3 flex w-full items-center justify-between"
          onSubmit={handleSubmit}
        >
          <CardContent>
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
                      className="w-full md:w-40"
                      placeholder="e.g. 123456"
                      {...field}
                    />
                  </FormControl>
                  {error && <FormMessage>{error.message}</FormMessage>}
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button className="w-full md:-ml-6 md:w-24" type="submit">
              Change Id
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default IdForm;
