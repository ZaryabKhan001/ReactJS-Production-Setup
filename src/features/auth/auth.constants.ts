import type { SignupFormData } from './index';

type FieldConfig<T> = {
  name: keyof T;
  label: string;
  type: string;
};

export const signupFieldsObj = {
  name: { name: 'name', label: 'Name', type: 'text' },
  email: { name: 'email', label: 'Email', type: 'email' },
  password: { name: 'password', label: 'Password', type: 'password' },
  confirmPassword: { name: 'confirmPassword', label: 'Confirm Password', type: 'password' }
} as const satisfies { [K in keyof SignupFormData]: FieldConfig<SignupFormData> };

export const signupFields = Object.values(signupFieldsObj);
