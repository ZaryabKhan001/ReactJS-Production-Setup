import { useUserProfile } from '../index';

interface UserProfileProps {
  userId: string;
}

export const UserProfile = ({ userId }: UserProfileProps) => {
  const { currentUser, isLoading, isError, error } = useUserProfile(userId);

  if (isLoading) return <p>Loading user profile...</p>;
  if (isError) return <p className="text-red-500">Error: {error?.message}</p>;
  if (!currentUser) return <p>User not found.</p>;

  return (
    <div className="p-4 border rounded shadow-md max-w-md mx-auto">
      <div className="flex items-center space-x-4">
        {currentUser.avatar ? (
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-16 h-16 rounded-full"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold">{currentUser.name.charAt(0)}</div>
        )}
        <div>
          <h2 className="text-xl font-semibold">{currentUser.name}</h2>
          {currentUser.email && <p className="text-gray-500">{currentUser.email}</p>}
        </div>
      </div>
    </div>
  );
};
