import { useQuery } from '@tanstack/react-query';
import type { User } from './index';
import { fetchUsers, fetchUserById, useUserStore } from './index';
import { useEffect } from 'react';

export const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false
  });
};

export const useUserProfile = (id: string) => {
  const setCurrentUser = useUserStore((state) => state.setCurrentUser);
  const currentUser = useUserStore((state) => state.currentUser);

  const query = useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUserById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5
  });

  useEffect(() => {
    if (query.data) {
      setCurrentUser(query.data);
    }
  }, [query.data, setCurrentUser]);

  return { ...query, currentUser };
};
