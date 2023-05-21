import { StateCreator } from "zustand";

export interface Search {
  [key: string]: string | number;
}

export interface SearchSlice {
  search: Search;
  setSearch: (search: Search) => void;
}

export const createSearchSlice: StateCreator<SearchSlice> = (set) => ({
  search: {},
  setSearch: (search) => {
    set((state) => ({ search: search }));
  },
});
