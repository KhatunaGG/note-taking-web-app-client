import useManageNotes from "@/app/store/notes.store";
import React from "react";

export type DeleteButtonPropsType = {
  isOverlay?: boolean;
};

const DeleteButton = ({ isOverlay }: DeleteButtonPropsType) => {
  const { showModal, closeModal, resetNewNote, createNote } = useManageNotes();

  const handleNoteClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isOverlay) {
      closeModal();
    } else if (createNote) {
      resetNewNote();
    } else {
      showModal();
    }
  };

  return (
    <button
      onClick={handleNoteClick}
      className="bg-[#F3F5F8] text-sm text-[#525866] py-3 px-4 rounded-lg"
    >
      Cancel
    </button>
  );
};

export default DeleteButton;
