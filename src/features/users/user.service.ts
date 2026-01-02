import { apiClient } from '@lib/axiosInstance';
import { userSchema } from './index';
import type { User } from './index';

export const fetchUsers = async () => {
  try {
    const res = await apiClient.get('/users');

    const data = Array.isArray(res.data) ? res.data : [];

    return userSchema.array().parse(data);
  } catch (error) {
    console.log('fetchUsers error:', error);
    return []; // fallback to empty array
  }
};

export const fetchUserById = async (id: string): Promise<User | null> => {
  try {
    const res = await apiClient.get(`/users/${id}`);

    const data = res.data && typeof res.data === 'object' ? res.data : {};

    try {
      return userSchema.parse(data);
    } catch (zodError) {
      console.log('Zod validation failed for user:', zodError);
      return null;
    }
  } catch (error) {
    console.log('fetchUserById error:', error);
    return null;
  }
};
