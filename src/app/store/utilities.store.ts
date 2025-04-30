import { create } from "zustand";

interface IUseUtilities {
  currentPath: string;
  setCurrentPath: (path: string) => void;
  activeLink: (path: string) => string;
}

export const useUtilities = create<IUseUtilities>((set, get) => ({
  currentPath: "",
  setCurrentPath: (path) => set({ currentPath: path }),
  activeLink: (path) => {
    const currentPath = get().currentPath;
    return currentPath === path ? "bg-[#F3F5F8]" : "hover:bg-[#F3F5F8]";
  },
}));
