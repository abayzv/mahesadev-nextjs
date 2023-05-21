import { create } from "zustand";
import { createTicketSlice, TicketSlice } from "./slices/createTicketSlice";
import {
  createTicketOrderSlice,
  TicketOrderSlice,
} from "./slices/createTicketOrderSlice";
import { createTrainSlice, TrainSlice } from "./slices/createTrainSlice";
import { createSearchSlice, SearchSlice } from "./slices/createSearchSlice";
import { persist, createJSONStorage } from "zustand/middleware";

type StoreState = TicketSlice & TicketOrderSlice & TrainSlice;
type SearchState = SearchSlice;

export const useAppStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createTicketSlice(...a),
      ...createTicketOrderSlice(...a),
      ...createTrainSlice(...a),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useSearchStore = create<SearchState>()((...a) => ({
  ...createSearchSlice(...a),
}));
