import { StateCreator } from "zustand";
import { Ticket } from "./createTicketSlice";

export interface TicketOrderSlice {
  ticketOrders: Ticket;
  setTicketOrder: (ticketOrder: Ticket) => void;
}

const idFromTimestamp = () => {
  return Math.floor(Date.now() / 1000);
};

export const createTicketOrderSlice: StateCreator<TicketOrderSlice> = (
  set
) => ({
  ticketOrders: {
    id: new Date().getTime(),
    passenger: "",
    seat: "",
    wagon: "",
    train: "",
    date: new Date().toISOString().slice(0, 10),
    departure: "",
    destination: "",
    estimatedTime: "",
    status: "NOT PAID",
    price: 0,
  },
  setTicketOrder: (ticketOrder) => {
    set((state) => ({ ticketOrders: ticketOrder }));
  },
});
