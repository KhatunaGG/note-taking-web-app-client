"use client";
import Note from "../note/Note";
import Nav from "../nav/Nav";
import { Plus } from "../../__atoms";
import Link from "next/link";
import useManageNotes from "../../../store/notes.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSignInStore } from "@/app/store/sign-in.store";

const Notes = () => {
  const router = useRouter();
  const { accessToken } = useSignInStore();

  useEffect(() => {
    (async () => {
      await useSignInStore.getState().initialize();
    })();
  }, []);

  const {
    setCreateNote,
    createNote,
    allNotes,
    getNoteById,
    getAllNotes,
    toggleCreateNote,
    setActiveNote,
    activeNote,
  } = useManageNotes();

  console.log(activeNote, "activeNote");

  useEffect(() => {
    getAllNotes();
  }, []);

  const handleCreate = () => {
    toggleCreateNote();
  };

  const handleNoteClick = async (id: string) => {
    await getNoteById(id);

    // router.push(`/note/${id}`);
  };

  if (!accessToken) return null;

  return (
    <div className="w-full min-h-[calc(100vh-54px)] md:min-h-[calc(100vh-74px)] lg:min-h-[calc(100vh-81px)] bg-white">
      <div
        className="px-8 pt-[20px] lg:pl-8 md:pt-6 lg:pt-[20px] lg:pr-4 flex flex-col gap-4 
    lg:border lg:border-[#E0E4EA] rounded-t-xl overflow-hidden lg:rounded-t-[0px]  relative    min-h-screen"
      >
        <h1 className="block font-bold text-[24px] text-[#0E121B] lg:hidden">
          All Notes
        </h1>

        <button
          onClick={handleCreate}
          className="hidden w-full bg-[#335CFF] rounded-lg text-white text-sm font-normal py-3 lg:flex items-center justify-center"
        >
          + Create New Note
        </button>

        <button
          type="button"
          className=" bg-green-600 text-white text-sm font-normal  
        fixed right-8 bottom-[90px] h-[48px] w-[48px]
       md:h-[64px] md:w-[64px] rounded-full 
       items-center justify-center lg:hidden"
        >
          <div className="w-full flex items-center justify-center gap-1">
            <Plus />
            <span className="hidden lg:block lg:text-sm font-medium ">+</span>
            <span className="hidden text-sm font-medium lg:block">
              Create New Note
            </span>
          </div>
        </button>

        {/* <button
          onClick={handleCreate}
          type="button"
          className=" bg-[#335CFF] text-white text-sm font-normal py-3 
        fixed right-8 bottom-[90px] h-[48px] w-[48px]
       md:h-[64px] md:w-[64px] rounded-full 
       lg:static lg:w-full lg:rounded-lg lg:h-auto lg:flex items-center justify-center"
        >
          <div className="w-full flex items-center justify-center gap-1">
            <Plus />
            <span className="hidden lg:block lg:text-sm font-medium ">+</span>
            <span className="hidden text-sm font-medium lg:block">
              Create New Note
            </span>
          </div>
        </button> */}

        <div className="w-full flex flex-col md:pb-[114px] lg:pb-[37px]">
          {allNotes.length > 0 ? (
            allNotes.map((note) => (
              <div
                key={note._id}
                className="w-full"
                onClick={() => handleNoteClick(note._id)}
              >
                <Link href={`/note/${note._id}`}>
                  {/* <Link href={`/note`}> */}
                  <Note
                    title={note.title}
                    tags={note.tags}
                    _id={note._id}
                    content={note.content}
                    isArchived={note.isArchived}
                    lastEdited={note.lastEdited}
                  />
                </Link>
              </div>
            ))
          ) : (
            <p className="hidden text-sm font-medium text-[#0E121B]">
              You don’t have any notes yet. Start a new note to capture your
              thoughts and ideas.
            </p>
          )}
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Notes;


