import React from "react";
import Note from "../note/Note";

const Notes = () => {
  return (
    <div
      className="w-full px-8 pb-[114px] lg:w-[32.82%] pt-[20px] lg:pl-8 md:pt-6 lg:pt-[20px] lg:pr-4 lg:pb-[37px] flex flex-col gap-4 
    lg:border lg:border-[#E0E4EA] rounded-t-xl overflow-hidden lg:rounded-t-[0px] bg-white"
    >
      <h1 className="block font-bold text-[24px] text-[#0E121B] lg:hidden">
        All Notes
      </h1>
      <button className="hidden w-full bg-[#335CFF] rounded-lg text-white text-sm font-normal py-3 lg:flex items-center justify-center">
        + Create New Note
      </button>

      <div className="w-full flex flex-col">
        <Note />
        <Note />
      </div>
    </div>
  );
};

export default Notes;
