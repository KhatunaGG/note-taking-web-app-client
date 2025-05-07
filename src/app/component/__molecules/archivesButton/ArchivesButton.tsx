"use client";
import { useArchivedNotes } from "@/app/store/archives.store";
import { Archives } from "../../__atoms";
import useManageNotes from "@/app/store/notes.store";
import { usePathname } from "next/navigation";

export type ArchiveButtonPropsType = {
  isOverlay?: boolean;
};

const ArchivesButton = ({ isOverlay }: ArchiveButtonPropsType) => {
  const path = usePathname();
  const isNoteDetailsPage = path === "/note";
  console.log(isNoteDetailsPage, "isNoteDetailsPage");
  const { showModal, noteById, deleteNote, modal, updateNote } = useManageNotes();
  const { setArchiveModal, archiveModal } = useArchivedNotes();

  console.log(noteById, "noteById")
  const handleNoteClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (noteById) {
      setArchiveModal(true);
    } else if(isOverlay && noteById) {
        updateNote(noteById)
    }
  };
  return (
    <button
      onClick={handleNoteClick}
      className={`${
        isOverlay
          ? "bg-[#335CFF] py-3 px-4  rounded-lg text-white"
          : "bg-transparent text-[#0E121B]"
      }  lg:rounded-lg lg:border lg:border-[#CACFD8] lg:px-4  lg:py-[11.5px] lg:flex lg:items-center lg:justify-start lg:gap-2 cursor-pointer`}
    >
      <div className={`${isOverlay && "hidden"}`}>
        <Archives width={"20px"} height={"20px"} />
      </div>
      <p
        className={`${
          isOverlay ? "block text-white" : "hidden lg:flex text-[#0E121B] "
        } text-sm font-medium `}
      >
        Archive Note
      </p>
    </button>
  );
};

export default ArchivesButton;
