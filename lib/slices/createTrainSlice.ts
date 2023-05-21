import { StateCreator } from "zustand";

export interface Wagon {
  id: number;
  name: string;
  type: string;
  totalSeats: number;
  seatsBooked: Array<number>;
}

export interface Train {
  id: number;
  name: string;
  type: string;
  origin: string;
  destination: string;
  departureDate: string;
  arivalDate: string;
  estimatedTime: string;
  status: string;
  price: number;
}

export interface TrainSlice {
  trains: Train[];
  wagonList1: Wagon[];
  wagonList2: Wagon[];
  addTrain: (train: Train) => void;
  removeTrain: (id: number) => void;
  updateTrain: (train: Train) => void;
}

const wagonList1: Wagon[] = [
  {
    id: 1,
    name: "EKO-1",
    type: "Ekonomi(C)",
    totalSeats: 80,
    seatsBooked: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: 2,
    name: "EKO-1",
    type: "Ekonomi(J)",
    totalSeats: 80,
    seatsBooked: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
];

const wagonList2: Wagon[] = [
  {
    id: 1,
    name: "EKS-1",
    type: "Eksekutif(A)",
    totalSeats: 80,
    seatsBooked: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: 2,
    name: "EKS-2",
    type: "Eksekutif(A)",
    totalSeats: 80,
    seatsBooked: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
];

const trainList: Train[] = [
  {
    id: 1,
    name: "Argo Parahyangan",
    type: "Ekonomi(C)",
    origin: "CN",
    destination: "GMR",
    departureDate: "2023-06-14 08:00",
    arivalDate: "2023-06-14 11:00",
    estimatedTime: "3 Jam",
    status: "Tersedia",
    price: 250000,
  },
  {
    id: 2,
    name: "Argo Lawu",
    type: "Eksekutif(J)",
    origin: "CN",
    destination: "GMR",
    departureDate: "2023-06-14 09:00",
    arivalDate: "2023-06-14 12:00",
    estimatedTime: "3 Jam",
    status: "Tersedia",
    price: 150000,
  },
  {
    id: 3,
    name: "Ciremai",
    type: "Eksekutif(A)",
    origin: "SMC",
    destination: "BD",
    departureDate: "2023-06-14 10:00",
    arivalDate: "2023-06-14 17:30",
    estimatedTime: "7 Jam 30 Menit",
    status: "Tersedia",
    price: 300000,
  },
];

export const createTrainSlice: StateCreator<TrainSlice> = (set) => ({
  trains: trainList,
  wagonList1: wagonList1,
  wagonList2: wagonList2,
  addTrain: (train) => {
    set((state) => ({ trains: [...state.trains, train] }));
  },
  removeTrain: (id) => {
    set((state) => ({
      trains: state.trains.filter((train) => train.id !== id),
    }));
  },
  updateTrain: (train) => {
    set((state) => ({
      trains: state.trains.map((t) => {
        if (t.id === train.id) {
          return train;
        }
        return t;
      }),
    }));
  },
});
