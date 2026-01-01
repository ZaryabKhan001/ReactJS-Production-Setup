import { z } from 'zod';

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email()
});

export type User = z.infer<typeof userSchema>;

export const signupSchema = z
  .object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }).max(50, { message: 'Name must be less than 50 characters' }),

    email: z.string().email({ message: 'Invalid email address' }),

    password: z.string().min(6, { message: 'Password must be at least 6 characters' }).max(100, { message: 'Password is too long' }),

    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  });

export type SignupFormData = z.infer<typeof signupSchema>;
