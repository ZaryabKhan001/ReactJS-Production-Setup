import { Form, FormInput, Button } from '@shared/components/index';
import { signupSchema, type SignupFormData } from '../auth.schema';
import { useCreateUser } from '../auth.hooks';
import { signupFields } from '../auth.constants';

export function SignupForm() {
  const { mutate, isPending } = useCreateUser();

  const onSubmit = (data: SignupFormData) => {
    mutate(data);
  };

  return (
    <Form
      schema={signupSchema}
      onSubmit={onSubmit}>
      {signupFields.map((field) => (
        <FormInput
          key={field.name}
          name={field.name}
          label={field.label}
          type={field.type}
        />
      ))}

      <Button
        type="submit"
        isLoading={isPending}
        variant="primary"
        size="md">
        Sign up
      </Button>
    </Form>
  );
}
