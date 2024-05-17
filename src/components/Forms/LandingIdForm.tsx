import { Button } from '../../UI/molecules/Button/Button';
import { Input } from '../../UI/molecules/Input/Input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../UI/organisms/Card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../../UI/organisms/Form/Form';
import { useForm } from 'react-hook-form';
import { IFormData } from '../../types/FormData';
import { SquareArrowOutUpRight } from 'lucide-react';
import ButtonClick from '../Animations/ButtonClick';

interface IdFormProps {
  onSubmit: (data: IFormData) => void;
}

const LandingIdForm = ({ onSubmit }: IdFormProps) => {
  const form = useForm({
    defaultValues: {
      id: '',
    },
  });

  const handleSubmit = form.handleSubmit(onSubmit);

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle data-cy="landing-title" className="text-2xl">
          The FPL Manager
        </CardTitle>
        <CardDescription data-cy="landing-description">
          Enter your Fantasy Premier League id to analyse your manager history
          and more!
        </CardDescription>
        <a
          href="https://fpl.team/find-id/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center text-sm text-blue-500 "
        >
          <span className="cursor-pointer text-sm text-blue-500 underline ">
            How do I find my id?{' '}
          </span>
          <span>
            <SquareArrowOutUpRight className="ml-1 h-3 w-3" />
          </span>
        </a>
        <div className="flex">
          <span className="mr-1 text-sm text-muted-foreground">
            Or try mine:
          </span>
          <span className="text-sm text-primary">115660</span>
        </div>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={handleSubmit} className="mr-5 gap-x-4">
          <CardContent className="grid gap-4">
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
                      data-cy="input-id"
                      className="no-spinner"
                      type="number"
                      placeholder="e.g. 123456"
                      {...field}
                    />
                  </FormControl>
                  {error && (
                    <FormMessage data-cy="form-message">
                      {error.message}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <ButtonClick>
              <Button data-cy="submit-button" className="w-full" type="submit">
                Enter
              </Button>
            </ButtonClick>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default LandingIdForm;
