export interface IModal {
  id: number;
  name: string;
  state: boolean;
}

export interface IModalState {
  modals: IModal[];
  open: (id: number) => void;
  close: (id: number) => void;
}
