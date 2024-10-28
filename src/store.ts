// store.ts
import create from 'zustand';

type UserRole = 'thrower' | 'collector' | 'admin';

interface User {
  id: string;
  name: string;
  role: UserRole;
  points: number;
}

interface StoreState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useStore = create<StoreState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
