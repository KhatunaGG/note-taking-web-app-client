"use client";
import { DeleteButton } from "../../__molecules";

export type FooterPropsType = {
  isSubmitting: boolean;
  noteId: string | null;
  createNote: boolean;
};

const Footer = ({ isSubmitting, createNote }: FooterPropsType) => {
  return (
    <div className="w-full pt-4 pb-5 p-6 flex gap-4 items-center border-t border-t-[#E0E4EA] lg:absolute bottom-0 z-10 left-0 right-0 ">
      <button
        type="submit"
        className="bg-[#335CFF] text-sm text-white py-3 px-4 rounded-lg"
        disabled={!createNote || isSubmitting}
      >
        {isSubmitting ? "Saving..." : "Save Note"}
      </button>
      <DeleteButton />
    </div>
  );
};

export default Footer;
