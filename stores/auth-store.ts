import * as SecureStore from 'expo-secure-store';
import { create } from 'zustand';

interface AuthState {
  user: string | null;
  isLoading: boolean;
  login: (email: string) => void;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,

  login: (email) => {
    set({ user: email });
    SecureStore.setItemAsync('userEmail', email);
  },

  logout: () => {
    set({ user: null });
    SecureStore.deleteItemAsync('userEmail');
  },

  checkAuth: async () => {
    set({ isLoading: true });
    try {
      const email = await SecureStore.getItemAsync('userEmail');
      set({ user: email || null });
    } catch (e) {
      console.error('Failed to read userEmail:', e);
      set({ user: null });
    } finally {
      set({ isLoading: false });
    }
  },
}));
