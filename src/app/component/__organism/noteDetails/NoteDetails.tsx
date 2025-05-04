"use client";
import Footer from "../footer/Footer";
import { Clock } from "../../__atoms";
import { TagInput, Textarea, TitleInput } from "../../__molecules";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import useManageNotes from "@/app/store/notes.store";
import { useEffect } from "react";
import { useSignInStore } from "@/app/store/sign-in.store";
import { useUtilities } from "@/app/store/utilities.store";

const createNoteSchema = z.object({
  title: z.string().min(1, "Title cannot be empty"),
  content: z.string().min(1, "Title cannot be empty"),
  isArchived: z.boolean(),
  tags: z.string(),
  lastEdited: z.string().optional(),
});

export type NoteType = z.infer<typeof createNoteSchema>;

const NoteDetails = ({ noteParam }: { noteParam?: string }) => {
  const { accessToken } = useSignInStore();
  const { formatDate } = useUtilities();

  const {
    createNote,
    createNewNote,
    success,
    allNotes,
    getAllNotes,
    getNoteById,
    noteById,
    setCreateNote,
  } = useManageNotes();

  // useEffect(() => {
  //   if (accessToken) {
  //     getAllNotes();
  //   }
  // }, [accessToken, getAllNotes]);

  useEffect(() => {
    if (noteParam) {
      getNoteById(noteParam);
    }
  }, [accessToken, noteParam]);

  const {
    register,
    reset,
    formState: { errors, isSubmitting },
    handleSubmit,
    watch,
    setValue,
  } = useForm<NoteType>({
    resolver: zodResolver(createNoteSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: "",
      isArchived: false,
      lastEdited: "",
    },
  });

  const onSubmit = async (formData: NoteType) => {
    let result;
    if (createNote) {
      result = await createNewNote(formData);
    }
    if (result) {
      getAllNotes();
    }
  };

  useEffect(() => {
    if (noteById) {
      setValue("title", noteById.title || "");
      setValue("content", noteById.content || "");
      setValue(
        "tags",
        Array.isArray(noteById.tags)
          ? noteById.tags.join(", ")
          : noteById.tags || ""
      );
      setValue("isArchived", !!noteById.isArchived);
      setValue("lastEdited", noteById.lastEdited || "");
    } else if (createNote) {
      reset({
        title: "",
        content: "",
        tags: "",
        isArchived: false,
        lastEdited: "",
      });
    }
  }, [noteById, setValue, createNote, reset]);

  const formTitle = watch("title");
  const formContent = watch("content");
  const lastEditedText = noteById?.lastEdited
    ? formatDate(noteById.lastEdited)
    : "Not yet saved";

  if (!accessToken) return null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full relative ">
      <div className="w-full px-6 pt-5 pb-4   h-full lg:flex flex-col gap-4  border-r border-r-[#CACFD8]">
        {(createNote || noteById) && (
          <div className="flex-grow w-full  border-[#E0E4EA] bg-white flex flex-col gap-4">
            <div className="w-ful flex flex-col gap-4">
              <TitleInput
                register={register}
                errors={errors}
                fieldName={"title"}
              />
              <div className="flex flex-col gap-2">
                <TagInput
                  register={register}
                  errors={errors}
                  fieldName={"tags"}
                />
                <div className="w-full flex items-center">
                  <div className="flex gap-[6px] items-center w-[19.55%]">
                    <Clock />
                    <p className="w-[19.55%] text-sm text-[#2B303B] whitespace-nowrap">
                      Last edited
                    </p>
                  </div>
                  <div className="flex gap-[6px] items-center">
                    <p className="text-sm text-[#99A0AE]">{lastEditedText}</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-t-[#E0E4EA] pt-4 flex-grow">
                <Textarea
                  register={register}
                  errors={errors}
                  fieldName={"content"}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer
        isSubmitting={isSubmitting}
        noteId={noteById?._id || null}
        createNote={createNote}
      />
    </form>
  );
};

export default NoteDetails;
