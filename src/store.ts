import create from 'zustand';
import { clearUserFromStorage, saveUserToStorage } from './auth';
import { queryClient } from './pages/_app';

export type User = {
  token: string;
};

type StoreState = {
  user: User | undefined;
  setUser: (user: User) => void;
  clearUser: () => void;
  loading: boolean;
};

/**
 * The local/in-memory store.  Use this for "global" state (that is not coming
 * from react-query)
 */
export const useStore = create<StoreState>((set) => ({
  user: undefined,
  loading: true,
  setUser: (user) => {
    saveUserToStorage(user);
    set({ user, loading: false });
  },
  clearUser: () => {
    clearUserFromStorage();
    set({ user: undefined, loading: false });
    queryClient.clear();
  },
}));
