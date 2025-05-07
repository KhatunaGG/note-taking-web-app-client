import { useArchivedNotes } from "@/app/store/archives.store";
import useManageNotes from "@/app/store/notes.store";
import React from "react";

export type DeleteButtonPropsType = {
  isOverlay?: boolean;
};

const ResetButton = ({ isOverlay }: DeleteButtonPropsType) => {
  const { showModal, closeModal, resetNewNote, createNote } = useManageNotes();
  const { archiveModal, setArchiveModal } = useArchivedNotes();

  const handleNoteClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // if (isOverlay) {
    //   closeModal();
    // } else if (createNote) {
    //   resetNewNote();
    // }

    if (isOverlay) {
      closeModal();
      setArchiveModal(false);
    } else if (createNote) {
      resetNewNote();
    }
  };

  const baseClass = "text-sm text-[#525866]";
  const layoutStyle = "bg-[#F3F5F8] py-3 px-4 rounded-lg";
  const noteDetailStyle =
    "bg-transparent py-0 px-0 rounded-none lg:bg-[#F3F5F8] lg:py-3 lg:px-4 lg:rounded-lg";

  return (
    <button
      onClick={handleNoteClick}
      // className="bg-transparent py-0 px-0 rounded-none text-sm text-[#525866] lg:bg-[#F3F5F8]  lg:py-3 lg:px-4 lg:rounded-lg"
      className={`${baseClass} ${isOverlay ? layoutStyle : noteDetailStyle}`}
    >
      Cancel
    </button>
  );
};

export default ResetButton;
