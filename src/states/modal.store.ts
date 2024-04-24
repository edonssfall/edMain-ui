import { IModal, IModalState } from "../interfaces/modal.interface";
import { environment } from "../environments/environment";
import { create } from "zustand";

const initialModalsState: IModal[] = [
  { id: environment.modals.auth, name: "Auth", state: false },
];

export const useModalStore = create<IModalState>()((set) => ({
  modals: initialModalsState,
  open: (id: number) => {
    set((state) => ({
      modals: state.modals.map((modal) =>
        modal.id === id ? { ...modal, state: true } : modal
      ),
    }));
  },
  close: (id: number) => {
    set((state) => ({
      modals: state.modals.map((modal) =>
        modal.id === id ? { ...modal, state: false } : modal
      ),
    }));
  },
}));
