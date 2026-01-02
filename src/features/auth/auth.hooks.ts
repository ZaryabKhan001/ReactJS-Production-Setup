import type { User } from '@features/users/index';
import { createUser, type SignupFormData } from './index';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation<User, Error, SignupFormData>({
    mutationFn: (data) => createUser(data),
    onSuccess: (newUser) => {
      queryClient.invalidateQueries({ queryKey: ['users'] });

      queryClient.setQueryData(['user', newUser.id], newUser);
    },
    onError: (error) => {
      console.error('Failed to create user:', error.message);
    }
  });
};
