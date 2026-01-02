import { userSchema, type User } from './user.schema';
import { useUsers, useUserProfile } from './user.hooks';
import { fetchUserById, fetchUsers } from './user.service';
import { useUserStore } from './user.store';
import { UserList } from './components/UserList';
import { UserProfile } from './components/userProfile';
import { Dashboard } from './pages/Dashboard';

export { userSchema, useUsers, fetchUserById, fetchUsers, useUserStore, UserList, Dashboard, useUserProfile, UserProfile };
export type { User };
