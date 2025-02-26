import { create } from "zustand";

export interface LanguageStore {
  language: string;
  setLanguage: (language: string) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: 'es',
  setLanguage: (language: string) => set({ language }),
}))