import { StateCreator } from "zustand";

export interface Ticket {
  id: number;
  passenger: string;
  seat: string;
  wagon: string;
  train: string;
  date: string;
  departure: string;
  destination: string;
  estimatedTime: string;
  status: string;
  price: number;
}

export interface TicketSlice {
  tickets: Ticket[];
  addTicket: (ticket: Ticket) => void;
  removeTicket: (id: number) => void;
  updateTicket: (ticket: Ticket) => void;
}

export const createTicketSlice: StateCreator<TicketSlice> = (set) => ({
  tickets: [],
  addTicket: (ticket) => {
    set((state) => ({ tickets: [...state.tickets, ticket] }));
  },
  removeTicket: (id) => {
    set((state) => ({
      tickets: state.tickets.filter((ticket) => ticket.id !== id),
    }));
  },
  updateTicket: (ticket) => {
    set((state) => ({
      tickets: state.tickets.map((t) => {
        if (t.id === ticket.id) {
          return ticket;
        }
        return t;
      }),
    }));
  },
});
