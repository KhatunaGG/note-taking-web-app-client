import { create } from "zustand";
import useManageNotes, { NewNoteType } from "./notes.store";

export interface IArchivedNotes {
  archiveModal: boolean;
  // allArchivedNotes: NewNoteType[];

  setArchiveModal: (archiveModal: boolean) => void;
  // setAllArchivedNotes: (allArchivedNotes: NewNoteType[]) => void;
  // getAllArchivedNotes: () => void;
}

export const useArchivedNotes = create<IArchivedNotes>((set) => ({
  archiveModal: false,
  // allArchivedNotes: [],

  setArchiveModal:(archiveModal: boolean) => set({archiveModal}),
  // setAllArchivedNotes: (allArchivedNotes: NewNoteType[]) => set({allArchivedNotes}),

  // getAllArchivedNotes: async () => {
  //  const getAllNotes = useManageNotes.getState().getAllNotes
  //  const allNotes = useManageNotes.getState().allNotes
  //  await getAllNotes()

  // }
}));
