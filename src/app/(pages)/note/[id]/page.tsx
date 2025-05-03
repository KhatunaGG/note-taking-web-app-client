// import { NoteDetails } from '@/app/component/__organism';
// import React from 'react';

// // This is a Server Component
// export default function NoteIdPage({ params }: { params: { id: string } }) {
//   // The ID is passed to the client component NoteDetails
//   if (!params?.id) return null;

//   return <NoteDetails noteId={params.id} />;
// }


import { Aside, Header, NoteDetails, Notes } from "@/app/component/__organism";
import React from "react";

export default async function ParamPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Fetch the note data here if needed
  // const note = await getNoteByIdServer(id);

  return (
    <div className="w-full flex flex-col items-start relative">
      <div className="h-[54px] md:h-[74px] lg:h-[81px] w-full absolute inset-0 z-10">
        <Header />
      </div>

      <div className="w-full t-[54px] md:pt-[74px] lg:pt-[81px] min-h-screen flex">
        <div className="w-full lg:w-[24.82%] ">
          <Notes />
        </div>
        <div className="w-full lg:w-[50.34%] hidden lg:flex border-r border-r-[#CACFD8]">
          {id && <NoteDetails noteParam={id} />}
        </div>
        <div className="w-full lg:w-[22.07%] hidden lg:flex ">
          <Aside />
        </div>
      </div>
    </div>
  );
}
