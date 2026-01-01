import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { SignupFormData, User } from '../schema/schema';
import { fetchUsers, fetchUser, createUser } from '../service/api';

export const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false
  });
};

export const useUser = (id: string) => {
  return useQuery<User, Error>({
    queryKey: ['user', id],
    queryFn: () => fetchUser(id),
    enabled: !!id,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false
  });
};

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
