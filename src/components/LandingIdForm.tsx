import { Button } from '../UI/molecules/Button/Button';
import { Input } from '../UI/molecules/Input/Input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../UI/organisms/Card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../UI/organisms/Form/Form';
import { useForm } from 'react-hook-form';
import { IFormData } from '../types/FormData';
import { motion } from 'framer-motion';

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
      </CardHeader>
      <Form {...form}>
        <form onSubmit={handleSubmit} className="mr-5 mt-1 gap-x-4">
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
            <motion.div
              className="w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button data-cy="submit-button" className="w-full" type="submit">
                Enter
              </Button>
            </motion.div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default LandingIdForm;
