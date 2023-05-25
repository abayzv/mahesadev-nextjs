import { StateCreator } from "zustand";

export interface Form {
  [key: string]: string | number | Date;
}

export interface FormSlice {
  form: Form;
  setForm: (form: Form) => void;
}

export const createFormSlice: StateCreator<FormSlice> = (set) => ({
  form: {},
  setForm: (form) => {
    set((state) => ({ form: form }));
  },
});
