import { apiClient } from '@lib/axiosInstance';
import { userSchema } from '../schema/schema';

export const fetchUsers = async () => {
  const res = await apiClient.get('/users');
  return userSchema.array().parse(res.data);
};

export const fetchUser = async (id: string) => {
  const res = await apiClient.get(`/users/${id}`);
  return userSchema.parse(res.data);
};

export const createUser = async (data: { name: string; email: string }) => {
  const res = await apiClient.post('/users', data);
  return userSchema.parse(res.data);
};
