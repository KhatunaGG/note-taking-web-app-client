// store/useManageNotes.ts
import { create } from "zustand";

export interface IUseManageNotes {
  createNote: boolean;
  setCreateNote: (createNote: boolean) => void;
}

const useManageNotes = create<IUseManageNotes>((set) => ({
  createNote: false,
  setCreateNote: (createNote) => set({ createNote }),
}));

export default useManageNotes;
