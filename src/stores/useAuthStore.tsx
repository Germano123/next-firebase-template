import { LoginCredentials, loginWithEmail, RegisterCredentials, registerWithEmail } from '@/services/auth/auth.usecase';
import { User } from 'firebase/auth';
import { create } from 'zustand';

interface LoggedUserState {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
}

const useLoginStore = create<LoggedUserState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (credentials) => {
    try {
      const user = await loginWithEmail(credentials);
      set({ user, isAuthenticated: true });
    } catch (error) {
      console.error("Erro no login:", error);
    }
  },

  register: async (credentials) => {
    try {
      await registerWithEmail(credentials);
    } catch (error) {
      console.error("Erro no registro:", error);
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));

export default useLoginStore;
