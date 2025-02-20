import { create } from 'zustand'
import { ServicePaginate } from '../interfaces/ServiceInterfaces'
export const useServiceStore = create<ServicePaginate>((set) => ({
  currentPage: 1,
  setCurrentPage: (page: number) => set({ currentPage: page }),
}))
