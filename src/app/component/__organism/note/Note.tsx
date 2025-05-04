"use client";
import { useUtilities } from "@/app/store/utilities.store";

export type NotePropsType = {
  title: string;
  content: string;
  tags: string[];
  _id: string;
  isArchived: boolean;
  lastEdited: string;
};
const Note = ({
  title,
  content,
  tags,
  _id,
  isArchived,
  lastEdited,
}: NotePropsType) => {
  const { formatDate } = useUtilities();
  const formatted = formatDate(lastEdited);
  // const formattedDate = new Date(lastEdited).toLocaleDateString("en-GB", {
  //   day: "2-digit",
  //   month: "short",
  //   year: "numeric",
  // });

  return (
    <div
      className={`w-full border-t border-t-[#E0E4EA] p-2 flex flex-col gap-3 border-b border-b-[#E0E4EA]`}
    >
      <h2 className="text-base font-semibold text-[#0E121B]">{title}</h2>
      <div className="w-full flex flex-wrap gap-1">
        {tags.map((tag, i) => (
          <div
            key={i}
            className="px-[6px] py-[2px] bg-[#E0E4EA] rounded-sm text-xs w-max"
          >
            {tag}
          </div>
        ))}
      </div>
      <p className="text-[#2B303B] text-xs ">{formatted}</p>
    </div>
  );
};

export default Note;
