import { useUsers } from '../user.hooks';

export const UserList = () => {
  const { data: users, isLoading, isError, error } = useUsers();

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  return (
    <div>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
