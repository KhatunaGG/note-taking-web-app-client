"use client";
import useManageNotes from "@/app/store/notes.store";
import { Delete } from "../../__atoms";
import { usePathname } from "next/navigation";
import { DeleteButton } from "../../__molecules";

const Overlay = () => {
  const path = usePathname();
  const isOverlay = path === "/overlay";
  const { modal, deleteNote, noteById } = useManageNotes();


  return (
    <>
      {modal ? (
        <section className="w-full min-h-screen bg-black/40 fixed inset-0 z-20 flex items-center justify-center">
          <div className=" bg-white  rounded-lg shadow-lg w-[72.21%] md:w-[57.29%] lg:w-[30.55%]">
            <div className="p-[20px] border-b border-b-[#E0E4EA] flex items-start justify-between gap-4">
              <Delete width={"40px"} height={"40px"} />
              <div className="flex flex-col gap-[6px]">
                <h2 className="text-base font-bold text-[#0E121B]">
                  Delete Note
                </h2>
                <div className="text-xs md:text-sm text-[#2B303B]">
                  Are you sure you want to permanently delete this note? This
                  action cannot be undone.
                </div>
              </div>
            </div>
            <div className="w-full py-4 px-[20px] flex items-center justify-end gap-4">
              <DeleteButton isOverlay={true} />
              <button
                onClick={() => deleteNote(noteById?._id || "")}
                className="bg-[#FB3748] text-sm py-3 px-4 rounded-lg text-white"
              >
                Delete Note
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Overlay;
