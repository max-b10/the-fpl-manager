import { Button } from '../UI/molecules/Button/Button';
import { Input } from '../UI/molecules/Input/Input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from '../UI/organisms/Form/Form';
import { useForm } from 'react-hook-form';
import { IFormData } from '../types/FormData';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { motion } from 'framer-motion';

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
        className="-mx-auto flex w-full min-w-fit items-center"
        onSubmit={handleSubmit}
      >
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
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <Button className="ml-2 md:w-24" type="submit">
            Change Id
          </Button>
        </motion.div>
      </form>
    </Form>
  );
};

export default IdForm;
