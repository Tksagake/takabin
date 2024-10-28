import create from 'zustand';

interface User {
  id: string;
  name: string;
  role: 'admin' | 'collector' | 'thrower';
  points: number;
}

interface State {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useStore = create<State>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));