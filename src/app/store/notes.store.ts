import { create } from "zustand";
import { NoteType } from "../component/__organism/noteDetails/NoteDetails";
import axios, { AxiosError } from "axios";
import { ErrorResponse } from "../interface";
import { toast } from "react-toastify";
import { axiosInstance } from "../libs/axiosInstance";
import { useSignInStore } from "./sign-in.store";

export type NewNoteType = {
  title: string;
  content: string;
  tags: string[];
  isArchived: boolean;
  lastEdited: string;
  _id: string;
};

const handleApiError = (error: AxiosError<ErrorResponse>): string => {
  if (axios.isAxiosError(error)) {
    const errorMessage = error.response?.data.message || "An error occurred";
    toast.error(errorMessage);
    return errorMessage;
  }
  const unexpectedError = "An unexpected error occurred";
  toast.error(unexpectedError);
  return unexpectedError;
};

export interface IUseManageNotes {
  isLoading: boolean;
  axiosError: string;
  success: boolean;
  createNote: boolean;
  title: string;
  content: string;
  tags: string[];
  isArchived: boolean;
  lastEdited: Date;
  allNotes: NewNoteType[];
  noteById: NewNoteType | null;
  activeNote: string | null;

  setActiveNote: (id: string) => void;
  setNoteById: (noteById: NewNoteType) => void;
  setSuccess: (success: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  setCreateNote: (createNote: boolean) => void;
  setAxiosError: (axiosError: string) => void;
  setFormState: (
    title: string,
    content: string,
    tags: string[],
    isArchived: boolean,
    lastEdited: Date
  ) => void;
  // createNewNote: (formData: NoteType) => void;
  createNewNote: (formData: NoteType) => Promise<boolean>;
  getAllNotes: () => void;
  setAllNotes: (allNotes: NewNoteType[]) => void;
  getNoteById: (id: string) => Promise<void>;
  toggleCreateNote: () => void;
  deleteNote: (id: string | null) => void;
}

const useManageNotes = create<IUseManageNotes>((set) => ({
  isLoading: false,
  axiosError: "",
  success: false,
  createNote: false,
  title: "",
  content: "",
  tags: [],
  isArchived: false,
  lastEdited: new Date(),
  allNotes: [],
  noteById: null,
  activeNote: null,

  setActiveNote: (id) => set({ activeNote: id }),
  setNoteById: (noteById) => set({ noteById }),
  setAllNotes: (allNotes) => set({ allNotes }),
  setSuccess: (success) => set({ success }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setCreateNote: (createNote) => set({ createNote }),
  setAxiosError: (axiosError) => set({ axiosError }),
  setFormState: (title, content, tags, isArchived) =>
    set({ title, content, tags, isArchived }),
  toggleCreateNote: () =>
    set((state) => ({ createNote: !state.createNote, noteById: null })),

  createNewNote: async (formData: NoteType) => {
    set({ isLoading: true, axiosError: "" });
    const accessToken = useSignInStore.getState().accessToken;
    const tagsArray: string[] = formData.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    const newNote = {
      ...formData,
      tags: tagsArray,
      lastEdited: new Date().toString(),
    };

    try {
      const res = await axiosInstance.post("note", newNote, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (res.status >= 200 && res.status <= 204) {
        useManageNotes.getState().getAllNotes();
        set({
          title: "",
          content: "",
          tags: [],
          isArchived: false,
          lastEdited: undefined,
          success: true,
          createNote: false,
        });
        return true;
      }
    } catch (e) {
      const errorMessage = handleApiError(e as AxiosError<ErrorResponse>);
      set({ axiosError: errorMessage });
    } finally {
      set({ isLoading: false });
    }

    return false;
  },

  getAllNotes: async () => {
    set({ isLoading: true, axiosError: "" });
    const accessToken = useSignInStore.getState().accessToken;
    try {
      const res = await axiosInstance.get("/note", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (res.status >= 200 && res.status <= 204) {
        set({ allNotes: res.data, success: true });
      }
    } catch (e) {
      const errorMessage = handleApiError(e as AxiosError<ErrorResponse>);
      set({ axiosError: errorMessage });
    } finally {
      set({ isLoading: false });
    }
  },

  getNoteById: async (id: string) => {
    const accessToken = useSignInStore.getState().accessToken;

    set({ isLoading: true, axiosError: "" });

    try {
      const res = await axiosInstance.get(`/note/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (res.status >= 200 && res.status <= 204) {
        set({ noteById: res.data, success: true });
      }
    } catch (e) {
      const errorMessage = handleApiError(e as AxiosError<ErrorResponse>);
      set({ axiosError: errorMessage });
    } finally {
      set({ isLoading: false });
    }
  },

  deleteNote: async (id: string | null) => {
    if (id === null) {
      set({ createNote: false });
      set({
        title: "",
        content: "",
        tags: [],
        isArchived: false,
        lastEdited: undefined,
        success: true,
        createNote: false,
      });
    } else if (id) {
      console.log(id, "id from delete function");
    }
  },
}));

export default useManageNotes;
