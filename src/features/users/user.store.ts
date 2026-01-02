import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface User {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  avatar?: string;
}

interface UserState {
  users: User[];
  currentUser: User | null;
  setUsers: (users: User[]) => void;
  setCurrentUser: (user: User) => void;
  clearCurrentUser: () => void;
  addUser: (user: User) => void;
  clearUsers: () => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        users: [],
        currentUser: null,
        setUsers: (users) => set({ users }),
        addUser: (user) => set((state) => ({ users: [...state.users, user] })),
        clearUsers: () => set({ users: [] }),
        setCurrentUser: (user) => set({ currentUser: user }),
        clearCurrentUser: () => set({ currentUser: null })
      }),
      { name: 'user-storage' }
    )
  )
);
