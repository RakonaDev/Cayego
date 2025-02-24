import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Token, TokenActions } from "../interfaces/TokenInterface";

export const useTokenAccess = create<Token & TokenActions>()(
  persist(
    (set) => ({
      token: '',
      setToken: (newToken: string) => set({ token: newToken }),
      clearToken: () => set({ token: '' }),
    }),
    {
      name: 'access_token', // Nombre único para el almacenamiento persistente
    }
  )
);