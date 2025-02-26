import { create } from "zustand";

export interface ServiceSelected {
  serviceSelected: number;
  setServiceSelected: (serviceSelected: number) => void;
}

export const useServiceSelected = create<ServiceSelected>((set) => ({
  serviceSelected: 1,
  setServiceSelected: (serviceSelected: number) => set({ serviceSelected }),
}))