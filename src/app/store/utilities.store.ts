import { create } from "zustand";
import { NewNoteType } from "./notes.store";

interface IUseUtilities {
  currentPath: string;
  setCurrentPath: (path: string) => void;
  activeLink: (path: string) => string;
  formatDate: (dateString: string | Date) => string;
  getUniqueTags: (notes: NewNoteType[]) => string[];
  routeToTags: boolean;
  setRouteToTags: (value: boolean) => void;
  handleRoutes: () => void;

}

export const useUtilities = create<IUseUtilities>((set, get) => ({
  currentPath: "",
  routeToTags: false,

  setCurrentPath: (path) => set({ currentPath: path }),
  activeLink: (path) => {
    const currentPath = get().currentPath;
    return currentPath === path ? "bg-[#F3F5F8]" : "hover:bg-[#F3F5F8]";
  },

  formatDate: (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  },


  getUniqueTags: (notes) => {
    const tagSet = new Set<string>();
    notes.forEach((note) => {
      note.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet);
  },

  handleRoutes: () => set({ routeToTags: true }),
  setRouteToTags: (value: boolean) => set({ routeToTags: value }),
}));
