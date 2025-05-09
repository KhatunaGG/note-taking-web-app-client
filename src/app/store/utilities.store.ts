// import { create } from "zustand";
// import { NewNoteType } from "./notes.store";

// interface IUseUtilities {
//   currentPath: string;
//   setCurrentPath: (path: string) => void;
//   activeLink: (path: string) => string;
//   formatDate: (dateString: string | Date) => string;
//   getUniqueTags: (notes: NewNoteType[]) => string[];
//   routeToTags: boolean;
//   setRouteToTags: (value: boolean) => void;
//   handleRoutes: () => void;

// }

// export const useUtilities = create<IUseUtilities>((set, get) => ({
//   currentPath: "",
//   routeToTags: false,

//   setCurrentPath: (path) => set({ currentPath: path }),
//   activeLink: (path) => {
//     const currentPath = get().currentPath;
//     return currentPath === path ? "bg-[#F3F5F8]" : "hover:bg-[#F3F5F8]";
//   },

//   formatDate: (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   },

//   getUniqueTags: (notes) => {
//     const tagSet = new Set<string>();
//     notes.forEach((note) => {
//       note.tags.forEach((tag) => tagSet.add(tag));
//     });
//     return Array.from(tagSet);
//   },

//   handleRoutes: () => set({ routeToTags: true }),
//   setRouteToTags: (value: boolean) => set({ routeToTags: value }),
// }));

import { create } from "zustand";
import useManageNotes, { NewNoteType } from "./notes.store";

interface IUseUtilities {
  currentPath: string;
  isArchivedPage: boolean;
  setCurrentPath: (path: string) => void;
  activeLink: (path: string) => string;
  formatDate: (dateString: string | Date) => string;
  getUniqueTags: (notes: NewNoteType[]) => string[];
  routeToTags: boolean;
  setRouteToTags: (value: boolean) => void;
  handleRoutes: () => void;
  filteredNotes: (allNotes: NewNoteType[]) => NewNoteType[];
}

export const useUtilities = create<IUseUtilities>((set, get) => ({
  currentPath: "",
  isArchivedPage: false,
  routeToTags: false,

  setCurrentPath: (path) => set({ currentPath: path }),
  activeLink: (path) => {
    const currentPath = get().currentPath;
    return currentPath.includes(path) ? "bg-[#F3F5F8]" : "hover:bg-[#F3F5F8]";
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

  setIsArchivedPage: (isArchived: boolean) =>
    set({ isArchivedPage: isArchived }),
  handleRoutes: () => set({ routeToTags: true }),
  setRouteToTags: (value: boolean) => set({ routeToTags: value }),
  filteredNotes: (allNotes) => {
    const { isArchivedPage } = get();
    return isArchivedPage
      ? allNotes.filter((note) => note.isArchived === true)
      : allNotes;
  },
}));
