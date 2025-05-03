// "use client";
// import Footer from "../footer/Footer";
// import { Clock } from "../../__atoms";
// import { TagInput, Textarea, TitleInput } from "../../__molecules";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import useManageNotes from "@/app/store/notes.store";
// import { useEffect } from "react";
// import { useSignInStore } from "@/app/store/sign-in.store";
// import { usePathname } from "next/navigation";

// const createNoteSchema = z.object({
//   title: z.string().min(1, "Title cannot be empty"),
//   content: z.string().min(1, "Title cannot be empty"),
//   isArchived: z.boolean(),
//   // tags: z.array(z.string().min(1, "Tags must be non-empty strings")),
//   tags: z.string(),
//   lastEdited: z.string().optional(),
// });

// export type NoteType = z.infer<typeof createNoteSchema>;

// export type NoteDetailsPropsType = {
//   noteId?: string | null
// }

// const NoteDetails = ({ noteId = null }: NoteDetailsPropsType) => {
//   const { accessToken } = useSignInStore();
//   const {
//     createNote,
//     createNewNote,
//     success,
//     allNotes,
//     getAllNotes,
//     getNoteById,
//     noteById,
//     setCreateNote
//   } = useManageNotes();

//   // useEffect(() => {
//   //   if (noteId) {
//   //     setCreateNote(false);
//   //     getNoteById(noteId);
//   //   } else {
//   //     setCreateNote(true);
//   //   }
//   // }, [noteId, setCreateNote, getNoteById]);

//   // console.log(noteById, "noteById")

//   // const pathname = usePathname();
//   //   // Don't render anything if we're on the archives page
//   // if (pathname === '/archives') {
//   //   return null;
//   // }

//   useEffect(() => {
//     if (accessToken) {
//       getAllNotes();
//     }
//   }, [accessToken, getAllNotes]);

//   const {
//     register,
//     reset,
//     formState: { errors, isSubmitting },
//     handleSubmit,
//     watch,
//     setValue
//   } = useForm<NoteType>({
//     resolver: zodResolver(createNoteSchema),
//     defaultValues: {
//       title: "",
//       content: "",
//       tags: "",
//       isArchived: false,
//       lastEdited: "",
//     },
//   });

//   useEffect(() => {
//     if (!createNote && noteById) {
//       setValue("title", noteById.title || "");
//       setValue("content", noteById.content || "");
//       setValue("tags", Array.isArray(noteById.tags) ? noteById.tags.join(", ") : noteById.tags || "");
//       setValue("isArchived", !!noteById.isArchived);
//       setValue("lastEdited", noteById.lastEdited || "");
//     } else if (createNote) {
//       // Reset form when creating a new note
//       reset({
//         title: "",
//         content: "",
//         tags: "",
//         isArchived: false,
//         lastEdited: "",
//       });
//     }
//   }, [noteById, setValue, createNote, reset]);

//   const onSubmit = async (formData: NoteType) => {
//     let result;

//     if (createNote) {
//       // Create new note
//       result = await createNewNote(formData);
//     }
//     // else if (noteById && noteId) {
//     //   // Update existing note
//     //   result = await updateNote(noteId, formData);
//     // }

//     if (result) {
//       getAllNotes();
//     }
//   };

//   const formTitle = watch("title");
//   const formContent = watch("content");
//   const lastEditedText = noteById?.lastEdited
//     ? new Date(noteById.lastEdited).toLocaleString()
//     : "Not yet saved";

//   if (!accessToken) return null;

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="w-full relative">
//       <div className="hidden w-full px-6 pt-5 pb-4   h-full lg:flex flex-col gap-4  border-r border-r-[#CACFD8]">
//         {createNote && (
//           <div className="flex-grow w-full  border-[#E0E4EA] bg-white flex flex-col gap-4">
//             <div className="w-ful flex flex-col gap-4">
//               <TitleInput
//                 register={register}
//                 errors={errors}
//                 fieldName={"title"}
//               />
//               {/* <h2 className="font-bold text-2xl text-[#0E121B]">
//                 React Performance Optimization
//               </h2> */}
//               <div className="flex flex-col gap-2">
//                 <TagInput
//                   register={register}
//                   errors={errors}
//                   fieldName={"tags"}
//                 />
//                 <div className="w-full flex items-center">
//                   <div className="flex gap-[6px] items-center w-[19.55%]">
//                     <Clock />
//                     <p className="w-[19.55%] text-sm text-[#2B303B] whitespace-nowrap">
//                       Last edited
//                     </p>
//                   </div>
//                   <div className="flex gap-[6px] items-center">
//                     <p className="text-sm text-[#99A0AE]">Not yet saved</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="border-t border-t-[#E0E4EA] pt-4 flex-grow">
//                 <Textarea
//                   register={register}
//                   errors={errors}
//                   fieldName={"content"}
//                 />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       <Footer isSubmitting={isSubmitting} />
//     </form>
//   );
// };

// export default NoteDetails;

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
import { usePathname } from "next/navigation";
import { useUtilities } from "@/app/store/utilities.store";

const createNoteSchema = z.object({
  title: z.string().min(1, "Title cannot be empty"),
  content: z.string().min(1, "Title cannot be empty"),
  isArchived: z.boolean(),
  // tags: z.array(z.string().min(1, "Tags must be non-empty strings")),
  tags: z.string(),
  lastEdited: z.string().optional(),
});

export type NoteType = z.infer<typeof createNoteSchema>;

const NoteDetails = ({ noteParam }: { noteParam?: string }) => {
  console.log(noteParam, "noteById");
  const { accessToken, initialize } = useSignInStore();
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
      // Reset form when creating a new note
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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full relative">
      <div className="hidden w-full px-6 pt-5 pb-4   h-full lg:flex flex-col gap-4  border-r border-r-[#CACFD8]">
        {(createNote || noteById) && (
          <div className="flex-grow w-full  border-[#E0E4EA] bg-white flex flex-col gap-4">
            <div className="w-ful flex flex-col gap-4">
              <TitleInput
                register={register}
                errors={errors}
                fieldName={"title"}
              />
              {/* <h2 className="font-bold text-2xl text-[#0E121B]">
                React Performance Optimization
              </h2> */}
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
