"use client";
import { ArrowLeft, Restore } from "../../__atoms";
import Link from "next/link";
import { ArchivesButton, DeleteButton, ResetButton } from "../../__molecules";
import useManageNotes, { NewNoteType } from "@/app/store/notes.store";
import { usePathname } from "next/navigation";

export type GoBackPropsType = {
  isNoteDetailsPage: boolean;
  isNotePage: boolean;
  noteById: NewNoteType | null;
  isArchivedPage: boolean;
};

const GoBack = ({
  isNoteDetailsPage,
  noteById,
  isNotePage,
  isArchivedPage,
}: GoBackPropsType) => {
  const { resetNewNote } = useManageNotes();
  const path = usePathname();

  return (
    // <div className="w-full pb-3 md:pb-4 flex lg:hidden items-center justify-between border-b border-b-[#E0E4EA] pt-[54px] md:pt-0    ">
    <div
      className={`${
        isNoteDetailsPage ? "pt-0" : "pt-[54px]"
      } w-full pb-3 md:pb-4 flex lg:hidden items-center justify-between border-b border-b-[#E0E4EA] md:pt-0`}
    >
      {/* <Link href={"/note"}> */}

      <Link href={`${isNotePage ? `/note` : `/archive`}`}>
        {/* <Link href={isNotePage ? `/note` : isArchivedPage ? `/archive` : `/`}> */}
        <div onClick={resetNewNote} className="flex items-center gap-1">
          <ArrowLeft />
          <p className="text-sm text-[#525866]">Go Back</p>
        </div>
      </Link>
      <div className="flex gap-4 items-center">
        {!isNoteDetailsPage && <DeleteButton />}
        {!isNoteDetailsPage && <ArchivesButton isArchivedPage={isArchivedPage} />}
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
