import { create } from 'zustand'
import { DriverPaginate } from '../interfaces/DriversInterface'

export const useDriverStore = create<DriverPaginate>((set) => ({
  currentPage: 1,
  setCurrentPage: (page: number) => set({ currentPage: page }),
}))
