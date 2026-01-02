import { apiClient } from '@lib/axiosInstance';
import { userSchema } from '@features/users/index';

export const createUser = async (data: { name: string; email: string }) => {
  const res = await apiClient.post('/users', data);
  return userSchema.parse(res.data);
};
