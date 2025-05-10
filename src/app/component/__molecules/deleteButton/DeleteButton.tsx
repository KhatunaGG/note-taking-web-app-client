import useManageNotes from "@/app/store/notes.store";
import React from "react";
import { Delete } from "../../__atoms";

export type DeleteButtonPropsType = {
  isOverlay?: boolean;
};

const DeleteButton = ({ isOverlay }: DeleteButtonPropsType) => {
  const { showModal, noteById, deleteNote, modal } = useManageNotes();

  const handleNoteClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (noteById) {
      await showModal();
    }
    if (isOverlay && noteById) {
      deleteNote(noteById?._id || "");
    }
  };

  return (
    <button
      onClick={handleNoteClick}
      className={`${
        isOverlay && modal
          ? "bg-[#FB3748] py-3 px-4  rounded-lg text-white"
          : "bg-transparent text-[#0E121B]"
      }  lg:rounded-lg lg:border lg:border-[#CACFD8] lg:px-4  lg:py-[11.5px] lg:flex lg:items-center lg:justify-start lg:gap-2 cursor-pointer`}
    >
      <div className={`${isOverlay && "hidden"}`}>
        <Delete width={"20px"} height={"20px"} />
      </div>
      {/* <p className="hidden text-sm text-[#0E121B] font-medium lg:block"> */}
      <p
        className={`${
          isOverlay ? "block text-white" : "hidden lg:flex text-[#0E121B] "
        } text-sm font-medium `}
      >
        Delete Note
      </p>
    </button>
  );
};

export default DeleteButton;