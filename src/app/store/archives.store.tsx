import { create } from "zustand";
import useManageNotes, { NewNoteType } from "./notes.store";

export interface IArchivedNotes {
  archiveModal: boolean;

  setArchiveModal: (archiveModal: boolean) => void;
}

export const useArchivedNotes = create<IArchivedNotes>((set) => ({
  archiveModal: false,

  setArchiveModal: (archiveModal: boolean) => set({ archiveModal }),
}));
