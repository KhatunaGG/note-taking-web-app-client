"use client";
import { ArrowLeft } from "../../__atoms";
import Link from "next/link";
import { ArchivesButton, DeleteButton, ResetButton } from "../../__molecules";
import useManageNotes, { NewNoteType } from "@/app/store/notes.store";
import { useArchivedNotes } from "@/app/store/archives.store";

export type GoBackPropsType = {
  isNoteDetailsPage: boolean;
  isNotePage: boolean;
  noteById: NewNoteType | null;
};

const GoBack = ({
  isNoteDetailsPage,
  noteById,
}: GoBackPropsType) => {
  const { resetNewNote } = useManageNotes();

  return (
    <div className="w-full pb-3 md:pb-4 flex lg:hidden items-center justify-between border-b border-b-[#E0E4EA] pt-[54px] md:pt-0    ">
      <Link href={"/note"}>
        <div onClick={resetNewNote} className="flex items-center gap-1">
          <ArrowLeft />
          <p className="text-sm text-[#525866]">Go Back</p>
        </div>
      </Link>
      <div className="flex gap-4 items-center">
        {!isNoteDetailsPage && <DeleteButton />}
        {!isNoteDetailsPage && <ArchivesButton />}
        <ResetButton
          isNoteDetailsPage={isNoteDetailsPage}
          noteById={noteById}
        />
        <p className="text-sm  text-[#335CFF]">Save Note</p>
      </div>
    </div>
  );
};

export default GoBack;
