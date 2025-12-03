// import { User } from "@/core/domain";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
}
interface AuthStore {
  isAuthenticate: boolean;
  user: User | null;
  token: string | null;
  setLogin: (user: User, token: string) => void;
  reset: () => void;
}
export const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      isAuthenticate: true,
      user: null,
      token: null,
      setLogin: (user: User, token: string) => set({ isAuthenticate: true, user, token }),
      reset: () => set({ isAuthenticate: false, user: null, token: null }),
    }),
    {
      name: "stateAuth",
    }
  )
);
